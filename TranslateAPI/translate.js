const selectTag = document.querySelectorAll('select');
const translateBtn = document.querySelector('.translate-btn');
const TextFrom = document.querySelector('.from-text');
const TextTo = document.querySelector('.to-text');
const control = document.querySelector('.control');
const rowFrom = document.querySelector('.row-from');
const rowTo = document.querySelector('.row-to');

selectTag.forEach(select =>{
    for(const countrywCode in countries){
        // create language option
        let langoption = document.createElement('option');
        langoption.value = `${countrywCode}`;
        langoption.innerHTML = `${countries[countrywCode]}`;
        select.appendChild(langoption);

        // default language select
        if((select.className == "select-from" && countrywCode == 'en-GB') || (select.className == "select-to" && countrywCode == 'tr-TR')){
            langoption.setAttribute(`selected`,'');
        }
    }
})

//translate event
translateBtn.addEventListener('click', async() =>{
    let text = TextFrom.value;
    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;

    let translateURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    await fetch(translateURL)
    .then(response => response.json())
    .then(data => TextTo.value = data.responseData.translatedText)
    .catch(err => new Error(err));
})

control.addEventListener('click',(e) =>{
    // exchange language
    if(e.target.classList.contains('fa-arrow-right-arrow-left')){
        let temptext = TextFrom.value;
        TextFrom.value = TextTo.value;
        TextTo.value = temptext;
        let tempselect = selectTag[0].value;
        selectTag[0].value = selectTag[1].value;
        selectTag[1].value = tempselect;   
    }

    // copy text
    else if(e.target.classList.contains('copy-from')){
        rowFrom.classList.add('active');
        setTimeout(()=>{
            rowFrom.classList.remove('active')
        },1500);
        navigator.clipboard.writeText(TextFrom.value);

    }
    else if(e.target.classList.contains('copy-to')){
        rowTo.classList.add('active');
        setTimeout(()=>{
            rowTo.classList.remove('active')
        },1500);
        navigator.clipboard.writeText(TextTo.value);
    }
})