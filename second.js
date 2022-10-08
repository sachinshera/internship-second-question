//Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 45
//min &45 sec in the result and the display the output

function militaryTime(s) {
    let time = s.split(':');
    let hour = time[0];
    let min = time[1];
    let sec = time[2].slice(0,2);
    let period = time[2].slice(2);
    if(period === 'PM'){
        hour = parseInt(hour) + 12;
    }
    if(hour === 24){
        hour = '00';
    }
    if(hour < 10){
        hour = '0' + hour;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    return hour + ':' + min + ':' + sec;
}

console.log(militaryTime('12:01:00PM'));
console.log(militaryTime('12:01:00AM'));
console.log(militaryTime('11:01:00AM'));