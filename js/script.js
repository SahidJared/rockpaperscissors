// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOWs
$(document).ready(function(){
    $("#shoot").click(function(){
        $("#userChoice").text($("#shoot").val());
        alert(randomNumber);
    });
});
var computerChoice="";
var winner="";
var userChoice="";
var randomNumber=Math.random();