const url = "https://api.thecatapi.com/v1/images/search";

function cats(){
    return fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data[0].url);
        })
        .catch((error)=>{
            console.log("error : " + error);
        });
}

cats();