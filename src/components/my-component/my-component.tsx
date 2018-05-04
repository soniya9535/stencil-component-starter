import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

 /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log('The component is about to be rendered');
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
    console.log('The component has been rendered');
  }

  /**
   * The component will update and re-render.
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentWillUpdate() {
    console.log('The component will update');
  }

  /**
   * The component finished updating.
   *
   * Called after componentWillUpdate
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentDidUpdate() {
    console.log('The component did update');
  }

  /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('The view has been removed from the DOM');
  }

  render() {
    return(
      <p>Stencil component life cycle</p>
    )
  }
}
