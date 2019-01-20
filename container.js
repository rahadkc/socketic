const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const dependencies = [
  ['_', 'lodash'],
  ['async', 'async']
]

dependencies.forEach(function(val){
  container.register(val[0], function(){
    return require(val[1]);
  })
})

container.load(path.join(__dirname, '/controllers'));

container.register('container', function(){
  return container;
});

module.exports = container;
