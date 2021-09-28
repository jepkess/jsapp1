function besure() {
    //    var check = confirm("Do you really want to continue")

    if (confirm("Do you really want to continue")) {
        window.location.href = 'work.html';


        return true;

    } else {
        window.location.href = '/';
        return false;
    }

}

function getname() {
    var myname = prompt("enter your name to continue.")
    document.getElementById("username").innerHTML = myname;
    return true;


}

//hide and show effects (Jquery)
$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    })
});