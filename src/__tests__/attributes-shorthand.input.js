// To prevent warnings in console from react
const test = 10;

module.exports = pug`
  div(
    data-first
    data-second
    data-positive=true
    data-negative=false
    data-check
  )
    div(data-one data-two)
`;
