//validate input field
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let error = document.getElementById("error-day");
let errmonth = document.getElementById("error-month");
let erryear = document.getElementById("error-year");
let button = document.getElementById("btn");
let finalYear = document.getElementById("y1");
let finalMonth = document.getElementById("m1");
let finalDay = document.getElementById("d1");

//validate Day
function validateDay() {
  if (day != "" && day.value > 31) {
    error.innerHTML = "enter a valid Day";
    return false;
  } else if (day.value == "0") {
    error.innerHTML = "enter a valid Day";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
}

//validate month

function validateMonth() {
  if (month.value > 12) {
    errmonth.innerHTML = "enter a valid month";
    return false;
  } else if (month.value == "0") {
    errmonth.innerHTML = "enter a valid month";
    return false;
  } else {
    errmonth.innerHTML = "";
    return true;
  }
}

//validate year
function validateYear() {
  if (year.value == "0") {
    erryear.innerHTML = "Enter a valid year";
    return false;
  } else if (year.value > new Date().getFullYear()) {
    erryear.innerHTML = "Enter a valid year";
    return false;
  } else {
    erryear.innerHTML = "";
    return true;
  }
}

function calculateAge(){
  var today = new Date();
  var d2 = today.getDate();
  var m2 = 1 + today.getMonth();
  var y2 = today.getFullYear();
  var months =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31,30, 31];

  if(day.value > d2){
    d2 = d2 +months[m2 -1];
    m2 = m2 -1;
  }
  if(month.value >m2){
    m2 =m2+12;
    y2=y2-1;
  }
 
  var days = d2 - day.value;
  var month2 = m2 - month.value;
  var years = y2 - year.value;

  finalDay.innerHTML = days;
  finalMonth.innerHTML = month2;
  finalYear.innerHTML = years;

  }
button.addEventListener("click",calculateAge);
