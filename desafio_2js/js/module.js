/* dont' touch   */
const BASE_URL = "https://proyectokode-default-rtdb.firebaseio.com/posts";

// Obtener datos de firebase
const getAllPosts = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  console.log(data);
  let dataKeys = Object.keys(data);
  let postsArray = dataKeys.map((key) => ({ ...data[key], key }));
  return postsArray;
};

const renderPosts = (posts) => {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
            const post = posts[key];
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <img src="${post.picture}" alt="${post.name}">
                <p>${post.abstract}</p>
                <p>${post.content}</p>
                <p>Tags: ${post.tag || post.tags}</p>
                <p>Date: ${post.date}</p>
                <p>Reacciones: ${post.reacciones}</p>
                <p>Importance: ${post.importance}</p>
            `;
            postsContainer.appendChild(postElement);
        }
    }
};
const filterPosts = (posts) => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredPosts = {};
    for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
            const post = posts[key];
            if (post.title.toLowerCase().includes(query)) {
                filteredPosts[key] = post;
            }
        }
    }
    renderPosts(filteredPosts);
};
const getAllPostsAndRender = async () => {
    const posts = await getAllPosts();
    renderPosts(posts);
    document.getElementById('search').addEventListener('input', () => filterPosts(posts));
};
getAllPostsAndRender();


/* dont' touch */

export { getAllPosts };
