import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('著作権表示が表示される', () => {
    render(<Footer />);

    expect(screen.getByText(/© 2024 bottle diver/i)).toBeInTheDocument();
  });

  test('GitHubへのリンクが表示される', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Kent0011/bottlediver');
  });

  test('GitHubリンクのテキストが表示される', () => {
    render(<Footer />);

    expect(screen.getByText(/source :/i)).toBeInTheDocument();
  });
});
