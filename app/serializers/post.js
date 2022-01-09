import RESTSerializer from '@ember-data/serializer/rest';

export default class PostSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
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
