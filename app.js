let hr = document.getElementById("hour")
let mint = document.getElementById("mint")
let sec = document.getElementById("sec")
function displytime(){
   let date = new Date()
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();
  
   let hrot = 30*hh + mm/2;
   let mrot =  6*mm;
   let srot = 6*ss;

   hr.style.transform = `rotate(${hrot}deg)`
   mint.style.transform = `rotate(${mrot}deg)`
   sec.style.transform = `rotate(${srot}deg)`

}
setInterval(displytime, 1000)