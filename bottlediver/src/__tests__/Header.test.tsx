import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

// react-router-dom のモック
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// window.open をモック
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

describe('Header', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  test('ロゴ画像が表示される', () => {
    const { container } = render(<Header />);

    const logo = container.querySelector('img[src="logo.png"]');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });

  test('5つのソーシャルメディアボタンが表示される', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('YouTubeボタンをクリックすると正しいURLが開く', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    buttons[0].click();

    expect(mockWindowOpen).toHaveBeenCalledWith('https://www.youtube.com/@bottlediver-kobe');
  });

  test('Twitterボタンをクリックすると正しいURLが開く', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    buttons[1].click();

    expect(mockWindowOpen).toHaveBeenCalledWith('https://x.com/bottle_diver');
  });

  test('Instagramボタンをクリックすると正しいURLが開く', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    buttons[2].click();

    expect(mockWindowOpen).toHaveBeenCalledWith('https://www.instagram.com/bottle_diver/');
  });

  test('Apple Musicボタンをクリックすると正しいURLが開く', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    buttons[3].click();

    expect(mockWindowOpen).toHaveBeenCalledWith('https://music.apple.com/jp/artist/bottle-diver/1703550752');
  });

  test('Spotifyボタンをクリックすると正しいURLが開く', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');
    buttons[4].click();

    expect(mockWindowOpen).toHaveBeenCalledWith('https://open.spotify.com/intl-ja/artist/1dSyeRp13r1RiHcobah6pE');
  });
});
