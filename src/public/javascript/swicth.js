let swicth = document.querySelector(".swicth");
let flexRightLeft = document.querySelector(".flexRightLeft");

swicth.addEventListener("click", () => {
  flexRightLeft.classList.toggle("none");
});

//test fetch API
// const endPoint = "current";
// const key = "1597c2c7147d97246c6dbbd91d1493f2";
// // const location = "New%20York";
// const location1 = "Da%20Nang";
// const unit = "f";

// const url = `http://api.weatherstack.com/${endPoint}?access_key=${key}&query=${location1}&units=${unit}`;

// fetch(url)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
