import { render, router, screen, waitFor } from 'test/helper';
import App from '@/App.vue';

const setup = async (path: string) => {
  router.push(path);
  await router.isReady();
  return render(App);
};

describe('Routing', () => {
  describe.each([
    {
      path: '/',
      pageId: 'home-page'
    },
    {
      path: '/signup',
      pageId: 'home-page'
    }
  ])('when path is $path', ({ path, pageId }) => {
    it(`display ${pageId}`, async () => {
      router.push(path);
      await router.isReady();
      render(App);
      const page = screen.queryByTestId(pageId);
      expect(page).toBeInTheDocument();
    });
  });

  describe.each([
    {
      initialPath: '/',
      clickingTo: 'link-signup-page',
      visiblePageId: 'signup-page'
    },
    {
      initialPath: '/signup',
      clickingTo: 'link-home-page',
      visiblePageId: 'home-page'
    }
  ])('when path is $initialPath', ({ initialPath, clickingTo, visiblePageId }) => {
    describe(`when user click  ${clickingTo}`, async () => {
      it(`display ${visiblePageId}`, async () => {
        const { user } = await setup(initialPath);
        const link = screen.queryByTestId(clickingTo);
        await user.click(link as Element);
        await waitFor(() => {
          expect(screen.queryByTestId(visiblePageId)).toBeInTheDocument();
        });
      });
    });
  });
});
