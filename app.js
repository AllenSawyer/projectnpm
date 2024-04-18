const btnGetDogs = document.getElementById('getDogs');
const dogImage = document.getElementById('dogs')

btnGetDogs.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
                throw new
                    Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dogImage.src = data.message;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation", error)
        })
})