function send_message() {
	var formdata = new FormData();
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	formdata.append('name', name);
	formdata.append('age', age);
	xhr.post('text.txt', formdata);
}