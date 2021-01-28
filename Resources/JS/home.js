function correctDates(){
    if (m == 1|3|5|7|8|10|12) {
        if (d > 31){
            m = n.getMonth() + 2
            d = d - 31
        }
    }
    if (m == 4|6|9|11) {
        if (d > 30){
            m = n.getMonth() + 2
            d = d - 30
        }
    }else{
        if (d > 28){
            m = n.getMonth() + 2
            d = d - 28
        }
    }
};
n =  new Date();
m = n.getMonth() + 1;
d = n.getDate() + 2;
correctDates();
document.getElementById("date").innerHTML = d + "/" + m;
m = n.getMonth() + 1;
d = n.getDate() + 3;
correctDates();
document.getElementById("date1").innerHTML = d + "/" + m;
m = n.getMonth() + 1;
d = n.getDate() + 4;
correctDates();
document.getElementById("date2").innerHTML = d + "/" + m;