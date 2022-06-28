import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import useFetchData from "./useFetchData";

jest.mock("axios");

describe("hooks/useFetchData", () => {
  const mockData = {
    data: "mock-data",
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should do a GET request", async () => {
    //@ts-ignore
    axios.get.mockResolvedValueOnce({ data: mockData, statusText: "OK" });

    const { result, unmount } = renderHook(() => useFetchData());

    await act(async () => result.current.get("http://test-url"));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeFalsy();
    expect(result.current.loading).toBeFalsy();

    unmount();
  });

  it("should return errors when doing a GET", async () => {
    //@ts-ignore
    axios.get.mockResolvedValueOnce({ data: mockData, statusText: "false" });

    const { result, unmount } = renderHook(() => useFetchData());

    await act(async () => result.current.get("http://test-url"));

    expect(result.current.error).toBeTruthy();
    expect(result.current.loading).toBeFalsy();

    unmount();
  });

  it("should do a POST request", async () => {
    //@ts-ignore
    axios.post.mockResolvedValueOnce({ data: mockData, statusText: "OK" });

    const { result, unmount } = renderHook(() => useFetchData());

    const patchObject = {};

    await act(async () => result.current.post("http://test-url", patchObject));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeFalsy();
    expect(result.current.loading).toBeFalsy();

    unmount();
  });

  it("should do a PATCH request", async () => {
    //@ts-ignore
    axios.patch.mockResolvedValueOnce({ data: mockData, statusText: "OK" });

    const { result, unmount } = renderHook(() => useFetchData());

    const patchObject = {};

    await act(async () => result.current.patch("http://test-url", patchObject));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeFalsy();
    expect(result.current.loading).toBeFalsy();

    unmount();
  });

  it("should do a PUT request", async () => {
    //@ts-ignore
    axios.put.mockResolvedValueOnce({ data: mockData, statusText: "OK" });

    const { result, unmount } = renderHook(() => useFetchData());

    const patchObject = {};

    await act(async () => result.current.put("http://test-url", patchObject));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeFalsy();
    expect(result.current.loading).toBeFalsy();

    unmount();
  });
});
