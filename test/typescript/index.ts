import Component from './component.js';
import VueComponent from './index.vue?raw';

/**
 * Class Foo.
 */
export default class Foo {
  /**
   * @type {Record<string, typeof Component>}
   */
  components = {
    Component,
  };

  raw = VueComponent;

  /**
   * Class constructor.
   */
  constructor() {
    console.log('foo');
  }

  /**
   * @returns {string}
   */
  foo() {
    return 'foo';
  }
}
