// async await with fetch api


async function fetchdata(){
    try{
    const fetchdata  =await fetch("https://dummyjson.com/products");
    const data = await fetchdata.json();
    console.log(data);
    }
    catch(err){
        console.log(err.message)
    }
}

fetchdata();

