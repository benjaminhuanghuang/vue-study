/*
    Test the text rendered 
*/
import { shallowMount } from "@vue/test-utils";
import Message from "./Message.vue";

describe("Message.vue", () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(Message, {
            propsData: { msg }
        });

        // get all text in the wrapper
        expect(wrapper.text()).toMatch(msg);
    });
});
