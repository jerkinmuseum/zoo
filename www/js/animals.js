angular.module('starter.animals', [])

.factory('Animals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var animals = [{
    id: 0,
    name: 'Lion',
    face: 'http://www.lionaid.org/media/spartpressImages/do-volunteers-contribute-to-lion-conservation-by-paying-to-participate-in-research-programs-on-small-private-reserves-2.jpg'
  }, {
    id: 1,
    name: 'Wolf',
    face: 'http://dreamatico.com/data_images/wolf/wolf-5.jpg'
  }, {
    id: 2,
    name: 'Llama',
    face: 'https://pbs.twimg.com/media/B-zyTzEUsAEVhNX.jpg'
  }, {
    id: 3,
    name: 'Bear',
    face: 'http://cinematicshadows.com/wp-content/uploads/2015/08/bear-blinkkig-eyes.jpg'
  }, {
    id: 4,
    name: 'Elephant',
    face: 'http://cinematicshadows.com/wp-content/uploads/2015/08/bear-blinkkig-eyes.jpg'
  }];

  return {
    all: function() {
      return animals;
    },
    remove: function(animal) {
      animals.splice(animals.indexOf(animal), 1);
    },
    get: function(animalId) {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].id === parseInt(animalID)) {
          return animals[i];
        }
      }
      return null;
    }
  };
});
