import mitt from 'mitt';

const emitter = mitt();

emitter.on('event', (data) => {});


export default emitter;
