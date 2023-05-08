

let mainSection=document.getElementById("container")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let bookURL="https://hid-food-apii.onrender.com/product_data"
let page = 1
let sortLow= document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high");



sortZtoABtn.addEventListener("click",function(e){
  e.preventDefault()
  let sH = [...da]
 sH = sH.sort(function(a,b){
      return b.price-a.price
  })
  console.log(sH)
  display(sH)
 })




let namee = document.getElementById("book-name")
let empNameInput = document.getElementById("book-image");
let empImgInput = document.getElementById("book-category");
let empDeptInput = document.getElementById("book-author");
let empSalaryInput = document.getElementById("book-price");
let empCreateBtn = document.getElementById("add-book");
let da;

empCreateBtn.addEventListener("click",function(e){
  e.preventDefault()
  // fetch(`https://hid-food-apii.onrender.com/product_data`,{
  //   method:'POST',
  //   body:JSON.stringify({
  //     "name":namee.value,
  //     "avatar":empNameInput.value,
  //     "price":+empSalaryInput.value,
  //     "image":empImgInput.value,
  //     "review":empDeptInput.value
  //   }),
  //   headers: {
  //     "Content-type":"application/json"
  //   }
    
  // }).then((res)=>res.json())
  // .then(function(data){
  //   fetchy()
  //   console.log(data)
  // })
  let ob={
    "name":namee.value,
    "avatar":empNameInput.value,
    "price":+empSalaryInput.value,
    "image":empImgInput.value,
    "review":empDeptInput.value
  }
  da.push(ob)
  display(da)
})




sortLow.addEventListener("click",function(){
  let sH = [...da]
 sH = sH.sort(function(a,b){
      return a.price-b.price
  })
  console.log(sH)
  display(sH)
})
fetchy(page)
function fetchy(p){

fetch(`https://hid-food-apii.onrender.com/product_data?_page=${p}&_limit=5`).then((res)=>res.json())
.then(function(data){
  da = [...data]
  console.log(data)
  display(data)
})
}
let prev = document.getElementById("prev")
let next = document.getElementById("next")
 
one.addEventListener("click",function(){
  fetchy(1)
})
two.addEventListener("click",function(){
  fetchy(2)
})
three.addEventListener("click",function(){
  fetchy(3)
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
  data.forEach(function(a,i){
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
        anc.style.display="block"
        anc.setAttribute("data-id",a.id)


        let but  = document.createElement('button')
        but.innerText = "Delete"
        but.className = "btn btn-primary"
        but.setAttribute("data-id",a.id)

        cardBody.append(h4,aut,car,pri,anc,but)

        mainCard.append(divImg,cardBody)
       
        cardList.append(mainCard)
        anc.addEventListener("click",function(e){
          e.preventDefault()
          let div = document.createElement("div")
          div.id="id=edit_div"

          let input = document.createElement("input")
          input.id = "edit_title"
          input.className="form-control"
          input.placeholder= "title"
          
          let des = document.createElement("input")
          des.id = "edit_description"
          des.placeholder= "description"
          des.className="form-control form-control-lg"

          let btnEdit = document.createElement("button")
          btnEdit.innerText = "Submit"
          btnEdit.id="edit_submit_btn"
          btnEdit.className="btn btn-info"
          div.append(input,des,btnEdit)
          cardBody.append(div)
          mainCard.append(cardBody)

          btnEdit.addEventListener("click",function(e){
            e.preventDefault()
              da[i].name = input.value
          da[i].description = des.value
          localStorage.setItem("notes",JSON.stringify(da))
          display(da)
          })
          

      })
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
        

        })
        

  })

}