//sign up
 $(function(){
  $("#signup").click(function(){
    var username=$('#user-name').val();
		var password=$("#user-password").val();
   $.ajax({
        url:'./service/signup.php',
        type:'post',
        dataType:'json',
        data:{
					"username":username,
					"password":password,
				},
        success:function(data){
          switch(data){
            case 1:
              var str = username+", create successful";
              $("#result").html(str);
              break;
            case 2:
              alert("user exist");
              break;
          }
        },
        error:function(data){
          console.log(data);
            var str = "This username exist";
            $("#result").html(str);
        }
    });
  });
});

//go to page sign in
$(function(){
  $("#ModeSignIn").click(function(){
    $('#title').html("Sign in");
    $('#login').css('display','block');
    $('#signup').css('display','none');
    $('#divSignup').css('display','block');
    $('#ModeSignIn').css('display','none');
  });
});
