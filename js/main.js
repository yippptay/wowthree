let output = 0;
let increment = 1;

$(document).ready(function(){
    $("#container > .plus").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "gray");
        },
        click: function(){
            $(this).css("background-color", "yellow");
            getInput();
            output = output += increment;
            if (output >= 0) {
                $("#myNumber").css("color", "green");
            } else {
                $("#myNumber").css("color", "red");
            }
            $("#myNumber").text(output);
        }
    });
});

$(document).ready(function(){
    $("#container > .minus").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "gray");
        },
        click: function(){
            $(this).css("background-color", "yellow");
            getInput();
            output = output -= increment;
            if (output >= 0) {
                $("#myNumber").css("color", "green");
            } else {
                $("#myNumber").css("color", "red");
            }
            $("#myNumber").text(output);
        }
    });
});

function getInput() {
    let userInput = document.getElementById("num").value;
    if (userInput == "") {
        increment = 1;
    } else {
        increment = parseInt(userInput);
    }
}  