import acies from acies


const randomJokeHTMLElement = document.querySelector(".random-joke");
const selectHTMLElement = document.querySelector("#categories")
const buttonElement = document.querySelector(".generate-joke-button")

const base_url = "https://api.chucknorris.io/jokes"
let selectedOption = null;

const fetchRandomJokes = async (category = "") => {
    try {
        const response = await fetch(`${base_url}/random?category=${category}`)
        const data = await response.json()
        return data  
    } catch (error) {
        throw new Error("Something went terrible wrong!")
    }

}

const fetchCategories = async () => {
    try {
        const response = await fetch(`${base_url}/categories`)
        const data = await response.json()
        return data  
    } catch (error) {
        throw new Error("Something went terrible wrong!")
    }

}

const displayRandomJoke = async () => {
    const joke = fetchRandomJokes()
    console.log(randomJokeHTMLElement)
    randomJokeHTMLElement.textContent = joke.value
}

const fillSelectWithOptions = async () => {
    const categories = await fetchCategories()

    if (!categories) return

    categories.forEach((category) => {
        const option = new Option(category, category)
        selectHTMLElement.append(option)
    })
}

selectHTMLElement.addEventListener("change", async (event) => {
    const selectedOption = event.currentTarget.value
    const response = await fetchRandomJokes(selectedOption)
    randomJokeHTMLElement.textContent = response.value
})

buttonElement.addEventListener("click,", async () => {
    const response = await fetchRandomJokes(selectedOption)
    randomJokeHTMLElement.textContent = response.value
})

searchElement.addEventListener('input', (event) => {
    if (event.currentTarget.value < 3) return
   
    const respone = searchQuery(event.currentTarget.value)
 
});
 
const searchQuery = (query) => {
    const url = (`${base_url}/search?query=${query}`)

    const response = await fetch(url)
    const data = await response.json()
 
   
}


displayRandomJoke()
fetchCategories()
fillSelectWithOptions()
