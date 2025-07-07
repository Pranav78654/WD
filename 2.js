Array.prototype.filterarr = function(logic){
    let output = [];
    for(let i = 0 ; i < this.length ; i++){
        if(logic(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

arr = ["sadasdasd" , "asda"]
let output = arr.filterarr((word)=>word.length>6);
console.log(output);


Array.prototype.reducearr = function(callback , initialvalue){
    let acc = initialvalue;
    
    for(let i = 0 ; i < this.length ; i++){
        acc = callback(acc , this[i]);
    }
    return acc;
}
let sample = [1,2,3,4];
let result = sample.reducearr((acc , curr)=>acc + curr, 10);
console.log(result);