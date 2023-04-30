// console.log("Script is running")

document.querySelector(".cancel").style.display='none';
document.querySelector(".hambargor1").addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebargo');
 if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector(".ham").style.display='inline'
   
    document.querySelector(".cancel").style.display='none'
    document.querySelector(".main").style.display='fit'
 }
 else{
    document.querySelector(".cancel").style.display='inline'
    
    document.querySelector(".ham").style.display='none'
   //  document.querySelector("sidebar").style.width='0';
    document.querySelector(".main").style.display='fit'
 }
 
})