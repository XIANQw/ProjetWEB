$(function(){
     $("#send").click(function(){
      var cont = $("input").serialize();
      $.ajax({
           url:'test.php',
           type:'post',
           dataType:'json',
           data:cont,
           success:function(data){
            var str = data.username + " login successful";
            $("#result").html(str);
           },
           error:function(data){
               console.log(data);
           }
  });
 });
});
