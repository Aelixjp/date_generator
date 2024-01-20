Date.prototype.getDBFormatted = function()
{
	const year = this.getFullYear().toString();
	const month = this.getMonth().toString().padStart(2, "0");
	const day = this.getDay().toString().padStart(2, "0");

	const hours = this.getHours().toString().padStart(2, "0");
	const minutes = this.getMinutes().toString().padStart(2, "0");
	const seconds = this.getSeconds().toString().padStart(2, "0");

	const dateFormatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	
	return dateFormatted;
}

const dt = new Date();

console.log(dt.getDBFormatted());
