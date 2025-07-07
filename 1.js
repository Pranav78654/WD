// let arr = [1,2,3,4,5];

// function doublearr(arr){
//     let result = []
//     for(let i = 0 ;  i < arr.length ; i++){
//         result.push(arr[i]*2);
//     }  
//     return result;
// }


// let m = arr.map(num => num*2);
// let r = doublearr(arr);
// console.log(m);


// Array.prototype.doublearrvalue = function(){
// let result = []
//     for(let i = 0 ;  i < this.length ; i++){
//         result.push(this[i]*2);
//     }  
//     return result;
// }

// // let r = arr.doublearrvalue(arr);
// console.log(arr.doublearrvalue())

let cart = [
    { item: "shoes", amount: 500 },
    { item: "shirt", amount: 400 },
    { item: "wallets", amount: 100 }
];

function orderDetail(cart , callback) {
    let totalProducts = cart.length;
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
        totalAmount += cart[i].amount;  
    }
    totalAmount = totalAmount * 1000;
    console.log(`Total Products: ${totalProducts}`);
    console.log(`Total Amount: ${totalAmount}`);
    callback(totalProducts , totalAmount)
}

function orderSumaary(totalProducts , totalAmount , callback){
    // total price and total product
    // then generate order id
    const orderId = Math.floor(Math.random() * 1000000);
    console.log(`Order ID: ${orderId}`);
    console.log(`Total Products: ${totalProducts}`);
    console.log(`Total Ammount: ${totalAmount}`);
    callback(orderId ,totalAmount);
}

function paymentGetaway(orderId , totalAmount , callback){
    // order id , product detials and price .. Payment is succesful
    console.log(`Processing payment for Order ID: ${orderId}`);
    console.log(`Amount Paid: ${totalAmount}`);
    callback(orderId , cart);
}

function successfullOrder(orderId , cart){
    console.log(`Order ${orderId} is successful!`);
    console.log("Order Details:");
     cart.forEach(item => {
        console.log(`- ${item.item}: ₹${item.amount}`);
    });
}

orderDetail(cart , (totalProducts , totalAmount)=>{
    orderSumaary(totalProducts , totalAmount , (orderId , totalAmount)=>{
        paymentGetaway(orderId ,totalAmount , (orderId , cart) =>{
            successfullOrder(orderId , cart);
        } )
    })
})