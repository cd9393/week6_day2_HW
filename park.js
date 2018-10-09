// write out all your tests first. each bullet point is a test.
const Park = function(name,ticket_price,dinosaurs){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(position,1)
};

Park.prototype.mostPopularDinosaur = function () {
  this.dinosaurs.map()
  Math.max.apply()
};

Park.prototype.findBySpecies = function (searchSpecies){
  let found = [];
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.species === searchSpecies){found.push(dinosaur)}
  };
  return found
};


module.exports = Park
