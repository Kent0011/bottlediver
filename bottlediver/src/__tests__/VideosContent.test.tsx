import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VideosContent from '../components/VideosContent';

// react-intersection-observer のモック
const mockUseInView = jest.fn();
jest.mock('react-intersection-observer', () => ({
  useInView: (options: any) => mockUseInView(options),
}));

describe('VideosContent', () => {
  const mockProps = {
    title: 'テスト動画タイトル',
    link: 'https://www.youtube.com/watch?v=test123',
  };

  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });
  });

  test('タイトルが表示される', () => {
    render(<VideosContent {...mockProps} />);

    expect(screen.getByText('テスト動画タイトル')).toBeInTheDocument();
  });

  test('YouTubeアイコンが表示される', () => {
    render(<VideosContent {...mockProps} />);

    // FaYoutubeアイコンがレンダリングされていることを確認
    const titleElement = screen.getByText('テスト動画タイトル');
    expect(titleElement).toBeInTheDocument();
  });

  test('初期状態ではモーダルが閉じている', () => {
    const { container } = render(<VideosContent {...mockProps} />);

    // iframe は初期状態では表示されていない
    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeInTheDocument();
  });

  test('タイトルをクリックするとモーダルが開きiframeが表示される', async () => {
    render(<VideosContent {...mockProps} />);

    // 初期状態ではiframeは存在しない
    expect(document.querySelector('iframe')).not.toBeInTheDocument();

    const titleElement = screen.getByText('テスト動画タイトル');
    fireEvent.click(titleElement);

    // モーダルが開いてiframeが表示される
    await waitFor(() => {
      const iframe = document.querySelector('iframe');
      expect(iframe).toBeInTheDocument();
    });
  });

  test('watch URL が embed URL に変換されて iframe に渡る', async () => {
    render(<VideosContent {...mockProps} />);

    const titleElement = screen.getByText('テスト動画タイトル');
    fireEvent.click(titleElement);

    await waitFor(() => {
      const iframe = document.querySelector('iframe');
      expect(iframe).toBeInTheDocument();

      // src 属性は embed 形式に変換される
      expect(iframe?.getAttribute('src')).toBe('https://www.youtube.com/embed/test123');

      // allowFullScreen 属性の確認
      expect(iframe?.hasAttribute('allowfullscreen')).toBe(true);

      // frameBorder 属性の確認
      expect(iframe?.getAttribute('frameborder')).toBe('0');
    });
  });

  test('youtu.be 短縮 URL も embed URL に変換される', async () => {
    render(
      <VideosContent title="short" link="https://youtu.be/abcXYZ" />,
    );

    fireEvent.click(screen.getByText('short'));

    await waitFor(() => {
      const iframe = document.querySelector('iframe');
      expect(iframe?.getAttribute('src')).toBe('https://www.youtube.com/embed/abcXYZ');
    });
  });
});
