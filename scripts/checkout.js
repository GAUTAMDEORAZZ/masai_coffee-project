console.log("i am checkout")

function checkOut(){
    return true
}
let order_placed=new Promise(function (resolve,reject){
let order=checkOut()

setTimeout(function(){

    if(order==true){
        resolve("your Order is resolve ")
    }

   
},0000)

})

order_placed.then(function(value){
    alert("your order is accepted")
    alert("your order is being prepared ")
    alert("Your order is being packed")
    alert("Your order is out for delivery")
    alert("Order delivered")
})

