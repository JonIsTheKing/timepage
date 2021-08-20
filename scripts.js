setInterval('refresh()', 1000);

function displayDate() {
    var d = new Date();
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const date = d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear();
    const day = days[d.getDay()-1];
    const time = d.getHours() +" : " + d.getMinutes() + " : " + d.getSeconds();
    
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
    document.getElementById('day').innerHTML = day;
}

displayDate();

function refresh() {
    var d = new Date();
    var hrs, time;
    if(d.getHours() >= 12) {
        time = d.getHours() +" : " + d.getMinutes() + " : " + d.getSeconds() + "P.M";
        if(d.getHours() > 12) {
            hrs = d.getHours() - 12;
            time = hrs +" : " + d.getMinutes() + " : " + d.getSeconds() + " " + "P.M";
        }
    }
    else {
        time = d.getHours() +" : " + d.getMinutes() + " : " + d.getSeconds() + " "+ "A.M";
    }
    
    document.getElementById('time').innerHTML = time;
}
