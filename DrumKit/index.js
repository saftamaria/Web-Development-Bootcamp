/*document.querySelector("button").addEventListener("click", handCliked);

function handCliked(){
    alert("i got cliked");
}*/ //NON-anonimous function

var nrOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < nrOfDrums ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("i got clicked");

    }); //anonimous function
}





