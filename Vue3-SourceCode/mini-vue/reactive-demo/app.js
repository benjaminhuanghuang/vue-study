import { effectWatch, reactive } from './mini-reactive-v3.js';

const App = {
    render(context) {
        // watch the state, re-render the view when state changes
        effectWatch(() => {
            // reset
            const app = document.querySelector('#app');
            app.innerHTML = '';

            const div = document.createElement('div');
            div.innerHTML = context.state.count;
            app.appendChild(div);
        });
    },

    setup() {
        const state = reactive({
            count: 0
        });
        window.state = state;
        return {
            state
        };
    }
}

App.render(App.setup());