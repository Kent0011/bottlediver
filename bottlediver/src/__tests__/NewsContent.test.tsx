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
    modalTitle: 'テストモーダルタイトル',
    imgpass: 'test.jpg',
  };

  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });
  });

  test('タイトルが表示される', () => {
    render(
      <NewsContent {...mockProps}>
        <div>テストコンテンツ</div>
      </NewsContent>
    );

    expect(screen.getByText('テストニュース')).toBeInTheDocument();
  });

  test('初期状態ではモーダルが閉じている', () => {
    render(
      <NewsContent {...mockProps}>
        <div>テストコンテンツ</div>
      </NewsContent>
    );

    // モーダルのコンテンツは表示されていない
    expect(screen.queryByText('テストモーダルタイトル')).not.toBeInTheDocument();
  });

  test('タイトルをクリックするとモーダルが開く', async () => {
    render(
      <NewsContent {...mockProps}>
        <div>モーダルコンテンツ</div>
      </NewsContent>
    );

    const titleElement = screen.getByText('テストニュース');
    fireEvent.click(titleElement);

    await waitFor(() => {
      expect(screen.getByText('テストモーダルタイトル')).toBeInTheDocument();
    });

    expect(screen.getByText('モーダルコンテンツ')).toBeInTheDocument();
  });

  test('モーダル内に画像が表示される', async () => {
    render(
      <NewsContent {...mockProps}>
        <div>テストコンテンツ</div>
      </NewsContent>
    );

    const titleElement = screen.getByText('テストニュース');
    fireEvent.click(titleElement);

    await waitFor(() => {
      const images = screen.getAllByRole('img');
      const modalImage = images.find(img => img.getAttribute('src') === 'test.jpg');
      expect(modalImage).toBeInTheDocument();
    });
  });

  test('children が正しくレンダリングされる', async () => {
    render(
      <NewsContent {...mockProps}>
        <div>カスタムコンテンツ</div>
        <p>追加のテキスト</p>
      </NewsContent>
    );

    const titleElement = screen.getByText('テストニュース');
    fireEvent.click(titleElement);

    await waitFor(() => {
      expect(screen.getByText('カスタムコンテンツ')).toBeInTheDocument();
      expect(screen.getByText('追加のテキスト')).toBeInTheDocument();
    });
  });
});
