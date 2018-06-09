const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function (record) {
	this.inventory.push(record);
};

RecordStore.prototype.count = function () {
	return this.inventory.length;
};

RecordStore.prototype.listInventory = function () {
	let result = [];
	this.inventory.forEach(function(element){
		 result.push(element.printRecordProperties())
	});
	return result
};

RecordStore.prototype.remove = function (record) {
    const index = this.inventory.indexOf(record);
    if (index !== -1) {
        this.inventory.splice(index, 1);
    }
}

RecordStore.prototype.sell = function (record) {
	this.balance += record.price;
	// this.inventory = this.inventory.filter(item => item !== record)
	 
	//  this.inventory.find(function(record) {
 //  	 if(record === record){
 //  	 	remove(record);
 //  	 };

	// });
};

RecordStore.prototype.finances = function () {
	// let inventoryValue = 0;
	// this.inventory.forEach(function(element){
	// 	 inventoryValue += element.price;
	// });
	return "The balance is £" + this.balance + ". The inventory value is £" + this.calcInventoryValue();
};

RecordStore.prototype.calcInventoryValue = function () {
	let inventoryValue = 0;
	this.inventory.forEach(function(element){
		 inventoryValue += element.price;
	});
	return inventoryValue;
};

RecordStore.prototype.overallAssetValue = function () {
	let result = this.balance + this.calcInventoryValue();
	return "Overall asset value £" + result;
};

module.exports = RecordStore;



