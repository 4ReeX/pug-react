# babel-plugin-transform-react-pug

The official means by which you can use pug in your react components, replaces the use of react-jade when moving to pug.

This plugin transforms the pug inside of your react components.

## Installation
```
npm install babel-plugin-transform-react-pug --save-dev
npm install babel-plugin-transform-react-jsx --save-dev
```
## Usage
.babelrc
```js
{
  "plugins": [
    "transform-react-pug",
    "transform-react-jsx",
  ]
}
```
## Examples

### Example 1 - Basic Example

You can now create a react component with your pug inside it.

```js
import React from 'react';

class MyComponent extends React.Component {

  render() {
    return pug`
      div
        h1 My Component
        p This is my component using pug.
    `;
  }
}
```

### Example 2 - Re-using a Pug Component

You can use a pug component in another component.

```js
import React from 'react';
import MyComponent from './my-component'

class MyNewComponent extends React.Component {

  render() {

    const prop1 = 'This is something to pass to another component';

    return pug`
      div
        h1 MyNewComponent
        p This component imports my other component.
        p It could import several of these within the pug.
        MyComponent

        p If I had created a component with props I could pass them from this component.
        AComponentExpectingProps(
          prop1 = prop1
        )
    `
  }
}
```

### Example 3 - Creating a Pug Constant

You can create a pug constant that you can simply re-use in your code.

```js
import React from 'react';

class MyComponent extends React.Component {

  _onDoOneThing = () => {
    console.dir('Do one thing');
  };

  _onDoAnotherThing = () => {
    console.dir('Do Another thing');
  };

  render() {

    const myButtons = pug`
      div
        button(onClick=this._onDoOneThing) Do One Thing
        = ' '
        button(onClick=this._onDoAnotherThing) Do Another Thing
    `;

    return pug`
      div
        h1 MyComponent
        p this component uses buttons from my constant.
        div
          = myButtons
    `
  }
}
```
