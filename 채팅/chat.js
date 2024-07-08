    $("#send").on("click",function(){

        var msg = $("#input").val();

        var tr = $("<tr></tr>");
        tr.append("<td>"+msg);
        $("#box").append(tr);
        $("#input").val("");

        })
