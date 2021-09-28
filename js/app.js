// var myname = prompt("enter your name to continue.")
// document.getElementById("username").innerHTML = myname;

function besure() {
//    var check = confirm("Do you really want to continue")

   if (confirm("Do you really want to continue")){
       window.location.href = 'work.html';
       return true;
       
   } else  {
       window.location.href = '/';
       return false;
   }

}