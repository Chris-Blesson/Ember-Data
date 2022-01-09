import RESTAdapter from '@ember-data/adapter/rest';

export default class Typicode extends RESTAdapter {
  host = 'http://jsonplaceholder.typicode.com';
}
