

let cls=document.querySelector(".cls");
function dark(){
        cls.classList.add("Dark");
}

function light(){
        cls.classList.remove("Dark");
}


let btn=document.querySelector(".btn");
btn.addEventListener("click", ()=> console.log("hiiiii"))
//or btn.onclick=fun();

let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",()=>dark());


let btn2=document.querySelector(".btn2");
btn2.addEventListener("click",()=>light());

  //fetch('https://fakestoreapi.com/products')
  //.then(res => res.json())
  //.then(products => {
  //  console.log(products);
  //  const container = document.getElementById("product-container");
  //  products.forEach(element => {
  //    let card = document.createElement("div");
  //    card.innerHTML = `
  //      <h2>${element.title}</h2>
  //      <img src="${element.image}" alt="${element.title}" />
  //      <p>$${element.price}</p>
  //    `;
  //    container.appendChild(card); 
  //  });
  //});
//if without appending use +=
async function loadProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    console.log(products);

    const container = document.getElementById("product-container");
    products.forEach(element => {
      let card = document.createElement("div");
      card.innerHTML = `
        <h2>${element.title}</h2>
        <img src="${element.image}" alt="${element.title}" />
        <p>$${element.price}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

loadProducts();

//in react exios is used