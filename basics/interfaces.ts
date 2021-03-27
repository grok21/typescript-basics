interface Rect {
  readonly id: string, 
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 10, 
    height: 5
  }
}

interface Rect2 extends Rect {
  getArea: () => number
}

interface Styles {
  [key: string]: string
}

console.log(rect1);
