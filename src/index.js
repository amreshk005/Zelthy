let data = [];
let liked = [];
let AppendCard = document.getElementById("parentContainer");
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      fillPage(res);
      console.log(data);
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

let modal = `  `;

function fillPage(usersData) {
  //   let AppendCard = document.getElementsByClassName("container");\
  data = usersData;
  AppendCard.innerHTML = "";
  if (usersData.length) {
    for (let i = 0; i < usersData.length; i++) {
      let { id, name, username, phone, website, email } = usersData[i];
      let ele = `
    <div class="col-sm-12 col-md-3 col-lg-3 p-3">
        <ow class="card" style="width: 18rem;">
              <img src=${`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options%5bmood%5d%5b%5d=happy`} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                    <span>
                      <i class="far fa-envelope"></i>
                    ${email}
                    </span>
                </p>
                <p class="card-text">
                  <span>
                    <i class="far fa-phone" f095></i>
                    ${phone}
                  </span>
                </p>
                <p class="card-text">
                    <span>
                      <i class="far fa-globe" f095></i>
                    ${website}
                    </span>
                </p>      
            </div>
            <ul class="list-group list-group-horizontal">
              <li id=${id} class="like list-group-item list-group-item-dark" id="like" style="padding: .5rem 2.4rem;" role="button">
                  ${
                    liked.includes(`${id}`)
                      ? `<span id=${id} class="like">
                        <i  id=${id} class="like far fa-heart" role="button">
                        </i>
                    <span>`
                      : `<span id=${id} class="like">
                        <i id=${id} class="like fas fa-heart">
                        </i>
                    <span>`
                  }
              </li>
              <li id=${id} role="button" class="edit list-group-item list-group-item-dark" style="padding: .5rem 2.4rem;">
                  <span>
                      <i id=${id} class="edit far fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal${id}" data-bs-whatever="@mdo">
                      </i>
                  </span>
              </li>

              <li id=${id} class="delete list-group-item list-group-item-dark" role="button" style="padding: .5rem 2.5rem;">
                  <i id=${id} class="delete far fa-trash">
                  </i>
              </li>
          </ul>
      <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Basic Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="mb-3">
                  <label><span class="text-danger">*</span>Name: </label>
                  <input type="text" class="form-control w-75" style="display:inline;" id="name${id}" value=${name}/>
              </div>
              <div class="mb-3">
                <label><span class="text-danger">*</span>Email: </label>
                <input type="email" class="form-control w-75" style="display:inline;" id="email${id}" value=${email}>
              </div>
              <div class="mb-3">
                <label><span class="text-danger">*</span>Phone: </label>
                <input type="tel"  class="form-control w-75" style="display:inline;" id="phone${id}" value=${phone}>
              </div>
              <div class="mb-3">
                <label><span class="text-danger">*</span>Website: </label>
                <input type="url" class="form-control w-75" style="display:inline;" id="website${id}" value=${website}>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary bg-light text-dark" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="SubmitEdit btn btn-primary" data-bs-dismiss="modal" id=${id}>Ok</button>
          </div>
        </div>
      </div>
      </div>
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
    if (event.target.classList.contains("like")) {
      // Add some logic...
      if (!liked.includes(event.target.id)) {
        liked.push(event.target.id);
      } else {
        liked = liked.filter((e) => e !== event.target.id);
      }
      fillPage(data);
    }
    if (event.target.classList.contains("SubmitEdit")) {
      let updated = data.map((e) => {
        console.log(e, e.id === Number(event.target.id));
        if (e.id === Number(event.target.id)) {
          let name = document.getElementById(`name${e.id}`).value;
          let email = document.getElementById(`email${e.id}`).value;
          let phone = document.getElementById(`phone${e.id}`).value;
          let website = document.getElementById(`website${e.id}`).value;
          let newObj = { ...e, name: name, email: email, phone: phone, website: website };
          return newObj;
        }
        return e;
      });

      data = updated;
      fillPage(data);
    }
    if (event.target.classList.contains("delete")) {
      // Add some logic...
      data = data.filter((e) => e.id !== Number(event.target.id));
      fillPage(data);
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
