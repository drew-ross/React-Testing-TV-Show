import React from 'react';
import { render, screen } from '@testing-library/react';
import { showMockData } from '../utils/showMockData';
import Episodes from '../components/Episodes';

const mockEpisodes = showMockData.data._embedded.episodes;

test('The component renders without errors', () => {
  render(<Episodes episodes={mockEpisodes} />);
});

test('The component renders episodes to screen', () => {
  render(<Episodes episodes={mockEpisodes} />);
  
  expect(screen.getByText(/Chapter One: The Vanishing of Will Byers/i)).toBeInTheDocument();
  expect(screen.getByText(/Chapter Eight: The Upside Down/i)).toBeInTheDocument();
});
