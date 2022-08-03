let time = prompt("Введите время часы:");
let minuts = prompt("Введите время минуты:");

let xtime = 24 - time;
let xminuts = 60 - minuts;

if (xtime >= 0 && xminuts >= 0) {
  document.writeln(xtime + "  часов  " + " и " + xminuts + " минут " + " - осталось до конца этого дня");
}
else {
    document.writeln("Вы ввели не превельное время");
}
