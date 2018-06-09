const RecordCollecter = function(name, money){
  this.name = name;
  this.money = money;
  this.collection = [];

}

RecordCollecter.prototype.spendMoney = function (record) {
	if(this.money > record.price){
		 this.money -= record.price;
	}
};

RecordCollecter.prototype.addRecordToCollection = function (record) {
		this.collection.push(record);
};

RecordCollecter.prototype.buysRecord = function (record, recordStore) {
	  this.spendMoney(record);
	  this.addRecordToCollection(record);
	  recordStore.sell(record);
};

RecordCollecter.prototype.makeMoney = function (record) {
		 this.money += record.price;
};

RecordCollecter.prototype.removeRecordFromCollection = function (record) {
    const index = this.collection.indexOf(record);
    if (index !== -1) {
        this.collection.splice(index, 1);
    }
}

RecordCollecter.prototype.sellsRecordToRecordStore = function (record, recordStore) {
	  this.makeMoney(record);
	  this.removeRecordFromCollection(record);
	  recordStore.buysRecord(record);
};

RecordCollecter.prototype.sellsRecordToAnyoneElse = function (record) {
	  this.makeMoney(record);
	  this.removeRecordFromCollection(record);
};

module.exports = RecordCollecter;




