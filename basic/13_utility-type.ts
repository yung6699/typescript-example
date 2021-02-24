interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방'
}

const chingtao: Omit<AddressBook, 'address'|'company'> = {
  name: '중국집',
  phone: 44455557777
}


// #1
// type AddressBookUpdate = {
  // name?: AddressBook['name'];
  // phone?: AddressBook['phone'];
  // company?: AddressBook['company'];
// }

// #2
// type AddressBookUpdate = {
//   [p in 'name' | 'phone' | 'company' ]?: AddressBook[p]
// }

// #3
// type AddressBookUpdate = {
//   [p in keyof AddressBook]?: AddressBook[p]
// }

// #4
type Sunset<T> = {
  [p in keyof T]?: T[p]
}

const book: Sunset<AddressBook> = {
  name: 'test',
  phone: 10,
  company: '회사' 
}