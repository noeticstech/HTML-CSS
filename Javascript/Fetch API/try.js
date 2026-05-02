const url = "https://jsonplaceholder.typicode.com/posts/1";
const test = async () => {
    const response = await fetch(url);
    const data = await response.json();
    await console.log(data.userId);
    await console.log(data.id);
    await console.log(data.title);


}

test();