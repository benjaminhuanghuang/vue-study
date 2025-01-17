import { test, expect } from '@playwright/experimental-ct-vue'
import SearchBox from '../src/components/SearchBox.vue'

test('should get the search term from outside', async ({ mount, page }) => {
  const component = await mount(<SearchBox searchTerm="hello" />)
  const elem = await component.locator('#searchbox')
  const label = await component.locator('label')

  await component.screenshot({
    path: 'e2e/screenshots/searchbox_default.full_.png'
  })

  await page.screenshot({
    path: 'e2e/screenshots/searchbox_page_.png',
    fullPage: true
  })

  await expect(label).toContainText('Search')
  await expect(elem).toHaveValue('hello')
})

test('should update the search term to query params', async ({ mount, page }) => {
  const component = await mount(SearchBox)

  const elem = await component.locator('#searchbox')

  await elem.fill('hello')

  await expect(elem).toHaveValue('hello')
  await expect(page.url()).toContain('/?search=hello')
})
