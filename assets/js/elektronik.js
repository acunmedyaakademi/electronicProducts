let electronicProducts = [];
let toplam = 0;

if (localStorage.electronicProducts) {
  electronicProducts = JSON.parse(localStorage.electronicProducts);
  renderElectronicProducts();
  addData.disabled = true;
} else {
  addData.disabled = false;
}

if (localStorage.basket) {
  toplam = localStorage.basket;
  renderElectronicProducts();
}

if (localStorage.id) {
  id = Number(localStorage.id);
}

function generateId() {
  let id = electronicProducts.length;
  id++;
  localStorage.id = id;
  return id;
}

addData.addEventListener("click", function () {
  electronicProducts = [
    {
      id: 1,
      name: "iPhone 14",
      stock: 25,
      origin: "USA",
      price: "$999",
      category: "Smartphone",
      icon: "📱",
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      stock: 30,
      origin: "South Korea",
      price: "$899",
      category: "Smartphone",
      icon: "📱",
    },
    {
      id: 3,
      name: "MacBook Pro",
      stock: 15,
      origin: "USA",
      price: "$1999",
      category: "Laptop",
      icon: "💻",
    },
    {
      id: 4,
      name: "Dell XPS 13",
      stock: 20,
      origin: "USA",
      price: "$1299",
      category: "Laptop",
      icon: "💻",
    },
    {
      id: 5,
      name: "Sony WH-1000XM4",
      stock: 40,
      origin: "Japan",
      price: "$349",
      category: "Headphones",
      icon: "🎧",
    },
    {
      id: 6,
      name: "Apple Watch Series 7",
      stock: 35,
      origin: "USA",
      price: "$399",
      category: "Smartwatch",
      icon: "⌚",
    },
    {
      id: 7,
      name: "iPad Pro",
      stock: 25,
      origin: "USA",
      price: "$1099",
      category: "Tablet",
      icon: "📱",
    },
    {
      id: 8,
      name: "Amazon Echo Dot",
      stock: 50,
      origin: "USA",
      price: "$49",
      category: "Smart Speaker",
      icon: "🔊",
    },
    {
      id: 9,
      name: "Google Nest Hub",
      stock: 40,
      origin: "USA",
      price: "$89",
      category: "Smart Display",
      icon: "🖥️",
    },
    {
      id: 10,
      name: "PlayStation 5",
      stock: 10,
      origin: "Japan",
      price: "$499",
      category: "Gaming Console",
      icon: "🎮",
    },
    {
      id: 11,
      name: "Xbox Series X",
      stock: 12,
      origin: "USA",
      price: "$499",
      category: "Gaming Console",
      icon: "🎮",
    },
    {
      id: 12,
      name: "Nikon D850",
      stock: 8,
      origin: "Japan",
      price: "$2999",
      category: "Camera",
      icon: "📷",
    },
    {
      id: 13,
      name: "Canon EOS R5",
      stock: 7,
      origin: "Japan",
      price: "$3899",
      category: "Camera",
      icon: "📷",
    },
    {
      id: 14,
      name: "LG OLED TV",
      stock: 18,
      origin: "South Korea",
      price: "$1299",
      category: "Television",
      icon: "📺",
    },
    {
      id: 15,
      name: "Samsung QLED TV",
      stock: 20,
      origin: "South Korea",
      price: "$1499",
      category: "Television",
      icon: "📺",
    },
    {
      id: 16,
      name: "Apple AirPods Pro",
      stock: 50,
      origin: "USA",
      price: "$249",
      category: "Earbuds",
      icon: "🎧",
    },
    {
      id: 17,
      name: "Bose QuietComfort Earbuds",
      stock: 45,
      origin: "USA",
      price: "$279",
      category: "Earbuds",
      icon: "🎧",
    },
    {
      id: 18,
      name: "Fitbit Charge 5",
      stock: 30,
      origin: "USA",
      price: "$149",
      category: "Fitness Tracker",
      icon: "📟",
    },
    {
      id: 19,
      name: "GoPro Hero 9",
      stock: 15,
      origin: "USA",
      price: "$399",
      category: "Action Camera",
      icon: "📹",
    },
    {
      id: 20,
      name: "DJI Mavic Air 2",
      stock: 10,
      origin: "China",
      price: "$799",
      category: "Drone",
      icon: "🚁",
    },
  ];

  save();
  renderElectronicProducts();
  addData.disabled = true;
});

