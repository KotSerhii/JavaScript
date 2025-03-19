// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

// let div = document.getElementById('carts');
// fetch('https://dummyjson.com/carts?limit=50')
//   .then(value => value.json())
//   .then(cartsObject => {
//     let {carts} = cartsObject;
//     console.log(carts);
//     for (let cart of carts) {
//       const cartWrap =document.createElement('div');
//       cartWrap.classList.add('cartWrap');
//       const cartInfo = document.createElement('div');
//       cartInfo.innerText = `
//        id - ${cart.id}
//        userId - ${cart.userId}
//        total - ${cart.total}
//        totalProducts - ${cart.totalProducts}
//        totalQuantity - ${cart.totalQuantity}
//        discountedTotal - ${cart.discountedTotal}
// `;
//       const productsInfo = document.createElement('ol');
//       for (const item of cart.products) {
//
//         const elementOfProduct = document.createElement('li');
//         const imageElement = document.createElement('img');
//         imageElement.src = item.thumbnail;
//         const paragraphElement = document.createElement('p');
//         paragraphElement.innerText = `
//       id - ${item.id},
//       title - ${item.title},
//       quantity - ${item.quantity},
//       price - ${item.price},
//       total - ${item.total},
//       discountPercentage - ${item.discountPercentage},
//       discountedTotal - ${item.discountedTotal}
//      `;
//         elementOfProduct.append(imageElement,paragraphElement);
//         productsInfo.append(elementOfProduct);
//       }
//       cartWrap.append(cartInfo, productsInfo);
//       div.appendChild(cartWrap);
//
//     }
//   })


//


// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

let url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const recipesDiv = document.createElement('div');
document.body.appendChild(recipesDiv);
recipesDiv.classList.add('wrap');

fetch(url)
  .then(value => value.json())
  .then(recipesObject => {
    let {recipes} = recipesObject;
    console.log(recipes);

    for (const recipe of recipes) {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');
      for (const key in recipe) {
        if (Array.isArray(recipe[key])) {
          const keyDiv = document.createElement('div');
          const paragraphForKey = document.createElement('p');
          paragraphForKey.innerText=`${key}:`;
          const ol = document.createElement('ol');
          for (const item of recipe[key]) {
            const li = document.createElement('li');
            li.innerText = item;
            ol.appendChild(li);
            keyDiv.append(paragraphForKey,ol);
            recipeDiv.appendChild(keyDiv);
          }

        } else {
          if(key!=='image') {
            const keyDiv = document.createElement('div');
            keyDiv.innerText = `${key}: ${recipe[key]}`;
            recipeDiv.append(keyDiv);
          }

        }
      }

      recipesDiv.appendChild(recipeDiv);
      const image = document.createElement('img');
      image.src=recipe.image;
      recipeDiv.append(image);
    }

  })
