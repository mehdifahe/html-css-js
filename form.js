/*function confirm (){

	if (document.querySelector('.name').value===''){
		alert('dsfdsfsqd')
	}
}*/

	let click=document.getElementById('clickme')
	click.addEventListener('click',function(validate){

if(document.querySelector('.name').value.trim() ==''){
	alert('One of the inputs is empty')
	return false

	}
	

var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
if (!document.querySelector('.email-adress').value.match(re)){
	alert("Doesn't have a valid e-mail adress")
	return false
	}
	

var up=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{1,}$/
if(document.querySelector('.password').value.trim().length<8 ){
	alert('The password has less than 8 characters')	
return false
	}else if (!document.querySelector(".password").value.match(up)) {
	alert('The password must include combination of charatacters : numbers and at least a capital letter')
	return false
	}
	return true

})





	
	