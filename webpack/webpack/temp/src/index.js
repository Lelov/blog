import _ from 'lodash'

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
console.log(document.querySelector('body'))
document.querySelector('body').appendChild(component());