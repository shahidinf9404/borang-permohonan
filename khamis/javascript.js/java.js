<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 



let btn= document.getElementById("btn");
btn.addEventListener("click", function(){
let name = document.getElementById("name").value;
if(name == ""){
swal ( "Perhatian!" , "sila lengkapkan borang anda" , "error"); 
}   else {
swal ( "Terima Kasih!", name , "success") 
}
})
