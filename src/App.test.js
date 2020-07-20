import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { showMockData } from './utils/showMockData';
import { fetchShow } from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');

test('Data is fetched and rendered', async () => {
  let selector = null;
  fetchShow.mockResolvedValueOnce(showMockData);
  render(<App />);

  await waitFor(async () => {
    screen.debug();
    screen.findByText(/select a season/i)
    .then(res => selector = res);
  });

  console.log(selector);
});
