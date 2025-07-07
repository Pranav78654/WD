// promises
// const apromise =  new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("Done");
//     }, 2000);
// })

// apromise.then((res)=>{
//     console.log(res);
//     console.log("Promise completed");
// })
// .catch((err)=>{
//     console.log("Error Found:" , err)
// })

const p1 =  new Promise((resolve , reject)=>{
    setTimeout(() => {
        // resolve("Done 1");
        reject("Err 1")
    }, 1000);
})

const p2 =  new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Done 2");
        // reject("Err 2")
    }, 2000);
})

const p3 =  new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Done 3");
        // reject("Err 3")
    }, 3000);
})

const p4 =  new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Done 4");
        // reject("Err 4");
    }, 4000);
})

// Promise.all([p1,p2,p3,p4]).then((res)=>{console.log(res)}).catch((err)=>{console.log("error")})
// je sare chln ge tan then chlu nhi catch

// Promise.allSettled([p1,p2,p3,p4]).then((res)=>{console.log(res)}).catch((err)=>{console.log("error")})
// return their statues and value by each of them

// Promise.race([p1,p2,p3,p4]).then((res)=>{console.log(res)}).catch((err)=>{console.log("error")});
// jeda phela chlpya chlpya pave error hove ya fullfill

Promise.any([p1,p2,p3,p4]).then((res)=>{console.log(res)}).catch((err)=>{console.log("error")});

// jeda sbton phela promise fullfilled hogya othe tk chlega 
