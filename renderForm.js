const renderForm = () => {
    const container = document.querySelector(".container")
    container.innerHTML = ""

    const formHeader = document.createElement("h3")
    formHeader.innerText = "Create a Quote"

    const quoteForm = document.createElement("form")
    const contentInput = document.createElement("input")
    contentInput.type = "text"
    contentInput.name = "content"

    const submitBtn = document.createElement("input")
    submitBtn.type = "submit"

    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault()
        createQuote(e)
    })

    quoteForm.append(contentInput, submitBtn)
    container.append(formHeader, quoteForm)

}

const createQuote = (e) => {
    fetch("http://localhost:3000/api/v1/quotes", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            content: e.target.content.value
        })
    })
    .then(res => res.json())
    .then(newQuote => getQuotes())
}