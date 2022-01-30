const dataURL_Users= 'https://jsonplaceholder.typicode.com/users/'

//Page Elements
const resultTemplate = document.querySelector("[data-resultTemplate]")
const searchResultsContainer = document.querySelector("[ data-searchResults]")




fetch(dataURL_Users)
    
    .then(res => res.json())
    .then(data => {
        data.forEach(result => {
            const searchResult = resultTemplate.content.cloneNode(true).children[0]
            const resHeader = searchResult.querySelector("[data-resultHeader]")
            const resEmail = searchResult.querySelector("[data-resultEmail]")
            const resPhone = searchResult.querySelector("[data-resultPhone]")

            resHeader.textContent = result.name
            resEmail.textContent = result.email
            resPhone.textContent += result.phone

            searchResultsContainer.append(searchResult)
        });
        // console.log(data)
    });

