fetch("https://fakestoreapi.com/products")
	.then((data) => {
		// console.log(data);
		return data.json();
	})
	.then((completedata) => {
		// console.log(completedata[2].title);
		let data1 = "";
		completedata.map((product) => {
			data1 += `<div class="card">
      <h1 class="title">${product.title}</h1>
      <img
        src=${product.image}
        alt="image"
        class="images"
      />
      <p>${product.description}</p>
      <p class="category">${product.category}</p>
      <p class="price">${product.price}</p>
    </div>`;
		});
		document.getElementById("cards").innerHTML = data1;
	})
	.catch((error) => {
		console.log("Error:", error);
	});
