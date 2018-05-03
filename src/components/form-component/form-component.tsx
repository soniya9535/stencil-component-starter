import { Component, Prop} from '@stencil/core';


@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css'
})
export class FormComponent {
@Prop() name: string;

formHandler(e) {
    e.preventDefault();
}


 render() {
   return (
        <div>
            <p>{this.name}</p>
            <form onSubmit={(e) => this.formHandler(e)}>
               <form-inputs></form-inputs>
               <button-component></button-component>
            </form>
        </div>
   )
 }
}
