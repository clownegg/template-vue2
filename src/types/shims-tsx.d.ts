// eslint-disable-next-line
import Vineue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      // eslint-disable-next-line
      [elem: string]: any;
    }
  }
}
