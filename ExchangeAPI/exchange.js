const selectTag = document.querySelectorAll('select');
const flags = document.querySelectorAll('img');
const exchangeicon = document.querySelector('.fa-arrow-right-arrow-left');
const enteramount = document.querySelector('#amount');
const equals = document.querySelector('.equals');

eventListeners();
function eventListeners(){
    enteramount.addEventListener('keyup',GetPairData);
}

selectTag.forEach(select =>{
    for(const countryCode in country_list){
        // create currency option
        let currencyOption = document.createElement('option');
        currencyOption.value = `${countryCode}`;
        currencyOption.innerHTML = `${countryCode}`;
        select.appendChild(currencyOption);

        // default currency select
        if((select.className == "from-currency" && countryCode == 'TRY') || (select.className == "to-currency" && countryCode == 'USD')){
            currencyOption.setAttribute(`selected`,'');
        }
    }

    // flags
    select.addEventListener('change',(e)=>{
        e.target.previousElementSibling.src = `https://flagcdn.com/36x27/${country_list[select.value].toLowerCase()}.png`;
    })
})

// swapping currencies
exchangeicon.addEventListener('click',(e)=>{

    let newcurrency = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = newcurrency;

    let newflag = flags[0].src;
    flags[0].src = flags[1].src;
    flags[1].src = newflag;
    GetPairData();

})


// Get Data From API
function GetPairData(){
    let url = `https://v6.exchangerate-api.com/v6/${YOUR_API_KEY}/latest/${selectTag[0].value}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let result = enteramount.value*data.conversion_rates[selectTag[1].value];
        equals.innerHTML = `${enteramount.value} ${selectTag[0].value} = ${result} ${selectTag[1].value}`;
    })
    .catch(err => new Error(err));
}