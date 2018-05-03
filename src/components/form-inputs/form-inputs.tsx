import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'form-inputs',
  styleUrl: 'form-inputs.css'
})
export class FormInputs {
  @Prop() name: string;
  @Event() firstNameEmitter: EventEmitter;
  @Event() lastNameEmitter: EventEmitter;

  getFirstName(e) {
   console.log(e.target.value);
  }

  getLastName(e) {
   console.log(e.target.value);
  }

 render() {
   return(
    <div class="inputs-style">
        <label >First Name</label>
        <input type="text" placeholder="Your name.." onInput={(e) => this.getFirstName(e)}/>

        <label>Last Name</label>
        <input type="text" placeholder="Your last name.." onInput={(e) => this.getFirstName(e)}/>
    </div>
   )
 }
}
