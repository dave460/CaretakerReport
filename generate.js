function testload()
{
	var lungime = sessionStorage.length;
	for (let i = 0; i < sessionStorage.length; i++)
	{
		let key = sessionStorage.key(i);
		alert(`${key}: ${sessionStorage.getItem(key)}`);
		document.getElementById("data").innerHTML = key;
	}
}