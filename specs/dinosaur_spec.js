// write out all your tests first. each bullet point is a test.
const assert = require('assert');

const Dinosaur = require('../dinosaur.js');

describe('Dinosaur',function(){
  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Velociraptor","Carnivore",60)
  });

  it("should have a species",function(){
    const actual = dinosaur.species;
    assert.strictEqual(actual, "Velociraptor")
  });

  it("should have a diet",function(){
    const actual = dinosaur.diet;
    assert.strictEqual(actual,"Carnivore")
  });

  it("should have an average number of attracted per day",function(){
    const actual = dinosaur.visitors;
    assert.strictEqual(actual,60)
  });
})
