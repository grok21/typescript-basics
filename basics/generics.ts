const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfStrings: Array<string> = ['1', '2', '3']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));


function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
} 

const merged = mergeObjects({name: 'Vadim'}, {age: 23})
console.log(merged);

// =====================

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value, 
    count: `There are ${value.length} symbols`
  }
}

// =====================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Vadim', 
  age: 23, 
  job: 'TypeScript programmer'
}

console.log(getObjectValue(person, 'name'));

// =====================

class Collection<T extends number | string> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(elem => elem !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'am', 'strings'])
console.log(strings.items);

// =====================

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  return car as Car
}

// =====================


