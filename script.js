function changeBgColorUser(){
    let color = document.getElementById("colorInput").value.toLowerCase();

    if (color == "yellow") {
        document.body.style.backgroundColor = "rgba(249, 255, 87, 0.92)";
    } 
    else if (color == "green") {
        document.body.style.backgroundColor = "rgba(87, 255, 107, 0.92)";
    } 
    else if (color == "red") {
        document.body.style.backgroundColor = "rgba(255, 87, 87, 0.92)";
    } 
    else if (color == "black") {
        document.body.style.backgroundColor = "rgb(19, 17, 17)";
    } 
    
    else {
        document.body.style.backgroundColor = "white";
        alert("sorry, dont have the color."); 
    }
}

function f() { 
    document.getElementById("message").innerText = "hi happy guy\n Why ru happy today?";
    document.body.style.backgroundColor = "rgba(249, 255, 87, 0.92)";
}

function d() { 
    document.getElementById("message").innerText = "hi sad guy\n Why ru sad today?";
    document.body.style.backgroundColor = "rgba(18, 5, 133, 0.92)";
}


function CM() {
    if (mood == "good") {
        alert("Thats great!!!! Im glad ur happy! Would you like to attempt some riddles");
   
    }
    if (mood == "bad") {
        alert("aww... that very unfortunate. I`v got some riddles for you to chillax");

  }
}

  function easy1() {
    let riddle = document.getElementById("riddle1").value.toLowerCase();

    if (riddle === "soap") {
        alert("Great!!!! Correct");
    } else {
        alert("wrong... one more guess?");
    }
}



