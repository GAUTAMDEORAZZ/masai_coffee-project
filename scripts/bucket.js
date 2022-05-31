// On clicking remove button the item should be removed from DOM as well as localstorage.
console.log("I am bucket")

let data=JSON.parse(localStorage.getItem("coffee"))
console.log(data)

appendData(data)
let count=document.getElementById("total-div")

let h1=document.createElement("h1")
h1.innerText= `Total Item=${data.length}`;
count.append(h1)



function appendData(data){
    let bucket=document.getElementById("bucket")
    bucket.innerHTML=null;

    

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

         let remove=document.createElement("button")
         remove.innerText="remove"
         remove.setAttribute("id","remove_coffee")
         remove.style.backgroundColor="red"
         remove.style.color="white"
         remove.style.cursor="pointer"
         remove.addEventListener("click",function(){
             removeItem(elem,index)
         })

       let div=document.createElement("div")
        div.append(image,title,desc,price,remove)

        bucket.append(div)
    })

}

let total_amount=data.map(function(elem){
   return elem.price
})

console.log(total_amount)
let sum=total_amount.reduce(function(elem,acc){
    return elem+acc
})
// let sum=0;
// for(let i=0; i<total_amount.length;i++){
//     sum=sum+total_amount[i]
// }
sum=`Total Price=${sum}`
console.log(sum)
let total=document.getElementById("total_amount")
    total.innerHTML=null;
    total.append(sum)


   function removeItem(elem,index)
    {
        data.splice(index,1)
        console.log(data)
        localStorage.setItem("coffee",JSON.stringify(data))
        appendData(data)
        window.location.reload();
    }

    

