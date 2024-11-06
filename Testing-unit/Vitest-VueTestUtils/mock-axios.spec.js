// FormComponent.spec.js
import { mount } from '@vue/test-utils';
import FormComponent from '@/components/FormComponent.vue';
import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';

vi.mock('axios'); // Mock axios

describe('FormComponent', () => {
  it('submits the form and emits form-submitted event', async () => {
    // Mock the axios.post method
    axios.post.mockResolvedValue({}); // Resolve the promise returned by axios.post

    const wrapper = mount(FormComponent); // Mount the component

    // Set the email input value
    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue('test@example.com');

    // Simulate form submission
    await wrapper.find('form').trigger('submit');

    // Assert that the axios.post was called with the correct parameters
    expect(axios.post).toHaveBeenCalledWith('http://demo7437963.mockable.io/validate', {
      email: 'test@example.com',
      enterCompetition: true, // enterCompetition is 'yes'
    });

    // Assert that the form-submitted event was emitted
    expect(wrapper.emitted('form-submitted')).toBeTruthy();
  });
});
