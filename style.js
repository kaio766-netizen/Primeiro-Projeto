const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelected = document.querySelector(".currency-selected")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".real")
    const currencyValueConverted = document.querySelector(".dolar")

    const dolarToday = 5.2
    const euroToday = 5.6
    const libraToday = 6.7
    const bitcoinToday = 418.628

    if (currencySelected.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelected.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelected.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"

        }).format(inputCurrencyValue / bitcoinToday)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("valorDolar")
    const currencyNome = document.getElementById("valorReal")
    const currencyImage = document.querySelector(".bandeira-dolar")
    const currencyImagem = document.querySelector(".bandeira")

    if (currencySelected.value == "dolar") {
        currencyNome.innerHTML = "Dólar americano"
        currencyImagem.src = "./image/Bandeira-EUA.png"
    }

    if (currencySelected.value == "euro") {
        currencyNome.innerHTML = "Euro"
        currencyImagem.src = "./image/Logo-euro.png"
    }

    if (currencySelected.value == "real") {
        currencyNome.innerHTML = "Real"
        currencyImagem.src = "./image/brasil 2.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./image/Logo-Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./image/Logo-Bitcoin.png"
    }

    convertValues()
}

currencySelected.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)