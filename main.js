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
                <div class="card-body" data-id=${post._id}>
                    <h2 class="card-subtitle mb-2 text-muted"> Pilot Certification: ${post.pilotCertification} </h2>
                    <h4 class="card-text"> Pilot Age: ${post.pilotAge}</h4>
                    <h4 class="card-text"> Pilot Credits: ${post.pilotCredits}</h4>
                    <h4 class="card-text"> Pilot Location: ${post.pilotLocation}</h4>
                    <h4 class="card-text"> Ship Fuel Level: ${post.shipFuelLevel}</h4>
                    <h4 class="card-text"> Ship Fuel Capacity: ${post.shipFuelCapacity}</h4>
                    <h4 class="card-text"> Ship Weight Capacity: ${post.shipWeightCapacity}</h4>
                    <a href="#" class="card-link id="edit-post">Edit</a>
                    <a href="#" class="card-link id="delete-post">Delete</a>
                </div>
                </div>
                </div>
        `;
    });
    postsList.innerHTML = output;
    
}

fetch(urlFleet)
    .then(res => res.json())
    .then(data => renderFleets(data))

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

//postsList.addEventListener('click', (e) => {
//  e.preventDefault();
//  let delButtonisPressed = e.target.id == 'delete-post';
//  let editButtonisPressed = e.target.id == 'edit-post';
//
//  if(delButtonisPressed) {
//      fetch(`${urlFleet}/${id}`)
//      .then(res => res.json())
//      .then(() => location.reload())
//  }
//})