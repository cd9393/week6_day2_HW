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

Park.prototype.mostPopularDinosaur = function (){
  let mostVisited = this.dinosaurs[0];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.visitors > mostVisited.visitors){
      mostVisited = dinosaur;
    };
  };
  return mostVisited
}

Park.prototype.findBySpecies = function (searchSpecies){
  let found = [];
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.species === searchSpecies){found.push(dinosaur)}
  };
  return found
};

Park.prototype.dailyVisitors = function () {
  let total = 0;
  for (let dinosaur of this.dinosaurs){
    total += dinosaur.visitors;
  }
  return total;
};

Park.prototype.yearlyVisitors = function () {
  return this.dailyVisitors() * 365;
};

Park.prototype.yearlyRevenue = function () {
  return this.yearlyVisitors() * this.ticket_price;
};

Park.prototype.removeBySpecies = function (searchSpecies) {
  for (let i = this.dinosaurs.length -1; i >= 0; i--){
    let currentDino = this.dinosaurs[i];

    if(currentDino.species ===searchSpecies){
      this.dinosaurs.splice(i,1);
    }
  }
}; // if you are removing items during  for loop start the for loop from the end. ALWAYS LOOP BACKWARDS!!

Park.prototype.getDietaryInfo = function () {
  let diets = {};

  for(let currentDino of this.dinosaurs){
    if(currentDino.diet in diets){
      diets[currentDino.diet]++;
    } else{
      diets[currentDino.diet] = 1;
    }
  }
  return diets
};

module.exports = Park
