// get deta from server

const url = 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/'

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))


    async function getData(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        renderData(data[0].currencies);
        
    }
    getData()

    function renderCurrency(currency){
        let currencyTable = document.getElementById('currency-table');
        currencyTable.innerHTML += 
        `<tr>
            <td>${currency.code}</td>
            <td>${currency.quantity}</td>
            <td>${currency.rateFormated}</td>
            <td>${currency.diffFormated}</td>
            <td>${currency.rate}</td>
        </tr>`;

    }
    function renderCurrencyOption(currency){
        let currencyTable = document.getElementById('currencyDropdown');
        currencyTable.innerHTML += `<option value="${currency.code}">${currency.code}</option>`

    }

    //render all currencies - function that takes in data and calls renderCurrency for each one
    function renderData(datacurrencies){
        datacurrencies.forEach(element => {
            renderCurrency(element);
            renderCurrencyOption(element);
        });
    }



//extract data  and get currency code, quantity exchange rate and difference

//create function which creats divs for every currency

// create filter function which shows only currency which we search from input