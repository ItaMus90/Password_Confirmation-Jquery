//Hide error messsage
$("form span").hide();

/* 
  Bind an event handler to the
 "keyup" JavaScript event, or trigger that event on an element
  --> attach event to input password
 */
$("#password").keyup(errorMessageEvent).keyup(enabledButton);
$("#confirm_password").keyup(matchPassword).keyup(enabledButton);

//Check if password value geater then 6 ture if right else false
function isPasswordValid(){
	return $("#password").val().length > 6;
}

//Check if password match
function isPasswordMatch(){
	return $("#confirm_password").val() === $("#password").val();
}

//Check if password and confirm password true or false 
//to enable the button submit
function isButtonEnabled(){
	return isPasswordValid() && isPasswordMatch();
}

//Attach to page error message 
function errorMessageEvent(){
	if (isPasswordValid()) {
		//this refer to current input
		//next refer to span 
		$(this).next().hide();
	}else{
		$(this).next().show();
	}
}

//Attach to page error message 
function matchPassword(){
	if (isPasswordMatch()) {
		$(this).next().hide();
	}else{
		$(this).next().show();
	}
}

//Enabled or disabaled to button submit
function enabledButton(){
	$("#submit").prop("disabled",!isButtonEnabled);
	if (!isButtonEnabled()) {
		$("#submit").css({"background-color": '#D3D3D3', "color":'#000'});
	}else{
		$("#submit").css({"background-color": '#2F558E', "color": '#FFF'});
	}
}