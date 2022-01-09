import Typicode from './typicode';

export default class User extends Typicode {
  host = 'http://jsonplaceholder.typicode.com';
  pathForType() {
    return `users`;
  }
}
