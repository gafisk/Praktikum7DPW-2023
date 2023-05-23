function kehome() {
  document.querySelector('.home').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.querySelector('.sidebar2').style.display = "none";
  document.querySelector('.sidebar1').style.display = "block";
  document.getElementById('title').innerHTML = "HOME | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "yellow";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function keevent() {
  document.querySelector('.event').style.display = "block";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.querySelector('.sidebar2').style.display = "none";
  document.querySelector('.sidebar1').style.display = "block";
  document.getElementById('title').innerHTML = "Event | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "yellow";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function keabout() {
  document.querySelector('.about').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.querySelector('.sidebar2').style.display = "none";
  document.querySelector('.sidebar1').style.display = "block";
  document.getElementById('title').innerHTML = "About | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "yellow";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function kegallery() {
  document.querySelector('.gallery').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.querySelector('.sidebar2').style.display = "none";
  document.querySelector('.sidebar1').style.display = "block";
  document.getElementById('title').innerHTML = "Gallery | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "yellow";
  kontak = document.getElementById('contact').style.color = "white";
}

function kecontact() {
  document.querySelector('.contact').style.display = "block";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.sidebar2').style.display = "block";
  document.querySelector('.sidebar1').style.display = "none";
  document.getElementById('title').innerHTML = "Contact | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "yellow";
}

function tampilgambar(x, y) {
  document.getElementById("ketgambar").style.display = "block";
  if (x == 1) {
    document.getElementById("ketgambar").innerHTML = y;
  } else if (x == 2) {
    document.getElementById("ketgambar").innerHTML = y
  } else if (x == 3) {
    document.getElementById("ketgambar").innerHTML = y
  } else {
    document.getElementById("ketgambar").innerHTML = y
  }
}

function hilanggambar(x) {
  document.getElementById("ketgambar").style.display = "none";
}

function carigoogle() {
  key = document.getElementById("cari").value;
  if (key == "") {
    key = "Wisata mangrove kedatim";
  }
  url = 'http://www.google.com/search?q=' + key;
  window.open(url, '_blank');
  document.getElementById("cari").value = "";
}

function bukamenu() {
  var menuBtn = document.getElementById('menubar');
  if (menuBtn.style.display === "block") {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
}

// Set CountDown
var event1 = new Date("july 29, 2023 08:00:00").getTime();
var event2 = new Date("Jan 1, 2024 00:00:01").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var dis1 = event1 - now;
  var dis2 = event2 - now;
  var days = Math.floor(dis2 / (1000 * 60 * 60 * 24));
  var days1 = Math.floor(dis1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((dis2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var hours1 = Math.floor((dis1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dis2 % (1000 * 60 * 60)) / (1000 * 60));
  var minutes1 = Math.floor((dis1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dis2 % (1000 * 60)) / 1000);
  var seconds1 = Math.floor((dis1 % (1000 * 60)) / 1000);
  document.getElementById("event1").innerHTML = days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";
  document.getElementById("event2").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (dis2 < 0 || dis1 < 0) {
    clearInterval(x);
    document.getElementById("event1").innerHTML = "Event Sudah Selesai";
    document.getElementById("event2").innerHTML = "Event Sudah Selesai";
  }
}, 1000);

//weather
function celcius(kelvin) {
  var celcius = kelvin - 273.15;
  return celcius;
}

var desc = { "clear sky": "Langit Cerah", "few clouds": "Beberapa Awan", "scattered clouds": "Awan Terpisah", "broken clouds": "Awan Pecah", "overcast clouds": "Awan Mendung", "light rain": "Hujan Ringan", "moderate rain": "Hujan Sedang", "heavy rain": "Hujan Deras", "thunderstorm": "Badai Petir", "snow": "Salju", "mist": "Kabut", "fog": "Kabut Tebal", "haze": "Kabut Tipis" };
async function ambilcuaca() {
  var res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-7.093401350698471&lon=113.86447796653671&appid=aed390678981755e8738b2fbe8b5e7ca');
  var data = await res.json();
  console.log(data);
  var gambar = document.getElementById('gambarcuaca');
  gambar.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  document.getElementById('cuaca').innerHTML = desc[data.weather[0].description];
  document.getElementById('suhu').innerHTML = celcius(data.main.temp).toFixed(2);
  document.getElementById('wspeed').innerHTML = data.wind.speed;
  document.getElementById('lokasi').innerHTML = data.name;
}
ambilcuaca();