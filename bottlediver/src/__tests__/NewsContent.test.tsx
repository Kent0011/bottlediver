import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsContent from '../components/NewsContent';

// react-intersection-observer のモック
const mockUseInView = jest.fn();
jest.mock('react-intersection-observer', () => ({
  useInView: (options: any) => mockUseInView(options),
}));

describe('NewsContent', () => {
  const mockProps = {
    title: 'テストニュース',
    content: 'モーダル本文\n2行目',
    image: 'test.jpg',
  };

  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });
  });

  test('タイトルが表示される', () => {
    render(<NewsContent {...mockProps} />);

    expect(screen.getByText('テストニュース')).toBeInTheDocument();
  });

  test('初期状態ではモーダルが閉じている', () => {
    render(<NewsContent {...mockProps} />);

    // モーダルの本文は表示されていない
    expect(screen.queryByText(/モーダル本文/)).not.toBeInTheDocument();
  });

  test('タイトルをクリックするとモーダルが開く', async () => {
    render(<NewsContent {...mockProps} />);

    const titleElement = screen.getByText('テストニュース');
    fireEvent.click(titleElement);

    await waitFor(() => {
      // モーダル内に title と content が両方表示される
      expect(screen.getAllByText('テストニュース').length).toBeGreaterThan(1);
      expect(screen.getByText(/モーダル本文/)).toBeInTheDocument();
    });
  });

  test('モーダル内に画像が表示される', async () => {
    render(<NewsContent {...mockProps} />);

    const titleElement = screen.getByText('テストニュース');
    fireEvent.click(titleElement);

    await waitFor(() => {
      const images = screen.getAllByRole('img');
      const modalImage = images.find(img => img.getAttribute('src') === 'test.jpg');
      expect(modalImage).toBeInTheDocument();
    });
  });

  test('image が未指定なら画像は表示されない', async () => {
    render(<NewsContent title="タイトル" content="本文" />);

    const titleElement = screen.getByText('タイトル');
    fireEvent.click(titleElement);

    await waitFor(() => {
      expect(screen.getByText('本文')).toBeInTheDocument();
    });

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
