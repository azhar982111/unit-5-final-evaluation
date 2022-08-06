
let receivedData = JSON.parse(localStorage.getItem("userDetails"))

console.log(receivedData)

let sidebarDiv = document.getElementById("sidebar")

let imageDiv = document.createElement("div")
let image = document.createElement("img")
image.src = receivedData.url
image.setAttribute("id", "profilepic")
imageDiv.append(image)

let names = document.createElement("p")
names.textContent = receivedData.name

let email = document.createElement("p")
email.textContent = receivedData.email

let country = document.createElement("p")
country.textContent = receivedData.country



sidebarDiv.append(imageDiv, names, email, country)


let getData = async (countrycode) => {


    if (countrycode === "India") {
        countrycode = "in"
    }

    if (countrycode === "Usa") {
        countrycode = "us"
    }

    if (countrycode === "China") {
        countrycode = "ch"
    }

    if (countrycode === "UK") {
        countrycode = "uk"
    }

    if (countrycode === "New zealand") {
        countrycode = "nz"
    }

    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`

    let res = await fetch(url)
    let data = await res.json()

    // return data

    console.log(data)

    let rightDivs = document.getElementById("rightDiv")

    data.articles.forEach(element => {

        let division = document.createElement("div")
        division.setAttribute("id", "cardDiv")


        let imageDiv = document.createElement("div")
        let images = document.createElement("img")
        images.setAttribute("id", "dataImages")
        images.src = element.urlToImage
        imageDiv.append(images)

        let textDiv = document.createElement("div")
        let text = document.createElement("p")
        text.textContent = element.description
        textDiv.append(text)

        division.append(imageDiv, textDiv)
        rightDivs.append(division)

    });

}

getData(receivedData.country)