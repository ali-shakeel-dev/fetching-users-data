let search = document.querySelector("#search")
let button = document.querySelector("#button")
let form = document.querySelector("form")

let conatinerLoader = document.querySelector(".loader-container")
let loader = document.querySelector(".loader")

async function fetchData() {
    conatinerLoader.style.display = "flex"
    loader.classList.add("true")
    let fetchData = await fetch("https://dummyjson.com/users")
    let data = await fetchData.json()
    let result = data.users.filter((users) => {
        if (users.id <= 100) {
            return true
        }
    })
    dataFunc(result);
    firstNameFunc(result);
}

function dataFunc(users) {
    conatinerLoader.style.display = "none"
    loader.classList.remove("true")
    let conatiner = document.querySelector(".container")
    users.forEach((elem) => {
        let card = `
    <div class="card">
            <img src="${elem.image}" alt="">
            <div class="card-body">
                <p>First Name: ${elem.firstName}</p>
                <p>Last Name: ${elem.lastName}</p>
                <p>Email: ${elem.email}</p>
                <p>Phone: ${elem.phone}</p>
                <p>City: ${elem.address.city}</p>
                <a href="${elem.domain}" target="_blank"><button> Visit Website</button></a>
            </div>
    </div>
        `
        conatiner.innerHTML += card;
    })


}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (search.value == "") {
        alert("Enter Value");
    } else {
        search.value = "";
    }
})


function firstNameFunc(firstName) {
    firstName.forEach((elem) => {
        console.log(elem.firstName);

    })
}

fetchData()