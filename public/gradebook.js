function fetchGradeData() {
	console.log("Fetching grade data...");

	let xhr = new XMLHttpRequest();
	let apiRoute = "/api/grades";

	xhr.onreadystatechange = function(){
		let results;

		if(xhr.readystate === xhr.DONE){
			if(xhr.status !== 200){
				console.error('Could note get grades.
			      Status: ${xhr.status}');
			}
			populateGradebook(JSON.parse(xhr.responseText));
		}
	}.bind(this);
	xhr.open("get", apiRoute, true);
	xhr.sent();
}

function populateGradeBook(data) {
	console.log("Populating gradebook with data: ", data);
}

const gradeData = fetchGradeData();
populateGradeBook(gradeData);
