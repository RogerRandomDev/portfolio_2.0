$('document').ready(function () {
    $("#hideButton").on("click", function () {
        $("#top_nav").slideToggle(1000)
        $("#hideButton").text($("#hideButton").text() == "Hide" ? "Show" : "Hide")
    })
})