let item = document.getElementById("level");
let level = 0;

while(item.parentNode && item.parentNode.nodeName !=="DOCUMENT"){
	item = item.parentNode;
	level++;
}
// d
alert(level);