/* Write your code here! */
function checkInput (name, pw1, pw2) {
	if (name === "") {
		alert('Please enter a user name!')
	} 
	else if (pw2 !== pw1) {
		alert('Please make sure you type in the same password!')
	}
	else {
		alert('Thanks!')
	}
}





$('#signup-form').on('submit', function(e) {
	var userName = $('.user').val();
    var password = $('.pw').val();
    var confirmedPw = $('.cfmPW').val();
	e.preventDefault();
	checkInput(userName, password, confirmedPw);
	//alert('you just submit');
});
