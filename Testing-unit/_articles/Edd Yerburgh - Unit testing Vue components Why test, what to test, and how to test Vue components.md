# Edd Yerburgh - Unit testing Vue components Why test, what to test, and how to test Vue components
https://www.youtube.com/watch?v=LxXsGNXsMo8

## What



## Why
Unit test benefits
• Check components work correctly
• Provide documentation
• Easier debugging
• Less bugs

   
## Input
- User action(like button click)
- Props
- Store

## Output
- Rendered output
- Emit Vue events
- Function calls


## Sample
Component
```js
<template>
    <div v-if="visible" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <button @click="onClose" class="delete" aria-label="close"/>
                <slot/>
        </div>
    </div>
</template>

< script>
    export default {
        props: ['visible', 'onclose']
    }
</script>
```

```js

test('does not render when not passed visible prop',()=>{
    const wrapper = mount(Modal)
    expect (wrapper.isEmpty()).toBe(true)
})


test('renders when passed visible as true',()=>{
    const wrapper = mount(Modal, {
        propsData: {
            visible:true
        }
    })
    expect (wrapper.isEmpty()).toBe(false)
})

test('calls onClose when button is clicked',()=>{
    const onClose = jest.fn();
    const wrapper = mount(Modal, {
        propsData: {
            visible:true,
            onClose
        }
    })

    wrapper.find('button').trigger('click');

    expect(onClose).toHaveBeenCalled();
})

test('render correctly', ()=>{
    const wrapper = mount(Modal, {
        slots: {
            default: '<p> some content </p>'
        },
        propse
    })

});

test('render slot content', ()=>{
    const wrapper = mount(Modal, {
        propsData: {
            visible:true
        }
    })
    expect (wrapper.html()).toMatchSnapshot();
})
```

Format the snapshot
```sh
npm i -D jest-serializer-vue
```

package.json
```json
{
    "jest":{
        "snapshotSerializers": [
            "jest-serializer-vue"
        ]
    }
}
```