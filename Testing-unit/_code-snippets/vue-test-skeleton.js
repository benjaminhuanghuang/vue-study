import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyComponent from '../MyComponent.vue';

describe('MyComponent', () => {
    const wrapper = mount(MyComponent);
    
    const myComponent = wrapper.vm;
    const rootElement = wrapper.element; 
});