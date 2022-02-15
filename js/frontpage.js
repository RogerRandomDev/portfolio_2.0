$('document').ready(function(){
    $("#hideButton").on("click",function(){
        $("#top_nav").slideToggle(0);
        $("#hideButton").text($("#hideButton").text()=="Hide"?"Show":"Hide")
    })
})