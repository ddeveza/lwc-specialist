import { LightningElement, api } from 'lwc';
import { sum } from './sum';
  
export default class UnitTest extends LightningElement {
  @api unitNumber = sum(2,3);

  handleChange(event) {

    const number = event.target.value
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.unitNumber = number;
  }
}