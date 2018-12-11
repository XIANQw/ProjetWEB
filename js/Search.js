$(function(){
  $( "#datepicker" ).datepicker();
  $("#nbKw").change(afficherNkeywords);
  $("#button_Search").click(draw);
  $("#ModeSearchAction").click(ModeSearchAction);
})

var i;
var actions;
var nbKw　= 1;
var res = [];

function ModeSearchAction(){
  $("#creatAction").css('display','none');
  $("#searchAction").css('display','block');
  $("#ModeSearchAction").css('background-color','#dee0e2');
  $("#ModeCreatAction").css('background-color','white');
}


function afficherNkeywords(){
  var i;
  nbKw = $("#nbKw").children('option:selected').val();
  $("#keywords").children().remove();
  for(i=1;i<=nbKw;i++){
    var txt = '<input id="kw'+i+'" type="text" name="keyword '+i +'" placeholder="keyword '+i+'"></input>';
    $("#keywords").append($(txt));
  }
}

function afficherList(list){
  var i;
  $("#ResultOfSearch").remove();
  var txt = '<ul id="ResultOfSearch"></ul>';
  $("#searchAction").append($(txt));
  for(i=0;i<list.length;i++){
    txt = '<li id="res'+i+'">'+list[i]["keyword"] + ' '+list[i]["date"]+'</li>';
    $('#ResultOfSearch').append($(txt));
  }
  listeners();
}

function listeners(){
  for(i=0;i<res.length;i++){
    var id = "#res"+i;
    $(id).click(choseAction);
  }
}

function choseAction(){
  var i = this.id.slice(3);
  console.log(res[i]);
}

function prepare(){
  var name = $("#nameOfUser").text();
  $.ajax({
   url: "./service/DATA.json",
   type: "GET",
   dataType: "json",
   success: function(data) {
     $.each(data, function(i, item) {
        if(item.name == name) actions = item.actions;
     })
    console.log(actions);
   }
 })
}

function search(){
  var info = "";
  var keywords = [];
  var tmp = $("#datepicker").val();
  res = [];
  for(i=1;i<=nbKw;i++){
    if($("#kw"+i).val()!="") keywords.push($("#kw"+i).val());
  }
  if(tmp!=""){
    date = tmp.slice(3,5)+'-'+tmp.slice(0,2)+'-'+tmp.slice(6,10);
    if(keywords.length!=0){
      $.each(actions, function(i, action) {
        $.each(keywords, function(j, keyword) {
           if((action.keyword == keyword)&&(action.date.slice(0,10)==date)) res.push(action);
        })
      })
    }else{
      $.each(actions, function(i, action) {
         if(action.date.slice(0,10)==date) res.push(action);
      })
    }
  }else{
    $.each(actions, function(i, action) {
      $.each(keywords, function(j, keyword) {
         if(action.keyword == keyword) res.push(action);
      })
    })
  }

  console.log(res);
  afficherList(res);
}
