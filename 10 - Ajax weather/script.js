// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

// 47f2a0b3ebfed08259e2dc8b7a5455ac
// https://api.openweathermap.org/data/2.5/forecast?q=Baku&appid=2a5e17dce8914cc1122f1e89e7fd69af 16 дне

// https://pro.openweathermap.org/data/2.5/forecast/climate?cnt=7&appid=47f2a0b3ebfed08259e2dc8b7a5455ac   30 дней

// https://pro.openweathermap.org/data/2.5/forecast/climate?q="Moscow"&appid=47f2a0b3ebfed08259e2dc8b7a5455ac

// const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Baku&appid=2a5e17dce8914cc1122f1e89e7fd69af');
// console.log(response.json);
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

let url = "https://api.openweathermap.org/data/2.5/forecast";
let key = "47f2a0b3ebfed08259e2dc8b7a5455ac";

$("#myForm").submit(async function () {
  event.preventDefault();
  let cityName = $("#cityName").val();
  console.log(cityName);
  let data = await $.get(`${url}?q=${cityName}&appid=${key}&units=metric`);
  if (data) {
    $("h3").text(data.city.name);
    $("#description").text(data.list[0].weather[0].description);
    $("#humidity").text("Влажность " + data.list[0].main.humidity + "%");
    $("#speed").text(data.list[0].wind.speed + " m/s");

    $("h6").text(new Date());
    $("img").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        "@2x.png"
    );
  }

  // console.log(data);
  // console.log(data.list[0].dt_txt);
  // console.log(data.list[0].weather[0].icon);

  let week = [];

  for (let i = 1; i < 7; ++i) {
    let followingDay = new Date(Date.now() + 86400000 * i);
    week.push(followingDay.toISOString().slice(0, 10));
    // console.log(followingDay.toISOString().slice(0,10));
  }

  let itemsArr = [];
  let time = 0;
  for (const item of data.list) {
    if (week.includes(item.dt_txt.slice(0, 10))) {
      if (time != 4) {
        time++;
        continue;
      } else {
        time = 0;
      }
      itemsArr.push(item);
      week = week.filter((date) => date != item.dt_txt.slice(0, 10));
    }
  }

  console.log(itemsArr);

  $(".body").text('');
  for (const day of itemsArr) {
    console.log(day);
    $(".body").append(
      `<div class="card"">
        <img class="card-img-top" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${day.dt_txt.slice(0,10)}</h5>
          <p class="card-text">${day.weather[0].main} : ${day.weather[0].description}</p>
          <p class="card-text">${day.main.temp}℃</p>
       
         </div>
      </div>`
    );
  }
});
