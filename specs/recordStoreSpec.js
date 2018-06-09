const assert = require("assert");
const RecordStore = require("../recordStore.js")
const Record = require("../record.js")

describe('RecordStore', function(){

let recordStore;
let record1;

    beforeEach(function(){
      recordStore = new RecordStore ("Recordia", "Glasgow");
      record1 = new Record ("Prince", "New power generation", "Funk", 10.00);
      record2 = new Record ("Rihanna", "Loud", "Pop", 10.00);
});


    it('RecordStore has a name', function(){
      assert.strictEqual(recordStore.name, "Recordia");
    });

    it('RecordStore has a city', function(){
      assert.strictEqual(recordStore.city, "Glasgow");
    });

    it('RecordStore has a balance', function(){
      assert.strictEqual(recordStore.balance, 0);
    });

    it('RecordStore has an inventory', function(){
      assert.strictEqual(recordStore.count(), 0);
    });

    it('Can add record to inventory', function(){
      recordStore.addRecord(record1);
      assert.deepStrictEqual(recordStore.inventory, [record1]);
    });

    it('Can count records', function(){
      recordStore.addRecord(record1);
      assert.strictEqual(recordStore.count(), 1);
    });

    it('Can list the inventory', function(){
      recordStore.addRecord(record1);
      assert.strictEqual(recordStore.listInventory().length, 1);
    });

    it('Can add sell price of record1 to balance', function(){
      recordStore.addRecord(record1);
      recordStore.addSellPriceToBalance(record1);
      // recordStore.remove(record1);
      assert.strictEqual(recordStore.balance, 10.00)
      // assert.strictEqual(recordStore.listInventory().length, 0);
    });

    it('Can decrease balance by record1 price', function(){
      recordStore.addSellPriceToBalance(record1);
      recordStore.addSellPriceToBalance(record1);
      recordStore.decreaseBalanceByRecordPrice(record1);
      assert.strictEqual(recordStore.balance, 10.00);
    });

    it('Can sell record1', function(){
      recordStore.addRecord(record1);
      recordStore.sell(record1);
      assert.strictEqual(recordStore.balance, 10.00)
      assert.strictEqual(recordStore.listInventory().length, 0);
    });

     it('Can list the balance and inventory value after sale', function(){
      recordStore.addRecord(record1);
      recordStore.addRecord(record1);
      // recordStore.addSellPriceToBalance(record1);
      // recordStore.remove(record1);
      recordStore.sell(record1);
      assert.strictEqual(recordStore.finances(), "The balance is £10. The inventory value is £10");
    });

     it('Can get inventory value after sale', function(){
      recordStore.addRecord(record1);
      recordStore.addRecord(record1);
      // recordStore.addSellPriceToBalance(record1);
      // recordStore.remove(record1);
      recordStore.sell(record1);
      assert.strictEqual(recordStore.calcInventoryValue(), 10);
    });


    it('Can get Overall assets value', function(){
      recordStore.addRecord(record1);
      recordStore.addRecord(record1);
      recordStore.addRecord(record1);
      // recordStore.addSellPriceToBalance(record1);
      // recordStore.remove(record1);
      recordStore.sell(record1);
      assert.strictEqual(recordStore.balance, 10.00)
      assert.strictEqual(recordStore.overallAssetValue(), "Overall asset value £30");
    });

    it('Can view all Records of a given Genre', function(){
      recordStore.addRecord(record1);
      recordStore.addRecord(record2);
      assert.deepStrictEqual(recordStore.viewRecordsOfGenre("Funk"), [record1]);
    });



});

