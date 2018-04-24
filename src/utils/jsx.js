// @flow

import t from '../babel-types';

type JSXChildren = Array<
  JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement,
>;

export function buildJSXElement(
  tag: JSXIdentifier | JSXMemberExpression,
  attrs: Array<JSXAttribute | JSXSpreadAttribute>,
  children: JSXChildren,
): JSXElement {
  const noChildren = children.length === 0;

  const open = t.jSXOpeningElement(tag, attrs, noChildren);

  const close = noChildren ? null : t.jSXClosingElement(tag);

  return t.jSXElement(open, close, children, noChildren);
}

// TODO: This can be replaced when migrating to Babel 7 as JSXFragment
// has been added in v7.0.0-beta.30.
export function buildJSXFragment(children: JSXChildren): JSXElement {
  const fragmentExpression = t.jSXMemberExpression(
    t.jSXIdentifier('React'),
    t.jSXIdentifier('Fragment'),
  );
  return buildJSXElement(fragmentExpression, [], children);
}
