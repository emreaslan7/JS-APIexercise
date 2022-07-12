const selectTag = document.querySelectorAll('select');

selectTag.forEach(select =>{
    for(const countryCode in countries){
        let langoption = document.createElement('option');
        langoption.value = `${countryCode}`;
        langoption.innerHTML = `${countries[countryCode]}`;
        select.appendChild(langoption);
    }
})