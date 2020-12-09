import App from './App';
import { render, screen } from '@testing-library/react';

// These test are just some simple smoke tests, they don't get really deep in on component functionality
it('renders without crashing', () => {
  render(<App />);
});

it('renders the app name and subtext', () => {
  render(<App />);
  expect(screen.getByText('Rudrata')).toBeInTheDocument();
  expect(screen.getByText('Visit each square on the chess board!')).toBeInTheDocument();
});

it('renders an 8x8 chessboard by default', () => {
  render(<App />);
  expect(screen.getAllByTestId('chess_board_square')).toHaveLength(64);
});


it('renders the new game and difficulty buttons', () => {
  render(<App />);
  expect(screen.getByText('New Game')).toBeInTheDocument();
  expect(screen.getByText('Chess Board Size')).toBeInTheDocument();
});

it('renders the game score for a new 8x8 chess board', () => {
  render(<App />);
  expect(screen.getByText('Score')).toBeInTheDocument();
  expect(screen.getByText('0/64')).toBeInTheDocument();
});

it('renders the privacy policy', () => {
  render(<App />);
  expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
});

it('renders the game instructions', () => {
  render(<App />);
  expect(screen.getByTestId('how-to')).toBeInTheDocument();
});

it('renders the created by information', () => {
  render(<App />);
  expect(screen.getByTestId('created-by')).toBeInTheDocument();
});

it('renders the donate button', () => {
  render(<App />);
  expect(screen.getByText('Donate')).toBeInTheDocument();
});