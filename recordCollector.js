const RecordCollector = function(name, money){
  this.name = name;
  this.money = money;
  this.collection = [];

}

RecordCollector.prototype.spendMoney = function (record) {
	if(this.money > record.price){
		 this.money -= record.price;
	}
};

RecordCollector.prototype.addRecordToCollection = function (record) {
		this.collection.push(record);
};

RecordCollector.prototype.buysRecord = function (record, recordStore) {
	  this.spendMoney(record);
	  this.addRecordToCollection(record);
	  recordStore.sell(record);
};

RecordCollector.prototype.makeMoney = function (record) {
		 this.money += record.price;
};

RecordCollector.prototype.removeRecordFromCollection = function (record) {
    const index = this.collection.indexOf(record);
    if (index !== -1) {
        this.collection.splice(index, 1);
    }
}

RecordCollector.prototype.sellsRecordToRecordStore = function (record, recordStore) {
	  this.makeMoney(record);
	  this.removeRecordFromCollection(record);
	  recordStore.buysRecord(record);
};

RecordCollector.prototype.sellsRecordToAnyoneElse = function (record) {
	  this.makeMoney(record);
	  this.removeRecordFromCollection(record);
};

RecordCollector.prototype.totalValueOfCollection = function () {
	  let total = 0;
	  this.collection.forEach(function(element){
	  	total += element.price;
	 });
	  return "The total value of collection is £" + total;
}

RecordCollector.prototype.totalValueOfCollectionByGenre = function (genre) {
	  let total = 0;
	  this.collection.forEach(function(element){
	  	if(element.genre === genre){
	  	total += element.price;
	  	}
	 });
	  return "The total value of collection by genre is £" + total;
}

 RecordCollector.prototype.sortRecordsByDescendingPrice = function(){
    return this.collection.sort(function(record1, record2){
        return record2.price - record1.price;
      });
}

 RecordCollector.prototype.sortRecordsByAscendingPrice = function(){
    return this.collection.sort(function(record1, record2){
        return record1.price - record2.price;
      });
}

 RecordCollector.prototype.recordWithMaxPrice = function(){
    return this.sortRecordsByDescendingPrice()[0];
}


RecordCollector.prototype.compareValueOfCollections = function (recordCollector1, recordCollector2) {
  if(recordCollector1.totalValueOfCollection() > recordCollector2.totalValueOfCollection()){
    return recordCollector1.name + " has the most valuable collection " + recordCollector1.totalValueOfCollection();
  }
  else {
    return recordCollector2.name + " has the most valuable collection " + recordCollector2.totalValueOfCollection();
  }
};

module.exports = RecordCollector;




