let userData = [
    {
        name : " Priyanshu",
        age : 21
    },
    {
        name: "Pranav",
        age : 20,
    },
{
    name : "Chaat Bhandar",
    age : 23
}
]

let output = userData.filter((num)=>num.age > 22).map((word)=>word.name);
console.log(output)