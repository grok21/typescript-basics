interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name | 'age'
const key: PersonKeys = 'name'

console.log(key);

// ===============

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// We want to exclude metadata
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, '_id' | 'createdAt'> // 'name' | 'email'

const user1: UserKeysNoMeta1 = 'name'