function Log1(constructor: Function) {
  console.log('\nLog1:');
  console.log(constructor);
}

function Log2(target: any, propName: string | Symbol) {
  console.log('\nLog2:');
  
  console.log(`Target: ${target}`);
  console.log(`propName: ${propName}`);
  
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('\nLog3:');
  
  console.log(`Target: ${target}`);
  console.log(`propName: ${propName}`);
  console.log(`descriptor: ${descriptor}`);
}

@Log1
class decoratorsExample {
  
  @Log2
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Log3
  logName(): void {
    console.log(`Class name: ${this.name}`);
    
  }

  @Log3
  get getName() {
    return this.name
  }
}