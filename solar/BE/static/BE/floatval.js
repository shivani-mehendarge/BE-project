function floatValid(){
	var i_lat = document.input_form.lat;
	var i_long = document.input_form.long;
	if(LatValidation(i_lat) && LongValidation(i_long)){
		var PythonShell = require('python-shell');
 
		var options = {
  			mode: 'text',
  			pythonOptions: ['-u'],
  			scriptPath: 'req_data.py',
  			args: ['i_lat', 'i_long']
			};
 
		PythonShell.run('req_data.py', options, function (err, results) {
  		if (err) throw err;
  		// results is an array consisting of messages collected during execution
		try:
			with open('weather_data.txt','w') as f:
				f.write(str(results))
		except IOError as e:
			print("Couldn't open or write to file (%s)." % e)
  		//console.log('results: %j', results);
		});
		return true;
	}
	else
		return false;
		
}

function LatValidation(num){
	var reg= /^[0-9]*[.][0-9]+$/;
	if(num.value.match(reg)){
		return true;
	}
		
	else
	{
		alert("Enter Latitude float value");
		i_lat.value='';
		i_lat.focus();
		return false;
	}
	
}

function LongValidation(num){
	var reg= /^[0-9]*[.][0-9]+$/;
	if(num.value.match(reg)){
		return true;
	}
		
	else
	{
		alert("Enter Longitude float value");
		i_long.value='';
		i_long.focus();
		return false;
	}
	
}
