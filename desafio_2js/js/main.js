//=======barbarito======

import { getAllPosts } from "./module.js";
getAllPosts();

const cardContainer = document.getElementById("card-container");
const ccsPosts = document.getElementById("ccsPosts");
 const javascriptPosts = document.getElementById("javascriptPosts");
 const reactPosts = document.getElementById("reactPosts");
 let hashtagList  = document.getElementById("hashtagList");
const cardList = document.getElementsByClassName("cardList");


const printAllPost = async () => {

  let posts = await getAllPosts();
  posts.forEach((post) => {

  
 const divContainer = document.createElement("div");
 divContainer.classList = "card mb-3 p-4";
    const imageContainer = document.createElement("img");
    imageContainer.setAttribute("src", post.picture);
    imageContainer.style.width=("10%") ;
    imageContainer.style.borderRadius=("50%") ;
    const h5 = document.createElement("h5");
    h5.classList.add("card-text")
    h5.textContent = post.title;
    divContainer.append(imageContainer,h5);
    cardContainer.append(divContainer);
    
  });


};
printAllPost();


const printByTags = async () => {
    const posts = await getAllPosts();
    
    // Ensure lists are defined in your HTML
    const cssList = document.getElementById('cssList');
    const javascriptList = document.getElementById('javascriptList');
    const reactList = document.getElementById('reactList');
    const hashtagList = document.getElementById('hashtagList');

    // Clear previous list items
    cssList.innerHTML = '';
    javascriptList.innerHTML = '';
    reactList.innerHTML = '';
    hashtagList.innerHTML = '';

    posts.forEach((post) => {
        let li = document.createElement("li");
        li.textContent = post.title;

        if (post.tags.includes('css')) {
            cssList.appendChild(li);
        } else if (post.tags.includes('javascript')) {
            javascriptList.appendChild(li);
        } else if (post.tags.includes('react')) {
            reactList.appendChild(li);
        } else {
            // If no specific tag is matched, add to hashtagList
            hashtagList.appendChild(li);
        }
    });

    return 'Posts have been categorized and displayed by tags';
};

// Call the function to execute
printByTags();

// Función para crear elementos DOM y agregarlos a las listas correspondientes
const renderPosts = async (postsByHashtag) => {
  // Elementos donde se agregarán las listas de posts
  const ccsList = document.getElementById("ccsPosts").querySelector("ul");
  let javascriptList = document
    .getElementById("javascriptPosts")
    .querySelector("ul");
  let reactList = document.getElementById("reactPosts").querySelector("ul");
};

// Filtrar y agrupar los posts por los primeros 5 post con base en su hashtag

const printAllPosts = async (hastag) => {
  let posts = await getAllPosts();
  let filterByTag = posts
    .map((post) => post.tags)
    
  return filterByTag;
};
printAllPosts();



// const renderPosts = (posts) => {
//   const postsContainer = document.getElementById("posts");
//   postsContainer.innerHTML = "";
//   for (const key in posts) {
//     if (posts.hasOwnProperty(key)) {
//       const post = posts[key];
//       const postElement = document.createElement("div");

//       postElement.className = "post";
//       postElement.innerHTML = `
//                 <h2>${post.title}</h2>
//                 <img src="${post.picture}" alt="${post.name}">
//                 <p>${post.abstract}</p>
//                 <p>${post.content}</p>
//                 <p>Tags: ${post.tag || post.tags}</p>
//                 <p>Date: ${post.date}</p>
//                 <p>Reacciones: ${post.reacciones}</p>
//                 <p>Importance: ${post.importance}</p>
//             `;
//       postsContainer.appendChild(postElement);
//     }
//   }
// };
// const filterPosts = (posts) => {
//   const query = document.getElementById("search").value.toLowerCase();
//   const filteredPosts = {};
//   for (const key in posts) {
//     if (posts.hasOwnProperty(key)) {
//       const post = posts[key];
//       if (post.title.toLowerCase().includes(query)) {
//         filteredPosts[key] = post;
//       }
//     }
//   }
//   renderPosts(filteredPosts);
// };
// const getAllPostsAndRender = async () => {
//   const posts = await getAllPosts();
//   renderPosts(posts);
//   document
//     .getElementById("search")
//     .addEventListener("input", () => filterPosts(posts));
// };
// getAllPostsAndRender();

/**
 ==========codigo de jarol Gabriel==========
 */

// const buttomImport = document.getElementById("importante");
// const buttomUltimo = document.getElementById("el-ultimo");
// const buttomTop = document.getElementById("top");

// import { crearCard } from "./card.js";

// const getAllPosts2 = async () => {
//   const response = await fetch(`${BASE_URL}/.json`);
//   const data = await response.json();
//   //mofigicaciones
//   const postsArray = Object.values(data);
//   const updatedDat = addDateAndImportance(postsArray);
//   // console.log(data);
//   return updatedDat;
// };

// function formatDate(date) {
//   const options = { day: "numeric", month: "long", year: "numeric" };
//   return new Intl.DateTimeFormat("es-ES", options).format(date);
// }

// function addDateAndImportance(data) {
//   return data.map((item, index) => {
//     const baseDate = new Date(2023, 0, 1);
//     const date = new Date(baseDate);
//     date.setDate(date.getDate() + index);
//     const importance = Math.floor(Math.random() * 10) + 1;
//     return {
//       ...item,
//       date: formatDate(date),
//       importance: importance,
//     };
//   });
// }

// // crear funcion para ordenar datos por importancia y por fecha y pot top

// function sortByImportance(data) {
//   return data.sort((a, b) => b.importance - a.importance);
// }

// function sortByDate(data) {
//   return data.sort((a, b) => new Date(b.date) - new Date(a.date));
// }

// function sortByTop(data) {
//   return data.sort((a, b) => b.reacciones - a.reacciones);
// }

// function renderCards(posts) {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar

//   posts.forEach((post) => {
//     crearCard(post); // Llama a crearCard para cada post
//   });
// }

// // funciones de los botenes Import top y last
// // Event listener para el botón de "Importante" o "Pertinente"
// buttomImport.addEventListener("click", async () => {
//   const posts = await getAllPosts2();
//   const sortedPosts = sortByImportance([...posts]);
//   renderCards(sortedPosts);
//   console.log("Post ordenado por importancia:", sortedPosts);
// });

// // Event listener para el botón de "El último"

// buttomUltimo.addEventListener("click", async () => {
//   const posts = await getAllPosts2();
//   const sortedPosts = sortByDate([...posts]);
//   renderCards(sortedPosts);
//   console.log("ordenado por el mas ultimo", sortedPosts);
// });

// // Event listener para el botón de "Top"

// buttomTop.addEventListener("click", async () => {
//   const posts = await getAllPosts2();
//   const sortedPosts = sortByTop([...posts]);
//   renderCards(sortedPosts);
//   console.log("ordenado por el mas top", sortedPosts);
// });

// // exporta funciones
// export { getAllPosts2, buttomImport, buttomUltimo, buttomTop, renderCards };
