const postsList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

const url = 'http://localhost:5000/api/posts';
let output = ``;

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
        <div class="posts-list row">
        <div class="card mt-4 col-md-6 bg-ligt">
        <div class="card-body">
            <h5 class="card-title">%{post.tittle}</h5>
            <h6 class="card-subtitle mb-2 text-muted">%{post.date}</h6>
            <p class="card-text">%{post.body}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
        </div>
        `;
    });
    postsList.innerHTML = output;
    
}

// Get - Read the posts
// Method: GET
fetch(url)
    .then(res => res.json())
    .then(data => renderPosts(data))

// Create - Insert new post
// Method: POST
addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tittle: tittleValue.value,
            body:bodyValue.value
        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr);
        })
});
