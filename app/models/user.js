import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @hasMany('post') post;

  @attr('string') name;
  @attr('string') email;
  @attr('string') phoneNumber;
  @attr('string') website;
}
