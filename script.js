const dataURL_Users= 'https://jsonplaceholder.typicode.com/users/'
let contactData = []


//Page Elements
const resultTemplate = document.querySelector("[data-resultTemplate]")
const searchResultsContainer = document.querySelector("[ data-searchResults]")
const searchBarInput = document.querySelector("[ data-searchBar]")


//Initialise page data
fetch(dataURL_Users)
    .then(res => res.json())
    .then(data => {
        contactData = data.map(urlData => {
            const searchResult = resultTemplate.content.cloneNode(true).children[0]
            const resHeader = searchResult.querySelector("[data-resultHeader]")
            const resEmail = searchResult.querySelector("[data-resultEmail]")
            const resPhone = searchResult.querySelector("[data-resultPhone]")

            resHeader.textContent = urlData.name
            resEmail.textContent = urlData.email
            resPhone.textContent = urlData.phone

            searchResultsContainer.append(searchResult)

            return {name: urlData.name, email: urlData.email, pageContent: searchResult}
        });
        // console.log(data)
    });

    //Handle searching
    searchBarInput.addEventListener("input", (e) => {
        const searchVal = e.target.value.toLowerCase()
        contactData.forEach(contact => {
            const isVisible = contact.name.toLowerCase().includes(searchVal) || contact.email.toLowerCase().includes(searchVal)
            contact.pageContent.classList.toggle("hidden", !isVisible)
        })
    })