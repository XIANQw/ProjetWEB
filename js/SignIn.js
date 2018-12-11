//change to sigin up
$(function(){
  $("#disconnect").click(disconnect);
  $("#ModeSignUp").click(ModeSignUp);

// login
  $('#login').click(function(){
  		username=$('#user-name').val();
  		password=$("#user-password").val();
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
                affiche(str);
                loginMode(username);
                prepare();
  							break;
  						case 2:
                var str = "password fault！";
                affiche(str);
  							break;
  						case 3:
                var str = "user not exist！"
                affiche(str);
                break;
  					}
  				},
          error:function(data){
            console.log(data);
              var str = "an error produit";
              affiche(str);
          }
  			})
  	  }
      else{
  			affiche("input your username and password");
      }
  });
});
var username;
var password;

function ModeSignUp(){
  $('#title').html("Sign up");
  $('#signup').css('display','block');
  $('#login').css('display','none');
  $('#divSignup').css('display','none');
  $('#ModeSignIn').css('display','block');
  affiche("");
}

function loginMode(n){
  $('#nameOfUser').html(n);
  $('#divSign').css('display','none');
  $('#divId').css('display','block');
  $('#res').css('display','none');
  $('.afterlogin').css('display','block');
  ModeCreatAction();
}

function disconnect(){
  $('#divSign').css('display','block');
  $('.afterlogin').css('display','none');
  $('#tete').css('display','block');
  affiche(username + " ,bye ~");
}
