
let baseUrl = `https://hid-food-apii.onrender.com/product_data`;

// ***************main container**********
let mainSection = document.getElementById("container");

// ***************pagination*************
let pagination = document.getElementById("pagination");

// **************localStorage***********************
let hotelLS = JSON.parse(localStorage.getItem("hotelCard")) || [];

// ******************sort*********************


let sortAtoZ = document.getElementById("atoz");
let sortZtoA = document.getElementById("ztoa");
let dist = document.getElementById("dist");
let globle = [];
let reviewFilter = document.getElementById("filter");

window.addEventListener("load", fetchData(1))
async function fetchData(Page) {
    try {
        let responce = await fetch(`${baseUrl}?_page=${Page}&_limit=10`)
        let total = responce.headers.get(`X-Total-Count`)
        pagination.innerHTML = "";
        let page = Math.ceil(total / 10);

        for (let i = 1; i <= page; i++) {
            pagination.append(creatBtn(i))
        }

        let data = await responce.json();
        globle = data;
        displayHotel(data);
    } catch (error) {
        console.log(error)
    }
}




function creatBtn(id) {

    let btn = document.createElement("button");
    btn.classList.add("pageBtn");
    btn.textContent = id;
    btn.addEventListener("click", () => fetchData(id))


    return btn;
}
function displayHotel(data) {
    mainSection.innerHTML = "";
    let cardlist = document.createElement("div")
    cardlist.classList.add("cardList");

    data.forEach(hotel => {

        cardlist.append(displaycard(hotel));
    })
    mainSection.append(cardlist);
}

function displaycard(hotel) {

    let card = document.createElement("div");
    card.classList.add("card");

    let imagediv = document.createElement("div");
    imagediv.classList.add("imagediv");

    let image = document.createElement("img");
    image.src = hotel.avatar;
    image.setAttribute("alt", hotel.name);

    imagediv.append(image);

    let cardbody = document.createElement("div");
    cardbody.classList.add("cardbody");

    let name = document.createElement("h2");
    name.textContent = hotel.name;

    let description = document.createElement("p");
    description.textContent = hotel.details;

    let distance = document.createElement("p");
    distance.textContent = `Distance : ${hotel.distance}m`;

    let rateing = document.createElement("p");
    rateing.textContent = hotel.rateing;

    let review = document.createElement("h4");
    review.textContent = `Review of Hotel :- ${hotel.review}`;

    cardbody.append(name, description, distance, review)

    let cardbuy = document.createElement("div");
    cardbuy.classList.add("cardbuy");

    let price = document.createElement("p");
    price.textContent = `Price : ₹ ${hotel.price}`;

    let tax = document.createElement("p")
    tax.textContent = `Tax : ₹ ${hotel.tax}`;

    let buy = document.createElement("button");
    buy.classList.add("buybtn");
    buy.textContent = "Book Now"

    let stars = document.createElement("i")
    stars.innerHTML = `<span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>`
    buy.addEventListener("click", () => {
       
            Swal.fire({
                title: `${hotel.name}`,
                text: `Is Select For Booking`,
                imageUrl: `${hotel.avatar}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
               
              })
            hotelLS.push({ ...hotel, day: 1, Guest: 0 });
            localStorage.setItem("hotelCard", JSON.stringify(hotelLS))
            window.location.href="./booking.html"
      
    })
    cardbuy.append(stars, price, tax, buy)



    card.append(imagediv, cardbody, cardbuy)
    return card;
}

function duplicate(data) {

    for (let i = 0; i < hotelLS.length; i++) {

        if (hotelLS[i].id == data.id) {
            return true;
        }
    }
    return false;
}

// =====================sort======================


sortAtoZ.addEventListener("click", function () {
    let sH = [...globle]
    sH = sH.sort(function (a, b) {
        return a.price - b.price
    })
    console.log(sH)
    displayHotel(sH)
})

sortZtoA.addEventListener("click", function () {
    let sH = [...globle]
    sH = sH.sort(function (a, b) {
        return b.price - a.price
    })
    console.log(sH)
    displayHotel(sH)
})

dist.addEventListener("click", function () {
    let sH = [...globle]
    sH = sH.sort(function (a, b) {
        return a.distance - b.distance
    })
    console.log(sH)
    displayHotel(sH)
})


reviewFilter.addEventListener("change", () => {
    if (reviewFilter.value == "") {
        displayHotel(globle);
    }
    else {
        data = globle.filter((element) => {
            return element.review === reviewFilter.value;
        })
        displayHotel(data)
    }

})

