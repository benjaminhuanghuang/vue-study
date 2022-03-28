
Wrapper is the main object of vue-test-utils. It is the type returned by the mount, shallowMount, find, and findAll functions.


## check component
```
    expect(is(MessageList)).toBe("message")

    expect(is("ul")).toBe("message")

    
    expect(contains(".message")).toBe("message")


    expect(cmp.find(Message).isVuewInstance).toBe("message")


    expect(cmp.find(".message").exists()).toBe("message")

    expect(cmp.find(Message).isEmpty()).toBe("message")




```


## Check style
```
    expect(cmp.find(Message).attributes().class).toBe("message")

    expect(cmp.find(Message).classes()).toContain("message")

     expect(cmp.find(Message).attributes().class).toBe("padding-top: 10px")
```


## Check properties and custom event
```
  cmp = createCmp({ message: "hey" });

  expect(cmp.hasProp("message", "hey")).toBeTruthy();”



```


## Spy on funciton
```
    let spy = jest.spyOn(console, "error");
    cmp = createCmp({ message: 1 });
    
    expect(spy).toBeCalledWith(
        expect.stringContaining("[Vue warn]: Invalid prop")
    );
    spy.mockReset(); // or mockRestore() to completely remove the mock

```
## Check component options
```
    const message = createCmp().vm.$options.props.message

    expect(message.type).toBe(String)

    expect(message.required).toBeTruthy()

    expect(message.validator && message.validator('a')).toBeFalsy()
    expect(message.validator && message.validator('aa')).toBeTruthy()

```


## Test the event

When we change things that are used in the template – handleClick, in this case – and we want the template to apply the changes, we need to use the update function.

```
    it('calls handleClick when click on message', () => {
        cmp.vm.handleClick = jest.fn()
        // or triggering it: const spy = spyOn(cmp.vm, 'handleClick')
        // or use setMethods
        cmp.update() // Forces to re-render, applying changes on template. Necessary when tempalte needs to update

        // -- Trigger the click
        const el = cmp.find('.message').trigger('click')
        expect(cmp.vm.handleClick).toBeCalled()
    })

    it('triggers a message-clicked event when a handleClick method is called', () => {
        const stub = jest.fn()
        cmp.vm.$on('message-clicked', stub)

        cmp.vm.handleClick()
        expect(stub).toBeCalledWith('Cat')
    })


    it("triggers a message-clicked event when a handleClick method is called", () => {
      const stub = jest.fn();
      cmp.vm.$on("message-clicked", stub);
      cmp.vm.handleClick();
      expect(stub).toBeCalledWith("Cat");
    });
```
Test the DOM event
```
```



## Test computed properties
```
```