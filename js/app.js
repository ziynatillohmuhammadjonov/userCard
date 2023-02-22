const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");
const modeBtn = document.querySelector("#dark-btn");
// search user
form["form__input"].addEventListener("input", () => {
  const user = form["form__input"].value.trim().toLowerCase();
  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (item.lastElementChild.textContent.toLocaleLowerCase().includes(user)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

// referesh
formButton.addEventListener("click", (e) => {
  clearBtn.classList.remove("hidden");
  e.preventDefault();
  reload();
});
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});
function delUser(value) {
  console.log(value);
}
//creat card
function getUser(data) {
  user.innerHTML = "";
  data.forEach((item) => {
    creatUser(item);
  });
}
function creatUser(item) {
  const {
    id: { value },
    gender,
    name: { first, last, title },
    dob: { age },
    location: { city, country },
    picture: { large },
  } = item;
  user.innerHTML += `
    <li class="user__item">
              <button id="delete__btn" class="user__delete--btn" onclick='delUser("${age}")'>
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="${large}"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${title} ${first} ${last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${city}, ${country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
    `;
}
function deleteUser(value) {
  console.log(value);
}
document.body.addEventListener("click", (e) => {
  if (e.target.classList[0] === "user__delete--btn") {
    const user = e.target;
    user.parentElement.remove();
  }
  if (user.children.length) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
});
