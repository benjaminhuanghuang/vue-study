
describe("SearchBox component", () => {
  it("should match snapshot", () => {
    const wrapper = mount(SearchBox), {
        props: {
            searchTerm: "test",
            items:[]
        },
        global: {   
            plugins: [router]
        } 
    };

    expect(wrapper.html()).toMatchSnapshot();
  });
});
