import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";

import useFetchData from "./useFetchData";

jest.mock("axios");

describe("useFetchData", () => {
  const mockData = {
    data: "mock-data",
  };

  beforeEach(() => {
    //@ts-ignore
    axios.get.mockImplementation(() => Promise.resolve(mockData));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create the hook", () => {
    const { result } = renderHook(() => useFetchData());
    expect(result.current).not.toBeUndefined();
    expect(result.current.loading).toEqual(false);
    expect(result.current.errorMessage).toBeUndefined();
  });

  it("should fetch the data", async () => {
    const { result } = renderHook(() => useFetchData());
    await act(async () => result.current.fetchData("http://test-url"));
    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.results).toEqual("mock-data");
  });
});
