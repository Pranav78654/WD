// call functions
function greeting(welcomemessage , goodbyemessage){
    return (welcomemessage + " " + this.studentName + " is a student of class " + this.studentClass + " " + goodbyemessage);
}

const student1 = {
    studentName :"Paras",
    studentClass:"g4"
}

const student2 = {
    studentName : "Vivek",
    studentClass:"g5"
}
// bind
let a = greeting.bind(student1 , "a" , "b");
let b = greeting.bind(student2 , "c" , "d");
console.log(a());
console.log(b());