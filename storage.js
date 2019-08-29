function clearForm()
{
	document.getElementById("form").reset();
	sessionStorage.clear();
	alert("Cleared!");
}

function storeForm()
{
	var fields = document.getElementById("form").elements;
	for (var i = 0; i < fields.length; i ++)
	{
		let fieldId = fields[i].name;
		let fieldValue = fields[i].value;
		fieldValue = fieldValue.replace(/(?:\r\n|\r|\n)/g, '</li><br><li>');
		sessionStorage.setItem(fieldId, fieldValue);
	}
	window.location.href = "generate.html";
}