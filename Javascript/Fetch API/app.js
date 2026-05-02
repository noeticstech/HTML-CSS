const url = "https://catfact.ninja/fact";
// let promise = fetch(url);

// console.log(promise);


const getFacts = async () => {
  const response = await fetch(url);
  
  const data = await response.json();
  console.log(data);
};

getFacts();
