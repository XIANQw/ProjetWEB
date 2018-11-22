//change to sigin up
$(function(){
  $("#ModeSignUp").click(function(){
    $('#title').html("Sign up");
    $('#signup').css('display','block');
    $('#login').css('display','none');
    $('#divSignup').css('display','none');
    $('#ModeSignIn').css('display','block');
    $("#result").html("");
  });
});


// login
$(function(){
  $('#login').click(function(){
		var username=$('#user-name').val();
		var password=$("#user-password").val();
		if(username!=""&&password!=""){
			$.ajax({
				type:"POST",
				url:"./service/login.php",
				dataType:"JSON",
				data:{
					"username":username,
					"password":password,
				},
				success:function(data){
					switch(data){
						case 1:
              var str = "";
              $('#tete').css('display','none');
              $("#result").html(str);
              login(username);
							break;
						case 2:
              var str = "password fault！";
              $("#result").html(str);
							break;
						case 3:
              var str = "user not exist！"
              $("#result").html(str);
              break;
					}
				},
        error:function(data){
          console.log(data);
            var str = "an error produit";
            $("#result").html(str);
        }
			})
	  }
    else{
			alert("input your username and password");
    }
  })
});

function login(n){
  $('#nameOfUser').html(n);
  $('#divSign').css('display','none');
  $('#divId').css('display','block');
}

$(function(){
  $("#disconnect").click(function(){
    $('#divSign').css('display','block');
    $('#divId').css('display','none');
    $('#tete').css('display','block');
  });
});
