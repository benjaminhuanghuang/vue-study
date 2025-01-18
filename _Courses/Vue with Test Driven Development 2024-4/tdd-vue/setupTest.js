import * as matchers from '@testing-library/jest-dom/matchers';
import { afterEach, expect } from 'vitest';
import { i18n } from '@/locales';

expect.extend(matchers);

afterEach(() => {
  i18n.global.locale = 'en';
});
