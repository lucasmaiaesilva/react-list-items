/*
var promessa = new Promise(function(resolve, reject) {
	// Do the usual XHR stuff
	var req = new XMLHttpRequest();
	req.open('GET', 'https://mysterious-ridge-5762.herokuapp.com/joao/3/16');

	req.onload = function() {
		// This is called even on 404 etc
		// so check the status
		if (req.status == 200) {
			// Resolve the promise with the response text
			resolve(req.response);
		}
		else {
			// Otherwise reject with the status text
			// which will hopefully be a meaningful error
			reject(Error(req.statusText));
		}
	}

	// Handle network errors
	req.onerror = function() {
		reject(Error("Network Error"));
	}

	// Make the request
	req.send();

});


promessa.then(function(response) {
	console.log('Success!' + response);
}, function(error){
	console.log('Error! ' + error );
});
*/