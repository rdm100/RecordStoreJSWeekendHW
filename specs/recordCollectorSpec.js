const assert = require("assert");
const RecordCollector = require("../recordCollector.js")
const RecordStore = require("../recordStore.js")
const Record = require("../record.js")

describe('RecordCollector', function(){

let recordCollector1;
let recordStore;
let record2;

    beforeEach(function(){
      recordCollector1 = new RecordCollector ("Mike", 20.00);
      recordStore = new RecordStore ("Recordia", "Glasgow");
      record2 = new Record ("Rihanna", "Loud", "Pop", 10.00);
      record3 = new Record ("Various", "Mega Mix", "Pop", 21.00);

});

    it('RecordCollector has a name', function(){
      assert.strictEqual(recordCollector1.name, "Mike");
    });

    it('RecordCollector has a money', function(){
      assert.strictEqual(recordCollector1.money, 20.00);
    });

	it('RecordCollector can spend money', function(){
	  recordCollector1.spendMoney(record2);
      assert.deepStrictEqual(recordCollector1.money, 10.00);
    });

	it('RecordCollector cannot afford record3', function(){
	  recordCollector1.spendMoney(record3);
      assert.deepStrictEqual(recordCollector1.money, 20.00);
    });

	it('RecordCollector can add record2 to collection', function(){
	  recordCollector1.addRecordToCollection(record2);
      assert.deepStrictEqual(recordCollector1.collection, [record2]);
    });

	it('RecordCollector can buy record2', function(){
	  recordStore.addRecord(record2);
	  recordCollector1.buysRecord(record2, recordStore);
	  assert.deepStrictEqual(recordStore.inventory.length, 0);
      assert.deepStrictEqual(recordCollector1.collection, [record2]);
    });

	it('RecordCollector can make money', function(){
	  recordCollector1.makeMoney(record2);
      assert.deepStrictEqual(recordCollector1.money, 30.00);
    });

	it('RecordCollector can remove record2 from collection', function(){
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector1.addRecordToCollection(record3);
	  recordCollector1.removeRecordFromCollection(record2);
      assert.deepStrictEqual(recordCollector1.collection.length, 1);
      assert.deepStrictEqual(recordCollector1.collection, [record3]);
    });

    it('RecordCollector can sell record2 to record store', function(){
      recordStore.addRecord(record2);
      recordStore.addRecord(record2);
	  recordCollector1.buysRecord(record2, recordStore);
	  recordCollector1.buysRecord(record2, recordStore);
	  recordCollector1.addRecordToCollection(record3);
	  recordCollector1.sellsRecordToRecordStore(record2, recordStore);
	  assert.deepStrictEqual(recordStore.balance , 10.00);
	  assert.deepStrictEqual(recordStore.inventory.length, 1);
      assert.deepStrictEqual(recordCollector1.collection, [record2, record3]);
    });

    it('RecordCollector can sell record2 to anyone else', function(){
      recordStore.addRecord(record2);
	  recordCollector1.buysRecord(record2, recordStore);
	  recordCollector1.sellsRecordToAnyoneElse(record2);
	  assert.deepStrictEqual(recordCollector1.money, 20);
      assert.deepStrictEqual(recordCollector1.collection, []);
    });

    it('RecordCollector can view the total value of their collection', function(){
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector1.addRecordToCollection(record3);
      assert.strictEqual(recordCollector1.totalValueOfCollection(), "The total value of collection is £31");
    });

    it('RecordCollector can view the total value of Pop genre collection', function(){
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector1.addRecordToCollection(record3);
      assert.strictEqual(recordCollector1.totalValueOfCollectionByGenre("Pop"), "The total value of collection by genre is £31");
    });

   //  it('RecordCollector can view their most valuable record', function(){
	  // recordCollector1.addRecordToCollection(record2);
	  // recordCollector1.addRecordToCollection(record3);
   //    assert.strictEqual(recordCollector1.totalValueOfCollectionByGenre("Pop"), "The total value of collection by genre is £31");
   //  });

    it('RecordCollector can sort collection descending price', function(){
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector1.addRecordToCollection(record3);
      assert.deepStrictEqual(recordCollector1.sortRecordsByDescendingPrice(), [record3, record2]);
    });

    it('RecordCollector record in collection with highest price', function(){
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector1.addRecordToCollection(record3);
      assert.deepStrictEqual(recordCollector1.recordWithMaxPrice(), record3);
    });

      it('RecordCollector can sort collection Ascending price', function(){
      recordCollector1.addRecordToCollection(record3);
	  recordCollector1.addRecordToCollection(record2);
      assert.deepStrictEqual(recordCollector1.sortRecordsByAscendingPrice(), [record2, record3]);
    });

      it('RecordCollector can compare collection to another collectors', function(){
      recordCollector2 = new RecordCollector("Paul", 30.00)
      recordCollector1.addRecordToCollection(record3);
	  recordCollector1.addRecordToCollection(record2);
	  recordCollector2.addRecordToCollection(record3);
	  recordCollector2.addRecordToCollection(record3);
      assert.deepStrictEqual(recordCollector1.compareValueOfCollections(recordCollector1, recordCollector2), "Paul has the most valuable collection The total value of collection is £42");
    });


});


