const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

const apiurl ="https://api.exchangerate-api.com/v4/latest";

convertButton.addEventListener("click", () =>
{
    
    const amount=parseFloat(amountInput.value);
    const fromCurrency=fromCurrencySelect.value;
    const toCurrency=toCurrencySelect.value;
   
    const query= `${apiurl}/${fromCurrency}`;
    
    fetch(query)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data,"the second then block")
        debugger;
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount= amount*exchangeRate;
        resultDiv.textContent =  `${amount} ${fromCurrency} =${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
        resultDiv.classList.remove("error-message");
        resultDiv.classList.add("success-message"); 
    });

});