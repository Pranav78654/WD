function something(msg , delay){
    return new Promise((res , rej) =>{
        setTimeout(() => {
            console.log("Promise Resolved: ", msg )
            // res("Promise Resolved: ", msg );
            rej("Promise Rejected: " , msg);
        }, delay);
    })
}

const p1 = something("P1" , 2000);

p1.then((res)=>{
    console.log(res);
})
.then(()=>{
    return something("P2" , 2000);
})
.then(()=>{
    return something("P3" , 2000)
})
.then(()=>{
    return something("P4" , 2000)
})
