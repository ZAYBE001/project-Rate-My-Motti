let allImaages = document.getElementById('AllImages');



function displayImage (){
    fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(data => {
       console.log(data)
        
        console.log(allImaages)
        data.forEach(img => {
            let image = document.createElement('img')
            image.src = img.url

      
          image.alt = img.title
            allImaages.appendChild(image)
            image.addEventListener('click', () => {
                
        });
    
    });})
}

displayImage();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const mottoList = document.getElementById("motto-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const carModel = document.getElementById("carmodeles").value;
       const handling = document.querySelector('input[name="rating"]:checked')?.value || "Not rated";
        const power = document.getElementById("power").value;
        const fuelEfficiency = document.getElementById("cars").value;
        const price = document.getElementById("price").value;
        const reliability = document.getElementById("reliability").value;
        const comment = document.getElementById("comment").value;

        const imageInput = document.getElementById("image");
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;

            const motti = {
                carModel,
                handling,
                power,
                fuelEfficiency,
                price,
                reliability,
                comment,
                imageUrl,
            };

            
            let mottis = JSON.parse(localStorage.getItem("mottis")) || [];
            mottis.push(motti);
            localStorage.setItem("mottis", JSON.stringify(mottis));

            
            displayMottis();
            form.reset();
        };

        if (imageInput.files[0]) {
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            
            const motti = {
                carModel,
                comfort,
                handling,
                power,
                fuelEfficiency,
                price,
                reliability,
                comment,
                imageUrl: "", 
            };
            let mottis = JSON.parse(localStorage.getItem("mottis")) || [];
            mottis.push(motti);
            localStorage.setItem("mottis", JSON.stringify(mottis));
            displayMottis();
            form.reset();
        }
    });

    
    function displayMottis() {
        mottoList.innerHTML = "";
        const mottis = JSON.parse(localStorage.getItem("mottis")) || [];
        mottis.forEach((motti, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${motti.carModel}</h3>
                ${motti.imageUrl ? `<img src="${motti.imageUrl}" alt="${motti.carModel}" width="200">` : ""}
                 <!-- <p>Comfort: ${motti.comfort}</p> -->
                <p>Handling: ${motti.handling}</p>
                <p>Horsepower: ${motti.power}</p>
                <p>Fuel Efficiency: ${motti.fuelEfficiency}</p>
                <p>Price: $${motti.price}</p>
                <p>Reliability: ${motti.reliability}/10</p>
                <p>Comment: ${motti.comment}</p>
                <button onclick="deleteMotti(${index})">Delete</button>
            `;
            mottoList.appendChild(li);
        });
    }

    
    window.deleteMotti = function (index) {
        let mottis = JSON.parse(localStorage.getItem("mottis")) || [];
        mottis.splice(index, 1);
        localStorage.setItem("mottis", JSON.stringify(mottis));
        displayMottis();
    };

    
    displayMottis();
});










 