function handleElectronicForm() {
  let formData = new FormData(addProductForm);
  let formObj = Object.fromEntries(formData);
  addProductForm.reset();

  if (formObj.id !== "") {
    let electonic = electronicProducts.find((x) => x.id === Number(formObj.id));
    electonic.name = formObj.name;
    electonic.stock = Number(formObj.stock);
    electonic.origin = formObj.origin;
    electronic.price = formObj.price;
    electonic.category = formObj.category;
    electonic.icon = formObj.icon;
  } else {
    formObj.id = generateId();
    electronicProducts.push(formObj);
  }
  save();
  renderElectronicProducts();
}

addProductForm.addEventListener("submit", handleElectronicForm);

function save() {
  localStorage.electronicProducts = JSON.stringify(electronicProducts);
  localStorage.basket = toplam;
}

addCountryBtn.addEventListener("click", () => {
  modal.classList.remove("editModal");
  document.querySelector('input[name = "id"]').value = "";
  modal.showModal();
});

function createProductHtml(product) {
  return `
    <div class="movie">

          <tr>
          <th>Ürün İsmi</th>
          <th>Üretim Yeri</th>        
          <th>Fiyat</th>
          <th>Kategori</th>
          <th>Görünüm</th>
          <th>Stok</th>
          <th colspan="3">AKSİYON</th>
        </tr>
        
             <tr>
        <td>${product.name}</td>
        <td>${product.origin}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.icon}</td>
        <td>${product.stock}</td>
        <td> 
            <a class="movieEditBtn" href="#" data-productid="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </a>           
          </td>
        <td><a class="movieDeleteBtn" href="#" data-productid="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </a></td>
            <td><a class="movieBasketBtn" href="#" data-productid="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058c14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701c14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24M312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24"/></svg>
            </a></td>
        </tr>

        </div>
    `;
}

function handleDeleteBtn(e) {
  e.preventDefault();

  if (!confirm("Emin Misin ?")) {
    return;
  }

  electronicProducts = electronicProducts.filter(
    (x) => x.id !== Number(this.dataset.productid)
  );

  renderElectronicProducts();
  save();
}

function handleEditBtn(e) {
  e.preventDefault();
  modal.classList.add("editModal");

  let productId = Number(this.dataset.productid);
  let product = electronicProducts.find((x) => x.id === productId);

  document.querySelector('input[name = "id"]').value = product.id;
  document.querySelector('input[name = "name"]').value = product.name;
  document.querySelector('input[name = "origin"]').value = product.origin;
  document.querySelector('input[name = "stock"]').value = product.stock;
  document.querySelector('input[name = "price"]').value = product.price;
  document.querySelector('input[name = "category"]').value = product.category;
  document.querySelector('input[name = "icon"]').value = product.icon;
  modal.showModal();
  renderElectronicProducts();
  save();
}

function basketHtml() {
  let productId = Number(this.dataset.productid);
  let product = electronicProducts.find((x) => x.id === productId);

  let price = (product.price).slice(1);

  toplam += Number(price);
  product.stock--;

  renderElectronicProducts();
  save();
}

function renderElectronicProducts() {
  basket.innerHTML = `
<p>${toplam}$</p>
`;

  electronic.innerHTML = electronicProducts
    .map((x) => createProductHtml(x))
    .join("");

  document
    .querySelectorAll(".movieDeleteBtn")
    .forEach((x) => x.addEventListener("click", handleDeleteBtn));

  document
    .querySelectorAll(".movieEditBtn")
    .forEach((x) => x.addEventListener("click", handleEditBtn));

  document
    .querySelectorAll(".movieBasketBtn")
    .forEach((x) => x.addEventListener("click", basketHtml));
}
