function testload()
{
	var dataOrder = new Array("Move In/Out", "Program Fob", "Enterphone", "Recreation Room", "Visits of Tradesman", "Notice/Memo", "Miscelaneous", "Suggestions");
	let allData= "";
	for (let i = 1; i < dataOrder.length; i++)
	{
		let valueData = sessionStorage.getItem(dataOrder[i]);
		allData += '<div class="cell"><div class="title"><h2>' + dataOrder[i] + '</h2></div><div class="value"><ul><li>' + valueData + '</li></ul></div></div><br>';
	}
	document.getElementById("data").innerHTML = '<div class="vl">' + allData + '</div>';
}