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
        });
    })
}

displayImage ()

function collectFormData() {
    const form = document.getElementById('app');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const formData = new ("form");
        const inputs = document.querySelectorAll('input');
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(data);

        
        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

collectFormData();

