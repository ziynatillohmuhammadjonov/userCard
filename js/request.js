// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");
const reload = () => {
  overlay.classList.remove("hidden");
  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
          overlay.classList.add("hidden");

          const data = JSON.parse(request.responseText);
          resolve(data.results);
        } else if (request.readyState == 4) {
          reject("Ma'lumot kelmadi.....");
        }
      });
      request.open("GET", API);
      request.send();
    });
  };
  getData(API)
    .then((data) => {
      getUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("DOMContentLoaded", reload());
