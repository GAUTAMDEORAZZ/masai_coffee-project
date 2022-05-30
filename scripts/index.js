// Add the coffee to local storage with key "coffee"

console.log("i am coffee")

async function getData(){
    let url=` https://masai-mock-api.herokuapp.com/coffee/menu`
   let response= await fetch(url)
   let coffee=await response.json();
   console.log(coffee.menu.data)
    append(coffee.menu.data)
}
getData();

function append(data){
    let menu=document.getElementById("menu")
   

    data.forEach(function(elem,index){
        let image=document.createElement("img")
        image.src=elem.image;

        let title=document.createElement("h3")
        title.innerText=elem.title

        let desc=document.createElement("p")
        desc.innerText=elem.description
        desc.style.color="gray"

        let price=document.createElement("p")
        price.innerText= "price:"+elem.price;

        let add=document.createElement("button")
        add.innerText="AddToBukket"
        add.setAttribute("id","add_to_bucket")
        add.style.backgroundColor="green"
        add.style.cursor="pointer"
        add.addEventListener("click",function(){
            addItem(elem,index)
        })
      
        let div=document.createElement("div")
        div.append(image,title,desc,price,add)
        menu.append(div)
     

       
    })
}
    let arrData=JSON.parse(localStorage.getItem("coffee")) || []

     function  addItem(elem,index){
    arrData.push(elem)
    console.log(arrData)
    localStorage.setItem("coffee",JSON.stringify(arrData))

}