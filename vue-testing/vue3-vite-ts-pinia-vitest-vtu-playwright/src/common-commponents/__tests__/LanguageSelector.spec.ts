import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { render, screen } from 'tests';
import userEvent from '@testing-library/user-event';
import { i18n } from '@/locales';
// Component to test
import LanguageSelector from '../LanguageSelector.vue';

describe('LanguageSelector', () => {
  describe.each([
    { language: 'en', text: 'English' },
    { language: 'zhCN', text: '中文' }
  ])('when use select is $language', ({ language, text }) => {
    it.skip('displays expected text', async () => {
      const user = userEvent.setup();
      render(LanguageSelector);
      await user.click(screen.getByTestId(`language-${language}-selector`));
      expect(i18n.global.locale).toBe('tr');
    });

    it('displays expected text in a temp component', async () => {
      const user = userEvent.setup();
      const TempComponent = {
        components: {
          LanguageSelector
        },
        template: `<span> "{{ $t('signUp') }}" </span>
          <LanguageSelector />
          `
      };
      render(TempComponent);
      await user.click(screen.getByTestId(`language-${language}-selector`));
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('stores language in localStorage', async () => {
      const TempComponent = {
        components: {
          LanguageSelector
        },
        template: `<span> "{{ $t('signUp') }}" </span>
          <LanguageSelector />
          `
      };
      const { user } = render(TempComponent);
      await user.click(screen.getByTestId(`language-${language}-selector`));
      expect(localStorage.getItem('app-lang')).toBe(language);
    });
  });
});
