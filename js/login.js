 $(function(){
  $("#signup").click(function(){
   var cont = $("input").serialize();
   $.ajax({
        url:'./service/signup.php',
        type:'post',
        dataType:'json',
        data:cont,
        success:function(data){
            var str = data.username+", create successful";
            $("#result").html(str);
        },
        error:function(data){
            var str = "This username exist";
            $("#result").html(str);
        }
    });
  });
});

$(function(){
  $("#changePage").click(function(){
    $('#title').html("Sign up");
    $('#signup').css('display','block');
    $('#login').css('display','none');

  });
});
