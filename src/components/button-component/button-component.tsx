import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css'
})
export class ButtonComponent {
  @Prop() name: string;
 render() {
   return(
    <input type="submit" value="submit"/>
   )
 }
}
