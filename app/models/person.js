import Model, { attr } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr title;
  @attr name;
  @attr birthday;

}