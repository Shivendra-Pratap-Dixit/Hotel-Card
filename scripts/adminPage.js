

let mainSection=document.getElementById("container")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let bookURL="https://hid-food-apii.onrender.com/product_data"
let page = 1
fetchy(page)
function fetchy(p){

fetch(`https://hid-food-apii.onrender.com/product_data?_page=${p}&_limit=5`).then((res)=>res.json())
.then(function(data){
  console.log(data)
  display(data)
})
}
let prev = document.getElementById("prev")
let next = document.getElementById("next")
 
one.addEventListener("click",function(){
  fetch(1)
})
two.addEventListener("click",function(){
  fetch(2)
})
three.addEventListener("click",function(){
  fetch(3)
})
prev.addEventListener("click",function(){
  if(page!=0){
    page--
  }else{
    page=6
  }
  fetchy(page)
})
next.addEventListener("click",function(){
  if(page!=6){
    page++
  }else{
    page=1
  }
  fetchy(page)
})


function display(data){
  mainSection.innerHTML=""
  let cardList = document.createElement("div")
  cardList.className="card-list"
  mainSection.append(cardList)
  data.forEach(function(a){
    let mainCard = document.createElement('div')
    mainCard.className="card"

    let divImg = document.createElement('div')
    divImg.className="card__img"

        let img = document.createElement('img')
        // img.className="card-img-top"
        img.src=a.avatar
        img.alt = "book"

        divImg.append(img)

    let cardBody = document.createElement('div')
    cardBody.className = "card-body"

        let h4 = document.createElement('h5')
        h4.innerText=a.name
        h4.className = "card-title"

        let aut = document.createElement('p')
        aut.innerText = a.details
        aut.className = "card-text"

        let car = document.createElement('p')
        car.innerText = a.review
        car.className = "card-category"

        let pri = document.createElement('p')
        pri.innerText = `Rs.${a.price}`
        pri.className = "card-price"

        let anc = document.createElement('a')
        anc.className = ""
        anc.innerText = "Edit"
        anc.href = "#"
        anc.setAttribute("data-id",a.id)


        let but  = document.createElement('button')
        but.innerText = "Delete"
        but.className = "btn btn-primary"
        but.setAttribute("data-id",a.id)

        cardBody.append(h4,aut,car,pri,but)

        mainCard.append(divImg,cardBody)
       
        cardList.append(mainCard)

        but.addEventListener("click",function(){
          fetch(`${bookURL}/${a.id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
        }).then((res)=>res.json())
        .then((data)=>{
          fetchy()
        })
        // 
        anc.addEventListener("click",function(e){
          e.preventDefault()
        })

        })
        

  })

}