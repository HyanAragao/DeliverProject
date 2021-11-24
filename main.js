const postsList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const certificationValue = document.getElementById('certification-value');
const ageValue = document.getElementById('age-value');
const creditsValue = document.getElementById('credits-value');
const locationValue = document.getElementById('location-value');
const fuellevelValue = document.getElementById('fuellevel-value');
const fuelcapacityValue = document.getElementById('fuelcapacity-value');
const weightcapacityValue = document.getElementById('weightcapacity-value');

let urlFleet = 'http://localhost:3000/fleet';
let output = ``;

const renderFleets = (fleets) => {
    fleets.forEach(post => {
        output += `
        <div class="posts-list row">
                <div class="card mt-4 col-md-6 bg-ligt">
                <div class="card-body">
                    <h4 class="card-subtitle mb-2 text-muted">${post.pilotCertification}</h4>
                    <p class="card-text">${post.pilotAge}</p>
                    <p class="card-text">${post.pilotCredits}</p>
                    <p class="card-text">${post.pilotLocation}</p>
                    <h5 class="card-subtitle mb-2 text-muted">${post.shipFuelLevel}</h5>
                    <p class="card-text">${post.shipFuelCapacity}</p>
                    <p class="card-text">${post.shipWeightCapacity}</p>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                </div>
                </div>
                </div>
        `;
    });
    postsList.innerHTML = output;
    
}

// Get - Read the posts
// Method: GET
fetch(urlFleet)
    .then(res => res.json())
    .then(data => renderFleets(data))

// Create - Insert new post
// Method: POST
addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(urlFleet, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pilotCertification: certificationValue.value,
            pilotAge:ageValue.value,
            pilotCredits: creditsValue.value,
            pilotLocation:locationValue.value,
            shipFuelLevel:fuellevelValue.value,
            shipFuelCapacity: fuelcapacityValue.value,
            shipWeightCapacity:weightcapacityValue.value

        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderFleets(dataArr);
        })
    location.reload();
});