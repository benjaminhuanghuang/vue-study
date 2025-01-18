/*

*/
vi.mock('vue-i18n');
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { useI18n } from 'vue-i18n';

// Component to test
import LanguageSelector from '../LanguageSelector.vue';
const mockI18n = {
  local: {
    value: 'en'
  }
};
vi.mocked(useI18n).mockReturnValue(mockI18n);

describe('LanguageSelector', () => {
  describe.each([{ language: 'en' }, { language: 'zhCN' }])(
    'when use select is $language',
    ({ language }) => {
      it('displays expected text', async () => {
        const user = userEvent.setup();
        const i18n = {
          locale: 'en'
        };
        render(LanguageSelector, {
          global: {
            mocks: {
              $i18n: i18n
            }
          }
        });
        await user.click(screen.getByTestId(`language-${language}-selector`));
        expect(mockI18n.local.value).toBe(language);
      });

      it('stores language in localStorage', async () => {
        const mockSetItem = vi.spyOn(Storage.prototype, 'setItem');
        const user = userEvent.setup();
        const i18n = {
          locale: 'en'
        };
        render(LanguageSelector, {
          global: {
            mocks: {
              $i18n: i18n
            }
          }
        });
        await user.click(screen.getByTestId(`language-${language}-selector`));
        expect(mockSetItem).toHaveBeenCalledWith('app-lang', language);
      });
    }
  );
});
