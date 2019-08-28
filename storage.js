function clearForm()
{
	sessionStorage.clear();
	alert("Cleared!");
}

function storeForm()
{
	var fields = document.getElementById("form").elements;
	for (var i = 0; i < fields.length; i ++)
	{
		let fieldId = JSON.stringify(fields[i].name);
		let fieldValue = fields[i].value;
		sessionStorage.setItem(fieldId, fieldValue);
	}
	window.location.href = "generate.html";
}