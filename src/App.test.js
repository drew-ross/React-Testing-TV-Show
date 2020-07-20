import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { showMockData } from './utils/showMockData';
import { fetchShow } from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');

test('Data is fetched and rendered', async () => {
  fetchShow.mockResolvedValueOnce(showMockData);
  render(<App />);
  let selector = null;

  await waitFor(async () => {
    screen.findByText(/select a season/i).then(res => (selector = res));
  });

  userEvent.click(selector);
  userEvent.click(screen.getByText(/Season 1/i));

  expect(screen.getByText(/Chapter One/i)).toBeInTheDocument();

});
