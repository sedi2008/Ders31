const inputData = document.querySelectorAll('.info')
const form = document.querySelector('#data')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const tr = document.createElement('tr')

    for (let i = 0; i < inputData.length; i++) {
        const td = document.createElement('td')
        td.innerText = inputData[i].value;
        tr.appendChild(td)
    }
    document.querySelector('tbody').appendChild(tr)
})

//append
//remove
//replace
//write


