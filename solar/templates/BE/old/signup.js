function validateForm(){
	var s_fname=document.SignupForm.fname;
	var s_lname=document.SignupForm.lname;
	var s_org=document.SignupForm.org;
	var s_email=document.SignupForm.s-email;
	var s_no=document.SignupForm.no;
	var s_pwd=document.SignupForm.pwd;
		
if(validatePhone(s_no) && validateEmail(s_email))
	return true;
else
	return false;		
}

function validatePhone(phone){
	if(phone.value.length == 10)
		return true;
	else{
		alert("Enter 10 digits only");
		phone.value='';
		phone.focus();
		return false;
		}
		
}
function validatePassword(inputtxt){
	var re = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
	if(inputtxt.value.match(re))
		return true;
	else{
		alert("Invalid Password");
		inputtxt.value='';
		inputtxt.focus();
		return false;
	}
	
}

function validateEmail(email){
	var objRegExp  = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
	
	if (email.value.match(objRegExp))
   		return true;
	else{
		alert("Invlaid email");
		email.value='';
		email.focus();
		return false;

	} 
		
}
