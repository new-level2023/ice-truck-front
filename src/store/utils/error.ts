import { AxiosError } from 'axios';

// handler axios error
export const handleError = (err: { data?: AxiosError }, rejectWithValue: (d: unknown) => unknown): void => {
  if (err?.data && err.data.message) {
    throw rejectWithValue({ errorMessage: Array.isArray(err.data.message) ? err.data.message.join(', ') : err.data.message });
  }
  throw rejectWithValue({ errorMessage: 'Unexpected error' });
};
