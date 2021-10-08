import Component from './component.js';

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
