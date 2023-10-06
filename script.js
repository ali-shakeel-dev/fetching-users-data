let search = document.querySelector("#search")
let button = document.querySelector("#button")
let form = document.querySelector("form")
let conatiner = document.querySelector(".container")

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
}

// function dataFunc(users) {
//     conatinerLoader.style.display = "none"
//     loader.classList.remove("true")
//     users.forEach((elem) => {
//         let card = `
//         <div class="card true">
//             <img src="${elem.image}" alt="">
//             <div class="card-body">
//                 <p>First Name: ${elem.firstName}</p>
//                 <p>Last Name: ${elem.lastName}</p>
//                 <p>Email: ${elem.email}</p>
//                 <p>Phone: ${elem.phone}</p>
//                 <p>City: ${elem.address.city}</p>
//                 <a href="${elem.domain}" target="_blank"><button> Visit Website</button></a>
//             </div>
//     </div>
//         `
//         conatiner.innerHTML += card;
//     })
// }


function dataFunc(users) {

    function intialPrint(users) {
        conatinerLoader.style.display = "none"
        loader.classList.remove("true")
        users.forEach((elem) => {
            let card = `
        <div class="card true">
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
    intialPrint(users)

    // Input Function

    search.addEventListener('input', () => {
        if (search.value == "") {
            conatiner.innerHTML = ""
            // intialPrint(users)
        } else {
            // intialPrint()
            return users.filter((name) => {
                let text = name.firstName
                if (text.toLowerCase() == search.value.toLowerCase() || text.toLowerCase().includes(search.value.toLowerCase())) {
                    return true
                } else {
                    return false;
                }
            }).map((filterdNames) => {

                let card = `
                <div class="card true">
                    <img src="${filterdNames.image}" alt="">
                    <div class="card-body">
                        <p>First Name: ${filterdNames.firstName}</p>
                        <p>Last Name: ${filterdNames.lastName}</p>
                        <p>Email: ${filterdNames.email}</p>
                        <p>Phone: ${filterdNames.phone}</p>
                        <p>City: ${filterdNames.address.city}</p>
                        <a href="${filterdNames.domain}" target="_blank"><button> Visit Website</button></a>
                    </div>
            </div>
                `
                conatiner.innerHTML += card;
            })

        }
        // intialPrint(users)

    })
}


fetchData()