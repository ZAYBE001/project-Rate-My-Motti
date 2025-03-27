const cars = [
    { id: 1, name: "Shoyu Ramen", comfort: "exelent", image:"", rating: 5, Horsepower:"349 horsepower" },
    { id: 2, name: "meat & baked potaoes", restaurant: "Menya", image: "Meat & baked potatoes.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto", restaurant: "Ramen-ya", image: "naruto.jpg" , rating: 3, comment: "Good, but not great" },
    { id: 4, name: "kojiro", restaurant: "Ramen-ya", image: "kojiro.jpg " , rating:5 , comment:"nice dish"},
    {id: 5, name: "nirvana", restaurant: "Ramen-ya", image:"nirvana.jpg" , rating: 3, comment: "nice, but not great" }
 ];

function displayImage (){
    fetch('')
}


const currencyInput = document.getElementById("currencyInput");
const formattedValue = document.getElementById("formattedValue");

 currencyInput.addEventListener("input", () => {
        let value = parseFloat(currencyInput.value);
        if (!isNaN(value)) {
            formattedValue.innerText = new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            }).format(value) } 
            else {formattedValue.innerText = ""
        }
        console.log(value);
    });

    