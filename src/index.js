//global variables
let currentMovie = {}
const API = 'http://localhost:3000/movies'
let blood = document.querySelector('#amount')
// ## Challenge 1
// For each movie returned from `http://localhost:3000/movies` create an image and add it to the `movie-list` nav element.
fetch(API)
.then(res => res.json()) // get our movies as json
.then(movies => {
    renderMovies(movies)
    renderOneMovie(movies[0])
})//then pass it in a function that will render it

function renderMovies(movies){
    
    movies.map(movie =>{
        const image = document.createElement("img")
        image.src = movie.image
        const movieList = document.querySelector("#movie-list")
        movieList.append(image)

        image.addEventListener('click', () =>renderOneMovie(movie)) //use an arrow function to allow u to pass an argument in the call back function
    })

}

// ## Challenge 2
// As soon as the page loads, we should see the details of the **first** movie in the dataset.
function renderOneMovie(movie){
    currentMovie = movie
    let image = document.querySelector("#detail-image")
    image.src = movie.image

    let title = document.querySelector("#title")
    title.textContent = movie.title

    let yearRelease = document.querySelector("#year-released")
    yearRelease.textContent = movie.release_year

    let description = document.querySelector("#description")
    description.textContent = movie.description

    
    blood.textContent = movie.blood_amount

    // ## Challenge 3
// When you click on each movie image in the top nav, you should populate the detail area with the `image`, `title`, `release_year`, `description`, `watched`, and `blood_amount` for the movie that was clicked.

// If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true, then the button should say 'Watched'.
  let watchedBtn = document.querySelector("#watched")
  watchedBtn.textContent = movie.watched ? "watched" : "unwatched"

  watchedBtn.addEventListener('click', () =>toggleWatchBtn(movie))


}
// ## Challenge 4
// When you click on the button in the details it should toggle between `Watched` or `Unwatched` depending on the value of `watched` for the movie currently being displayed.

function toggleWatchBtn(movie){
    movie.watched  =  !movie.watched
    let watchedBtn = document.querySelector("#watched")
  watchedBtn.textContent = movie.watched ? "watched" : "unwatched"


    console.log(movie)

}


// ## Challenge 5
// On the right side there's a form that allows the user to enter a number of blood drops to add to each movie (don't ask why). For each movie, I should be able to add more drops. 
function handleBloodForm () {
    const bloodForm = document.querySelector("#blood-form")
    bloodForm.addEventListener('submit',(e)=> {
        e.preventDefault()
        let bloodInput = document.querySelector("#blood-amount").value

        //  i want to increase the blood amount for the current movie by += bloodInput
        // currentMovie.blood_amount += +bloodInput
        // console.log(currentMovie.blood_amount += +bloodInput)
        blood.textContent = currentMovie.blood_amount += +bloodInput
      

    })
    
}
handleBloodForm()
// Example: 
// - If the value is 0 and I enter 10, then number of drops for the movie should be 10.
// - If the value is 20 and I enter 5, then the number of drops for the movie should be 25.
