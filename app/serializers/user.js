import RESTSerializer from '@ember-data/serializer/rest';

export default class UserSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { users: payload };
    console.log(payload);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
