import SimpleComponent from "@/components/SimpleComponent.vue"
import { mount } from "@vue/test-utils"

describe("SimpleComponent", () => {
    it("renders properly", () => {
        const wrapper = mount(SimpleComponent, { props: { msg: "Hello Jest" } })

        expect(wrapper.text()).toContain("Hello Jest")
    })
})