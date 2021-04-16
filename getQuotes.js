const getQuotes = () => {
    fetch("http://localhost:3000/api/v1/quotes")
    .then(res => res.json())
    .then(data => renderQuotes(data))
}

const renderQuotes = (quotes) => {
    const container = document.querySelector(".container")
    container.innerHTML = ""

    quotes.forEach(quote => {
        const quoteLi = document.createElement("li")
        quoteLi.innerText = quote.content

        container.append(quoteLi)
    })

    const newBtn = document.createElement("button")
    newBtn.innerText = "+ New Quote"

    newBtn.addEventListener("click", () => {
        renderForm()
    })

    container.append(newBtn)
}