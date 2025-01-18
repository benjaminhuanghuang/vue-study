vi.mock('vue-i18');
vi.mock('./api');
vi.mock('vue-router');

import { vi } from 'vitest';
import { render, waitFor } from '@testing-library/vue';
import { afterAll, beforeAll } from 'vitest';
import { useI18n } from 'vue-i18n';
import en from '@/locales/ttranslations/en.json';
import { activate } from './api';
import { useRoute } from 'vue-router';
// Component to test
import Activation from './Activation.vue';

vi.mocked('vue-i18n').mockReturnValue({
  t: (key) => en[key]
});

vi.mocked(useRoute).mockReturnValue({
  params: {
    token: '123'
  }
});

const setup = async () => {
  return render(Activation);
};

describe('Activation', () => {
  it('send activation request to server', async () => {
    await setup('/');
    await waitFor(() => {
      expect(activate).toHaveBeenCalledTimes(1);
    });
  });

  describe.each([
    {
      activationToken: '123'
    },
    {
      activationToken: 'abc'
    }
  ])('when token is $token', ({ activationToken }) => {
    it('send  token in request', async () => {
      await setup(`/activation/${activationToken}`);
      await waitFor(() => {
        expect(token).toBe(activationToken);
      });
    });
  });
  describe('when token is changed', () => {
    it('send  token in request', async () => {
      await setup('/activation/123');
      await waitFor(() => {
        expect(token).toBe('123');
      });
      // change token
      router.push('/activation/abc');
      await waitFor(() => {
        expect(token).toBe('abc');
      });
    });
  });
});
