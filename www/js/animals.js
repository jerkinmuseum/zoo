angular.module('starter.animals', [])

.factory('Animals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lion',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Wolf',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Bear',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
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
