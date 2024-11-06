
import {createPinia, setActivePinia} from 'pinia';
import {useProgressStore} from '../progressStore';   

describe('ProgressStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it('progress starts at 0', () => {
        const progress = useProgressStore();
        expect(progress.counter).toBe(0);
    });

    it('the counter increments by 1', () => {
        const progress = useProgressStore();
        progress.increment();
        expect(progress.counter).toBe(1);
    });

    it('the percentage is returned', () => {
        const progress = useProgressStore();
       progress.$patch({
        max: 10,
        counter: 50});
        expect(progress.percentage).toBe(50);
    });
}); 