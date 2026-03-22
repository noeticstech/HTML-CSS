//what is asynchronous programming?
//Asynchronous programming is a programming paradigm that allows for non-blocking operations, enabling a program to perform multiple tasks concurrently without waiting for each task to complete before moving on to the next one. This is particularly useful in scenarios where certain operations, such as network requests or file I/O, may take a significant amount of time to complete. By using asynchronous programming techniques, developers can improve the responsiveness and efficiency of their applications, allowing them to handle multiple tasks simultaneously without freezing or becoming unresponsive.



//callback is used to run some task in parallel while it execute its task and once the task is completed it will call the callback function to execute the next task. This is a common pattern in asynchronous programming, especially in JavaScript, where callbacks are often used to handle events, manage asynchronous operations, and maintain the flow of execution without blocking the main thread.

//callback hell is a situation where you have multiple nested callbacks, making the code difficult to read and maintain. It often occurs when you have a series of asynchronous operations that depend on each other, leading to deeply nested structures that can be hard to follow and debug. This can make the code less readable and more prone to errors, as it becomes challenging to understand the flow of execution and manage error handling effectively. To mitigate callback hell, developers often use techniques such as Promises or async/await to improve the readability and maintainability of their asynchronous code.             

//1.....
// setTimeout(() => {
//     console.log("this is a delayed message");
// },4000);

//2......


const result = (a , b , callback) =>{
    const result = callback(a,b);
    console.log("the result is :", result);
}
const sum = (a,b) =>{
    return a + b;
}

const multiply = (a,b) =>{
    return a * b;
}
const divide = (a,b) =>{
    return a / b;
}

const subtract = (a,b) =>{
    return a - b;
}

function process(a , b){

    console.log("calculation sum...");
    setTimeout(() => {
        result(a , b , sum);

        console.log("calculation multiply...");
        setTimeout(() => {
            result(a , b , multiply);

            console.log("calculation divide...");
            setTimeout(() => {
                result(a , b , divide);

                console.log("calculation subtract...");
                setTimeout(() => {
                    result(a , b , subtract);
                }, 3000);

            }, 3000);

        }, 3000);

    }, 3000);

}
process(10,5);