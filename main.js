// var t;
// function time(){

//     const ex = new Date();
//     let text = ex.setInterval;
//     console.log(text  + " welcome");
   

// }
// function currentTime() {
//     t = setInterval(time, 1000);
  
// }
  
// function stop() {
//     clearInterval(t);
// }
  
var a=1;
let stop=setInterval(function (time) {
    a++;
    if(a>10){
        clearInterval(stop);
    }
    document.write(new Date().toLocaleTimeString()+ " Welcome");
    document.write("<br>");
},3000
)
  


//setInterval(function() {
//     if(setInterval>=10){
//     const ex = new Date();
//     let text = ex.toLocaleTimeString();
//    console.log(text  + " welcome");}} ,1000);
    
