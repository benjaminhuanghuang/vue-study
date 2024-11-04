export function effect(fn, options?: any) {
  const _effect = new ReactiveEffect(fn, ()=>{
    _effect.run();
  });  


  _effect.run();
  return _effect;
}   


class ReactiveEffect {
  public active = true;

  constructor(public fn, public scheduler) {
    
  }
  
  run() {
    if(!this.active) {
      return this.fn();
    }

    return this.fn;
  }
}