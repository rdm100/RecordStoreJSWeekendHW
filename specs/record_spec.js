const assert = require("assert");
const Record = require("../record.js")

describe('Record', function(){

let record1;

    beforeEach(function(){
      record1 = new Record ("Prince", "New power generation", "Funk", 10.00);
});


    it('Record has an Artist', function(){
      assert.strictEqual(record1.artist, "Prince");
    });

    it('Record has a Title', function(){
      assert.strictEqual(record1.title, "New power generation");
    });

	it('Record has a genre', function(){
      assert.strictEqual(record1.genre, "Funk");
    });

    it('Record has a price', function(){
      assert.strictEqual(record1.price, 10.00);
    });

    it('Printout records details', function(){
      assert.strictEqual(record1.printRecordProperties(), "The record artist is Prince the title is New power generation the genre is Funk the price is £10");
    });



});