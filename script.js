const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const apiKey = '73f6ce2bedc052eab39c8bcad642ec76';
const apiEndpoint = `http://api.coinlayer.com/live?access_key=${apiKey}`;

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(apiEndpoint)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok.');
            }
            return res.json();
        })
        .then(data => {
            if (data.success) {
                const rate = data.rates[currency_two] / data.rates[currency_one];
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            } else {
                throw new Error('Failed to fetch data.');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}


currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});
calculate();