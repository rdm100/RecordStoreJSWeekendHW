const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printRecordProperties = function () {
	return "The record artist is " + this.artist + " the title is " + 
	this.title + " the genre is " + this.genre + " the price is £" + this.price;
};



module.exports = Record;
