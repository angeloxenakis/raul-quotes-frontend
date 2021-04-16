document.addEventListener("DOMContentLoaded", () => {
    getQuotes()
})

// Below is the commented out code that has been sectioned out into multiple files. 
// You can take the other file imports out of the index.html file and work sole out of this one if you'd like.

// const getQuotes = () => {
//     fetch("http://localhost:3000/api/v1/quotes")
//     .then(res => res.json())
//     .then(data => renderQuotes(data))
// }

// const renderQuotes = (quotes) => {
//     const container = document.querySelector(".container")
//     container.innerHTML = ""

//     quotes.forEach(quote => {
//         const quoteLi = document.createElement("li")
//         quoteLi.innerText = quote.content

//         container.append(quoteLi)
//     })

//     const newBtn = document.createElement("button")
//     newBtn.innerText = "+ New Quote"

//     newBtn.addEventListener("click", () => {
//         renderForm()
//     })

//     container.append(newBtn)
// }

// const renderForm = () => {
//     const container = document.querySelector(".container")
//     container.innerHTML = ""

//     const formHeader = document.createElement("h3")
//     formHeader.innerText = "Create a Quote"

//     const quoteForm = document.createElement("form")
//     const contentInput = document.createElement("input")
//     contentInput.type = "text"
//     contentInput.name = "content"

//     const submitBtn = document.createElement("input")
//     submitBtn.type = "submit"

//     quoteForm.addEventListener("submit", (e) => {
//         e.preventDefault()
//         createQuote(e)
//     })

//     quoteForm.append(contentInput, submitBtn)
//     container.append(formHeader, quoteForm)

// }

// const createQuote = (e) => {
//     fetch("http://localhost:3000/api/v1/quotes", {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "accept": "application/json",
//         },
//         body: JSON.stringify({
//             content: e.target.content.value
//         })
//     })
//     .then(res => res.json())
//     .then(newQuote => getQuotes())
// }