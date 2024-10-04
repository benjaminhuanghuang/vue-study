import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/vue' 
//
import View from '@/components/View.vue'
import { a } from 'vitest/dist/suite-IbNSsUWN.js';

describe('View', () => {
  const viewText = 'View Text';

  it('renders span properly', async () => {
    const viewId = 'viewId';
    render(View, {
      props: {
        element: 'span',
      },
      slots:{
        default: viewText
      }
    });

    const view = await screen.findByText(viewText);
    expect(view.id).toBe(viewId);
  })
})
