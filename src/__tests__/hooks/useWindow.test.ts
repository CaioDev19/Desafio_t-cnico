import { act, renderHook } from "@testing-library/react"
import { useWindow } from "../../hooks/useWindow"

describe("useWindow", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1000,
    })
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      value: 800,
    })
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "https://example.com" },
    })
  })

  it("should return the correct window dimensions", () => {
    const { result } = renderHook(() => useWindow())
    expect(result.current).toEqual({
      width: 1000,
      height: 800,
      url: "https://example.com",
    })
  })

  it("should update the window dimensions on resize", () => {
    const { result } = renderHook(() => useWindow())
    act(() => {
      window.innerWidth = 1200
      window.innerHeight = 900
      window.dispatchEvent(new Event("resize"))
    })
    expect(result.current).toEqual({
      width: 1200,
      height: 900,
      url: "https://example.com",
    })
  })

  it("should remove the event listener on cleanup", () => {
    const { unmount } = renderHook(() => useWindow())
    const removeEventListener = jest.spyOn(
      window,
      "removeEventListener"
    )
    unmount()
    expect(removeEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    )
  })
})
