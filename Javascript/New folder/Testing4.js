const asyncFunc = (num) => {
    return new Promise((res , rej) => {
        console.log("Thinking...");
        setTimeout(()=> {
            if (num > 10){
                res("You can go");
            }
            else{
                rej("You cannot go");
            }
        },3000)
    })
}

let p1 = asyncFunc(5);
p1.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});

