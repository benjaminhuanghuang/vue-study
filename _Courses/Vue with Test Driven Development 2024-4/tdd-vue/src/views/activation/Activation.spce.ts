import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';
import { render, waitFor } from 'test/helper';
import { afterAll, beforeAll } from 'vitest';

// Component to test
import Activation from './Activation.vue';

let counter = 0;
const server = setupServer(
  http.post('/api/v1/users/:token/active', () => {
    counter++;
    return HttpResponse.json({});
  })
);
beforeEach(() => {
  counter = 0;
  server.resetHandlers();
});

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Activation', () => {
  it('send activation request to server', async () => {
    render(Activation);
    await waitFor(() => {
      expect(counter).toBe(1);
    });
  });
});
