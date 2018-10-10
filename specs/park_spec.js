// write out all your tests first. each bullet point is a test.
const assert = require('assert');

const Park   = require('../park.js');
const Dinosaur = require('../dinosaur.js')

describe('Park',function(){
  let park;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Velociraptor","Carnivore",60);
    dinosaur2 = new Dinosaur("T-Rex","Carnivore",150);
    dinosaur3 = new Dinosaur("Triceratops","Herbivore",50);
    dinosaur4 = new Dinosaur("T-Rex","Carnivore",150);
    park = new Park ("Jurassic World",100,[dinosaur1,dinosaur2])
  });

  it("should have a name",function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic World")
  });

  it("should have a ticket_price",function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual,100)
  });

  it("should have a collection of dinosaurs",function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dinosaur1,dinosaur2])
  });

  it("should be able to add a dinosaur to it's collection",function(){
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,3)
  });

  it("should be able to remove a dinosaur from it's collection of dinosaurs", function(){
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,1)
  });

  it("should be able to find the dinosaur that attracts the most visitors",function(){
    actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur2)
  });

  it("Should be able to find all dinosaurs of a particular species",function(){
    actual = park.findBySpecies("T-Rex");
    assert.deepStrictEqual(actual,[dinosaur2])
  });

  it("Should calculate the total number of visitors per day",function(){
    actual = park.dailyVisitors();
    assert.strictEqual(actual,210)
  });

  it("Should calculate the yearly visitors",function(){
    actual = park.yearlyVisitors();
    assert.strictEqual(actual, 76650)
  });

  it("should calculate the total annual revenue from ticket sales",function(){
    actual = park.yearlyRevenue();
    assert.strictEqual(actual,7665000)
  });

  it("Should be able to remove all dinosaur by species",function(){

    park.addDinosaur(dinosaur4)
    park.removeBySpecies("T-rex");

    assert.strictEqual(park.dinosaurs.length,1)
  })
})
