import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { i18n } from '@/locales';
// Component to test
import LanguageSelector from '../LanguageSelector.vue';

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
              $i18n
            }
          }
        });
        await user.click(screen.getByTestId(`language-${language}-selector`));
        expect(i18n.locale).toBe(language);
      });
    }
  );
});
