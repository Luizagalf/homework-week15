let show = () => {
    switch(document.getElementById("color").value) {
        case "white": document.body.style.backgroundColor = "white"; break;
        case "pink": document.body.style.backgroundColor = "pink"; break;
        case "blue": document.body.style.backgroundColor = "blue"; break;
        case "orange": document.body.style.backgroundColor = "orange"; break;
        case "green": document.body.style.backgroundColor = "green"; break;
    }

}