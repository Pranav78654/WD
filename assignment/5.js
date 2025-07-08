// async await with fetch api


async function fetchdata() {
  try {
    const fetchdata = await fetch("https://dummyjson.com/products");
    const data = await fetchdata.json();
    const simpleproducts = data.products.map(product => ({
      title: product.title,
      desc: product.description,
      price: product.price
    }));

    const show = document.getElementById("products");
    simpleproducts.forEach(product => {
      show.insertAdjacentHTML('beforeend', `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h2>${product.title}</h2>
          <p>${product.desc}</p>
          <strong>$${product.price}</strong>
        </div>
      `);
    });
  }
  catch (err) {
    console.log(err.message)
  }
}

fetchdata();

