$(function(){

    $("#send").on("click",function(){

        var msg = $("#input").val();

        var tr = $("<tr></tr>");
        tr.append("<td>"+msg);
        $("#box").append(tr);
        $("#input").val("");

        //var maxScroll = $("#box").height() - $("#topbox").height();
        //$("#topbox").scrollTop(maxScroll);
        })

    $("#input").on("keyup",function(e){
        if(e.keyCode == 13){
            var msg = $("#input").val();
            var tr = $("<tr></tr>");
            tr.append("<td>"+msg)
            $("#input").val("");

        }
    })



})
