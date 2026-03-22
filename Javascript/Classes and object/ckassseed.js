const student = {
    fullname: "vaibhav",
    age: 20,
    marks:90,
    printmarks: function(){
        console.log("marks = ", this.marks);
    }
}
let a = [1,2,3,4,56];
student.printmarks();
console.log(typeof a);