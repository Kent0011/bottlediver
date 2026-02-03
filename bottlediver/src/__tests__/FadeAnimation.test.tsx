import { render, screen } from "@testing-library/react";
import FadeAnimation from "../components/FadeAnimation";

// react-intersection-observer のモック
const mockUseInView = jest.fn();
jest.mock("react-intersection-observer", () => ({
  useInView: (options: any) => mockUseInView(options),
}));

describe("FadeAnimation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("子要素をレンダリングする", () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    });

    render(
      <FadeAnimation>
        <div>テストコンテンツ</div>
      </FadeAnimation>,
    );

    expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
  });

  test("要素が見えない時はvisibleクラスが付与されない", () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    });

    const { container } = render(
      <FadeAnimation>
        <div>テストコンテンツ</div>
      </FadeAnimation>,
    );

    const fadeElement = container.querySelector(".fade-element");
    expect(fadeElement).not.toHaveClass("visible");
  });

  test("要素が見える時はvisibleクラスが付与される", () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });

    const { container } = render(
      <FadeAnimation>
        <div>テストコンテンツ</div>
      </FadeAnimation>,
    );

    const fadeElement = container.querySelector(".fade-element");
    expect(fadeElement).toHaveClass("visible");
  });
});
