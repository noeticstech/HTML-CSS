const url = "https://official-joke-api.appspot.com/random_joke";
const random = fetch(url);

async function getRandom(){
    const random = await fetch(url);
    const things = await random.json();

    //console.log(things)
    //const data = await random.json();
    console.log(things.setup);
    console.log(things.punchline);
}

getRandom();
//Now using promise 
