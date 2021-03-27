interface Vehicle {
  move(): void, 
  title: string
}

class Car implements Vehicle {
  title: string;

  constructor(title: string) {
    this.title = title
  };

  move(): void {
    console.log(`I am ${this.title}, I am moving`);
  };
}

const BMW: Car = new Car('BMW')
BMW.move()


// Modificators

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('Go');
    
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()

// Abstract classes

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return "App info"
  }
}
