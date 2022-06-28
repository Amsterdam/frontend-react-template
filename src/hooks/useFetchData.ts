import { useCallback, useReducer, useMemo } from "react";
import axios from "axios";
import type { Reducer } from "react";

type Data = Record<string, unknown>;

export type FetchError = (Response | Error) & {
  message: string;
  detail?: string;
};

export interface State {
  data?: any;
  error?: boolean | FetchError;
  loading: boolean;
  success: boolean | undefined;
}

interface FetchResponse extends State {
  get: (url: string, params?: Data, requestOptions?: Data) => Promise<void>;
  patch: (url: string, modifiedData: Data, requestOptions?: Data) => Promise<void>;
  post: (url: string, modifiedData?: Data, requestOptions?: Data) => Promise<void>;
  put: (url: string, modifiedData: Data, requestOptions?: Data) => Promise<void>;
}

/**
 * Custom hook useFetchData
 *
 * Will take a URL and an optional object of parameters and use those to construct a request URL
 * with, call fetch and return the response.
 *
 * @returns {FetchResponse}
 */

const useFetchData = (): FetchResponse => {
  interface Action {
    payload: boolean | Data | FetchError;
    type: string;
  }

  const initialState: State = {
    data: undefined,
    error: undefined,
    loading: false,
    success: undefined,
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_LOADING":
        return { ...state, loading: action.payload as boolean, error: false };

      case "SET_GET_DATA":
        return {
          ...state,
          data: action.payload as unknown,
          loading: false,
          error: false,
        };

      case "SET_MODIFY_DATA":
        return {
          ...state,
          data: action.payload as unknown,
          loading: false,
          error: false,
          success: true,
        };

      case "SET_ERROR":
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload as FetchError,
        };

      /* istanbul ignore next */
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  const requestHeaders = useCallback(
    () => ({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    [],
  );

  const get = useCallback(
    async (url: string, params = {}, requestOptions: Data = {}) => {
      dispatch({ type: "SET_LOADING", payload: true });

      const arrayParams = Object.entries(params)
        .filter(([, value]) => Array.isArray(value))
        .flatMap(([key, value]) => (value as string[]).flatMap((val: string) => `${key}=${val}`));

      const scalarParams = Object.entries(params)
        .filter(([, value]) => Boolean(value) && !Array.isArray(value))
        .flatMap(([key, value]) => `${key}=${value}`);

      const queryParams = arrayParams.concat(scalarParams).join("&");
      const requestURL = [url, queryParams].filter(Boolean).join("?");

      try {
        const fetchResponse: any = await axios.get(requestURL, {
          headers: requestHeaders(),
          ...requestOptions,
        });

        if (fetchResponse.statusText === "OK") {
          dispatch({ type: "SET_GET_DATA", payload: fetchResponse.data });
        } else {
          //@ts-ignore
          dispatch({ type: "SET_ERROR", payload: fetchResponse as FetchError });
          // eslint-disable-next-line no-console
          console.error("fetch get error", url, fetchResponse);
        }
      } catch (exception: unknown) {
        // eslint-disable-next-line no-console
        console.error("fetch get error", url);
        dispatch({ type: "SET_ERROR", payload: exception as FetchError });
      }
    },

    [requestHeaders],
  );

  const modify = useCallback(
    (method: string) =>
      async (url: string, modifiedData: Data = {}, requestOptions: Data = {}) => {
        dispatch({ type: "SET_LOADING", payload: true });

        let modifyResponse;
        try {
          switch (method) {
            case "POST":
              modifyResponse = await axios.post(url, {
                headers: requestHeaders(),
                body: JSON.stringify(modifiedData),
                ...requestOptions,
              });
              break;

            case "PATCH":
              modifyResponse = await axios.patch(url, {
                headers: requestHeaders(),
                body: JSON.stringify(modifiedData),
                ...requestOptions,
              });
              break;

            case "PUT":
              modifyResponse = await axios.put(url, {
                headers: requestHeaders(),
                body: JSON.stringify(modifiedData),
                ...requestOptions,
              });
              break;
          }

          if (modifyResponse?.statusText === "OK") {
            dispatch({ type: "SET_MODIFY_DATA", payload: modifyResponse.data });
          } else {
            dispatch({
              type: "SET_ERROR",
              //@ts-ignore
              payload: modifyResponse as FetchError | undefined,
            });

            // eslint-disable-next-line no-console
            console.error("fetch modify error", method, url, modifyResponse);
          }
        } catch (exception: unknown) {
          dispatch({ type: "SET_ERROR", payload: exception as FetchError });
          // eslint-disable-next-line no-console
          console.error("fetch modify error", method, url);
        }
      },
    [requestHeaders],
  );

  const post = useMemo(() => modify("POST"), [modify]);
  const patch = useMemo(() => modify("PATCH"), [modify]);
  const put = useMemo(() => modify("PUT"), [modify]);

  /**
   * @typedef {Object} FetchResponse
   * @property {Object} data - Fetch response
   * @property {Error} error - Error object thrown during fetch and data parsing
   * @property {Function} get - Function that expects a URL and a query parameter object
   * @property {Boolean} loading - Indicator of fetch request status
   * @property {Boolean} success - Indicator of post or patch request status
   * @property {Function} patch - Function that expects a URL and a data object as parameters
   * @property {Function} post - Function that expects a URL and a data object as parameters
   */
  return {
    get,
    patch,
    post,
    put,
    ...state,
  };
};

export default useFetchData;
