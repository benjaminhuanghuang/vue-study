import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';
import { render, waitFor, router } from 'test/helper';
import { afterAll, beforeAll } from 'vitest';

// Component to test
import Activation from './Activation.vue';

let counter = 0;
let token: string | undefined;

const server = setupServer(
  http.post('/api/v1/users/:token/active', ({ params }) => {
    counter++;
    token = params.token as string;
    return HttpResponse.json({});
  })
);
beforeEach(() => {
  counter = 0;
  token = undefined;
  server.resetHandlers();
});

beforeAll(() => server.listen());
afterAll(() => server.close());

const setup = async (path: string) => {
  router.push(path);
  await router.isReady();
  return render(Activation);
};

describe('Activation', () => {
  it('send activation request to server', async () => {
    await setup('/activation/123');
    await waitFor(() => {
      expect(counter).toBe(1);
    });
  });

  describe.each([
    {
      activationToken: '123'
    }
  ])('when token is $token', ({ activationToken }) => {
    it('send  token in request', async () => {
      await setup(`/activation/${activationToken}`);
      await waitFor(() => {
        expect(token).toBe(activationToken);
      });
    });
  });
});
