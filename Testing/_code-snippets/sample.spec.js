import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TaskDetails from './TaskDetails.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

const tasks = [];

describe('Test TaskDetails Component', () => {
  beforeEach(async () => {
    wrapper = await mount(TaskDetails, { localVue, propsData: { tasks } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays correct label', () => {
    expect(wrapper.find('.section-label').text()).toBe('Task Details');
  });

  it('render the 3 tasks', () => {
    expect(wrapper.findAllComponents(RadiusAccordion)).toHaveLength(3);
  });

  it('render task', () => {
    expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().label).toBe(tasks[0].name);
  });

  it('toggle RadiusAccordion', async () => {
    expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeFalsy();
    await wrapper.findAll('.c-radius-accordion__button').at(0).trigger('click');
    expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeTruthy();
    await wrapper.findAll('.c-radius-accordion__button').at(0).trigger('click');
    expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeFalsy();
  });

  it('render task field', async () => {
    await wrapper.findAll('.c-radius-accordion__button').at(0).trigger('click');
    expect(wrapper.findAll('.sub-section-value').at(0).text()).toBe(tasks[0].status);
    expect(wrapper.findAll('.percent').at(0).text()).toBe(tasks[0].percentComplete + '%');
  });
});
