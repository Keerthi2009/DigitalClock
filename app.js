let time = document.getElementById('clock');
function clock() {
setInterval( _ => {
    let date = new Date();//date object
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = date.getHours() > 12 ? 'PM' : 'AM';
    time.innerHTML = `<h1>${hours} : ${minutes} : ${seconds} ${amorpm}</h1>`
},1000)

}
clock();

