var refVal = 9;
var parentEl = $(".container")
var date = new Date();
var currenthour = date.getHours()  

$(".event1").text(localStorage.getItem("event1"))
$(".event2").text(localStorage.getItem("event2"))
$(".event3").text(localStorage.getItem("event3"))
$(".event4").html(localStorage.getItem("event4"))
$(".event5").html(localStorage.getItem("event5"))
$(".event6").html(localStorage.getItem("event6"))
$(".event7").html(localStorage.getItem("event7"))
$(".event8").html(localStorage.getItem("event8"))
$(".event9").html(localStorage.getItem("event9"))
 // null

// var getevent = null;


// function to render and display current day
function currentDate(){
    $("#currentDay").text(date)
}
// function to set time for the day
function setReferenceValue(){
    // var refVal = 9;
    // for(var i = 0; i<parentEl.children().length; i++){
    //     refVal++;
    //     console.log(refVal)
    //     parentEl.children()[i].attr("value", refVal)
    //     console.log(parentEl.children())
    // }
    parentEl.children().each(function(index,item){
        $(item).attr("value", refVal)
        refVal++;
    })
    colorIndicator()
}
// function to show color indication of past, present, future
function colorIndicator(){
    parentEl.children().each(function(index, item){
        
        if(currenthour > parseInt($(item).attr("value"))){
            $(item).find(".eventholder").css("background-color", "grey")
            
        }else if(currenthour < parseInt($(item).attr("value"))){
            $(item).find(".eventholder").css("background-color", "green")
        }else{
            $(item).find(".eventholder").css("background-color", "red")
        }
    })
    storeEvent()

}
//function to store text value from div text box to local storage
function storeEvent(){
  $(".btn").click(function(){
     var divloco = $(this).parent().prev()
     var text = divloco.html()
     localStorage.setItem(divloco.attr("data-event"), text)
     displayEvent($(this))
  })
  
}
function displayEvent(a){
    var divloco = a.parent().prev()
    var getevent = localStorage.getItem(divloco.attr("data-event"))
    if(getevent){
        a.parent().prev().html(getevent);
        console.log(getevent)
    }  

}



currentDate()
setReferenceValue()

/**
 * 
 * 9am  Hello  -> event = hello
 * 10am Hello 2  -> event = hello2
 */