function knowdata(num, again){
    console.log("I know the data is ", num);
    setTimeout(() => {
        if(again){
            again();
        }
    }, 3000);
}

knowdata(8, ()=>{
    knowdata(9 , ()=>{
        knowdata(10);
    });
})

/*
function knowdata(num, again){
    console.log("I know the data is ", num);
    
        if(again){
            setTimeout(() => {
                again();
            }, 3000);
        }
    
}

knowdata(8, ()=>{
    knowdata(9 , ()=>{
        knowdata(10);
    });
})
*/

let promise = new Promise((resolve, reject) =>{
    
})