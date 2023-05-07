
let mainSection = document.getElementById("container");
let baseUrl = `https://hid-food-apii.onrender.com/product_data`;

let pagination = document.getElementById("pagination");
let hotelLS = JSON.parse(localStorage.getItem("hotelCard"))

window.addEventListener("load",fetchData(1))
async function fetchData(Page){
    try {
        let responce = await fetch(`${baseUrl}?_page=${Page}&_limit=10`)
        let total = responce.headers.get(`X-Total-Count`)
        pagination.innerHTML="";
        let page = Math.ceil(total/10);
        for(let i=1; i<=page;i++){
            pagination.append(creatBtn(i))
        }


        let data = await responce.json();
        displayHotel(data);
    } catch (error) {
        console.log(error)
    }
}

function creatBtn(id){
    let btn = document.createElement("button");
    btn.classList.add("pageBtn");
    btn.textContent = id;
    btn.addEventListener("click",()=>fetchData(id))
    return btn;
}
function displayHotel(data){
    mainSection.innerHTML ="";
    let cardlist = document.createElement("div")
        cardlist.classList.add("cardList");

        data.forEach(hotel=>{

            cardlist.append(displaycard(hotel));
        })
        mainSection.append(cardlist);
}

function displaycard(hotel){

    let card = document.createElement("div");
        card.classList.add("card");

        let imagediv = document.createElement("div");
        imagediv.classList.add("imagediv");

        let image = document.createElement("img");
        image.src = hotel.avatar;
        image.setAttribute("alt",hotel.name);

        imagediv.append(image);

        let cradbody = document.createElement("div");
        cradbody.classList.add("cardbody");

        let name = document.createElement("h2");
        name.textContent = hotel.name;

        let description = document.createElement("p");
        description.textContent  = hotel.details;

        let distance = document.createElement("p");
        distance.textContent = hotel.distance;

        let rateing = document.createElement("p");
        rateing.textContent = hotel.rateing;

        let review = document.createElement("h4");
        review.textContent= hotel.review;

        cradbody.append(name,description,distance)

        let cardbuy = document.createElement("div");
        cardbuy.classList.add("cardbuy");
        
        let price = document.createElement("p");
        price.textContent = hotel.price;

        let tax = document.createElement("p")
        tax.textContent = hotel.tax;

        let buy = document.createElement("button");
        buy.classList.add("buybtn");
        buy.textContent = "Book Now"
        buy.addEventListener("click",()=>{


        })
        cardbuy.append(price,tax,buy)

        

        card.append(imagediv,cradbody,cardbuy)
        return card;
}
   