let data = [];
let liked = [];
let AppendCard = document.getElementById("parentContainer");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      fillPage(res);
      //   console.log(data);
      data = res;
    });
}

// function fillPage(usersData) {
//   //   let AppendCard = document.getElementsByClassName("container");
//   let AppendCard = document.getElementById("parentContainer");
//   console.log(AppendCard);
//   for (let i = 0; i < usersData.length; i++) {
//     let { name, username, phone, website, email } = usersData[i];
//     let parentDiv = document.createElement("div");
//     parentDiv.className = "col-3 p-3";
//     let div = document.createElement("div");
//     div.className = "shadow-lg card";
//     div.style.cssText = "border-radius:15px";
//     let cardbody = document.createElement("div");
//     cardbody.className = "card-body";
//     let img = document.createElement("img");
//     let h5 = document.createElement("h5");
//     let li = document.createElement("li");
//     let li2 = document.createElement("li");
//     let li3 = document.createElement("li");
//     img.src = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options%5bmood%5d%5b%5d=happy`;
//     img.className = "card-img-top";
//     img.style.cssText = "height: 300px; width: 100%; border-radius:13px";
//     h5.textContent = name;
//     h5.className = "card-title";
//     li.innerHTML = `<span>
//     <i class="fa fa-envelope"></i>
//     ${email}
//       </span>`;

//     li.className = "card-text";
//     li2.innerHTML = `<span>
//     <i class="fa fa-phone" f095></i>
//     ${phone}
//       </span>`;
//     li2.className = "card-text";
//     li3.innerHTML = `<span>
//     <i class="fa fa-globe" f095></i>
//     ${website}
//       </span>`;
//     li3.className = "card-text";
//     cardbody.append(h5);
//     cardbody.append(li);
//     cardbody.append(li2);
//     cardbody.append(li3);
//     div.append(img);
//     div.append(cardbody);
//     parentDiv.append(div);
//     AppendCard.append(parentDiv);
//   }
// }

function fillPage(usersData) {
  //   let AppendCard = document.getElementsByClassName("container");\
  data = usersData;
  AppendCard.innerHTML = "";
  if (usersData.length) {
    for (let i = 0; i < usersData.length; i++) {
      let { id, name, username, phone, website, email } = usersData[i];
      let ele = `
    <div class="col-3 p-3">
    <div class="card" style="width: 18rem;">
        <span></span>
        <img src=${`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options%5bmood%5d%5b%5d=happy`} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text"><span>
             <i class="far fa-envelope"></i>
                    ${email}
               </span></p>
          <p class="card-text"><span>
              <i class="far fa-phone" f095></i>
               ${phone}
               </span></p>
          <p class="card-text"><span>
           <i class="far fa-globe" f095></i>
           ${website}
             </span></p>
           
        </div>
        <ul class="list-group list-group-horizontal">
        <li id=${id} class="like list-group-item list-group-item-dark" id="like" style="padding: .5rem 2.4rem;">
        ${liked.includes(id) ? `<span id=${id} class="like"><i  id=${id} class="like far fa-heart"></i><span>` : `<span id=${id} class="like"><i id=${id} class="like fas fa-heart"></i><span>`}
        </li>
        <li class="list-group-item list-group-item-dark" style="padding: .5rem 2.4rem;"><span><i value=${id} class="edit far fa-edit"></i></span></li>
        <li value=${id} class="delete list-group-item list-group-item-dark" style="padding: .5rem 2.5rem;"><i value=${id} class="delete far fa-trash"></i></li>
      </ul>
      </div>
      </div>`;
      AppendCard.innerHTML += ele;
    }
  } else {
    AppendCard.innerHTML = "";
  }
}
getData();

document.addEventListener(
  "click",
  function (event) {
    console.log(event.target.id, event.target);

    if (event.target.classList.contains("like")) {
      // Add some logic...

      if (!liked.includes(event.target.value)) {
        liked.push(event.target.value);
      } else {
        liked = liked.filter((e) => e !== event.target.value);
      }
      fillPage(data);
    }
    if (event.target.classList.contains("edit")) {
      // Add some logic...
      console.log("edit", data);
    }
    if (event.target.classList.contains("delete")) {
      // Add some logic...
      console.log("delete", data);
    }
  },
  false
);

// let likeEle = document.getElementById("like");
// if (document.getElementById("like")) {
//   likeEle.addEventListener("click", () => {
//     console.log("Hello");
//   });
// }
// ${liked.indexOf(id) ? `<i value=${id} class="like far fa-heart"></i>` : `<i value=${id} class="like far fa-heart"></i>`}
console.log(data);
