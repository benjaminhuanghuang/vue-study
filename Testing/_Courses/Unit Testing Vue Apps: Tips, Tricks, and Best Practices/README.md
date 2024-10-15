# Unit Testing Vue Apps: Tips, Tricks, and Best Practices

https://www.youtube.com/watch?v=iD_d3jTJxxU

https://github.com/bethqiang/vueconf-2022-demo-app

https://docs.google.com/presentation/d/1qr0JXF78UbXPmp0thK2uqgxRwU0kXzE0zykAPC0rQsE/edit?usp=sharing


## What should be test
- Inputs: What are things uses can see/do
- Outputs: What are the results of what the users can do.

For example
No: when user types a name, the component's data field updates
Instead: When user types a name, the text input shows the name they typed.
When user submits the form, an API call is made with the name as a param.

No: A user opens a form, a modal pops up, they input a name, they click submit, and get taken to a different page. That is integration tests for. 
Instead: A modal renders with an input for name. A button to submit exists
When the button is clicked, the API is called
When the button is clicked, the modal closes



## Things to not test
- API Return Values
If you control your APl, it should
have its own tests.
If you don't control your API ... it
should have its own tests.

- External Libraries
Axios, components from a UI component library, lodash, etc.

- Implementation Details
If a user takes x action, prop/data field y changes.
Instead, what should the user see/do? not What sort of state does component hold?


## How to write test


### Scaffolding
Write all describe/it blocks based on user behavior
    Use describe blocks for various conditions: When...
    Use it blocks to demonstrate expectations under each condition: It should...

For example
```js
describe('NavItem', () => {
    it('renders an icon', () => {});
    it('renders a title', () => {});

    describe( 'when active', () => {
        it('is underlined and has a darker background', () => {

        });
    }) ;

    describe( 'when not active', () => {
        it('is not underlined and has the same background as the MainNav', () => {

        });
    }) ;
}) ;


describe( 'before data has loaded', () => {
    it('renders a loading indicator', () => {});
}) ;


describe( 'when data has been loaded successfully', () => {
    describe( 'table row', () => {
        it('renders one for each dog returned from the API and the header row', () => ());
        it('renders an image', () => ());
        describe('if there are breeds', () => {
            it('renders the breeds', () => {});
        }) ;
        describe('if there are no breeds', () => {
            it('renders \'Unknown\'', () => 0);
        }) ;
        describe( 'when clicked', () => {
            it('goes to the details page', () => {});
        }) ;
    }) :

}) ;

// Pagination
describe( 'when data has been loaded successfully', () => {

    describe( 'pagination', () => {
        it( 'renders', () => {});
        
        describe( 'when next page is clicked', () => {
            it('changes the URL to the next page', () => {});
            it('calls the API to fetch the next page of data', () => {});
        });

        describe( 'when previous page is clicked', () => {
            it('changes the URL to the previous page', () →> {});
            it('calls the API to fetch the previous page of data', () => {});
        }) ;
    }) ;
}) ;

describe('when there was an error loading data', () => {
    it('renders an error alert', () => {});
}) ;



// Image detail
describe( 'before data has loaded', () => {
    it('renders a loading indicator', () => {});
}) ;

// header, image, breed
describe( 'when data has been loaded successfully', () = {
    it('renders a heading with the image ID', () => {});
    it('renders the image', () => {});
    
    describe('if there are breeds', () => {
        it('renders the breeds', () => {});
    });

    describe('if there are no breeds', () => {
        it('renders \'Unknown)"', () => {});
    }) ;
}) ;


describe(' favorite section', () = f
    it( 'renders a favorite button', () => ());
    it('renders a delete favorite button', () => {});

    describe('if the image hasn\'t been favorited', () => {
        it('should show \'Not Favorited\'', () => {});
        it('favorite button should not be red', () => ());
        it('delete favorite button should be disabled', () => {});
        describe('clicking the favorite button', () => {
        it('should call the API to favorite the image', () => {});
        }) ;
        }) ;
        describe('if the image has been favorited', () = {
        it('should show \'Favorited\'', () => ());
        it( 'favorite button should be red', () => {});
        it( 'delete favorite button should be enabled', () => {});
        describe('clicking the delete button', () => {
        it('should call the API to delete the favorite', () => {});
        }) ;
    }) ;
}) ;

describe( 'vote section', () =>{
    it('renders upvote and downvote buttons', () => ());

    describe('if the image hasn\'t been voted on', () => {
        it('should show \'Not Voted\"', () => ());
        it('upvote button should not be green', () => ());
        it('downvote button should not be yellow, () =>{ });
    }) ;
    describe('if the image has been upvoted', () »> {
    it('should show \'Upvoted\"', () => {});
    it( 'upvote button should be green', () => {});
    });
    describe('if the image has been downvoted', () => {
    it('should show \'Downvoted\"', () => ());
    it('downvote button should be yellow, () =› {});
    }) ;
    describe('clicking the upvote button', () =› {
    it('should call the API to upvote the image', () => ());
    }) ;
    describe('clicking the downvote button', () => {
    it('should call the API to downvote the image', () »> ));
}) ;
```

## Tools

- Vitest
Test runner
Same API as Jest
Test coverage
jsdom for DOM mocking
Fast watch mode

- Vue Test Utils
mount function
Provides wrapper utility methods
Testing Library's render
method based off this mount

- Testing Library
DOM testing library specifically for UIs
getBy, queryBy, findBy selectors
fireEvent/userEvent
jest-dom matchers
Vue version uses Vue Test Utils
under the hood


mount/render
Vue Test Utils provides a mount function that returns a wrapper
When Googling around for Vue unit testing, you'll most likely see some version of this
Testing Library's render is built off of the mount function
    render returns some wrapper utility methods but not all

So why use it?
Supports mocking the store, router, plugins, packages
Returns an object that can be destructured to access utility functions for querying for elements

Wrapper sample:
```js
it( 'button click should increment the count', () => {
    expect (wrapper.vm.count).toBe(0)
    const button = wrapper. find('button')
    button. trigger('click')
    expect(wrapper.vm.count) .toBe(1)
}) ;
```

## Mock
```js
import '@testing-library/jest-dom';
import { createTestingPinia } from '@pinia/testing';


vi.mock ('vue-router', () => (f
useRoute: () => (f
params: { id: 'HJ7Pzg5EQ' }
}) ,
}) ) ;
const store = createTestingPinia({
initialState: {
favorites: [],
votes: []
}
}) ;

const mockImageReturn = {
    data: {
    id: 'HJ7Pzg5EQ',
    url: 'https://cdn2.thedogapi.com/images/HJ7Pzg5EQ_1280.jpg',
    breeds: [{ name: 'Golden Retriever' }]
    }
};

const mockFavoritesReturn = [{
id: 41298,
user_id: 'i8sceq' ,
image_id: 'HJ7Pzg5EQ' ,
sub_id: null,
created
Lat: ' 2022-06-0615:36:05.0002',
image: {
id: 'HJ7Pzg5EQ',
url: 'https://cdn2.thedogapi.com/images/HJ7Pzg5EQ-jpg'
}];


```


