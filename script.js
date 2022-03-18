


setInterval(function() {
    food = JSON.parse(localStorage.getItem('food')) || [];

    var table = '<div class="hi"><div class="immg"><img class="img h" src="0-1200x676-14.jpg" /></div><div class="p1"><p class="hello">Cơm tấm sườn bì chả trứng</p></div></div><div class="hi2"><div class="immg2"><img class="img2 h" src="ga-ran1.jpg.webp" /></div><div class="p1"><p class="hello1">Gà rán KFC</p></div></div><div class="hi3"><div class="immg3"><img class="img3 h" src="./maxresdefault.jpg" /></div><div class="p1"><p class="hello2">Cơm chiên dương châu</p></div></div>';

    for (var c of food) {
        table += `<div class="hi"><div class="immg"><img class="img h" src="0-1200x676-14.jpg" /></div><div class="p1"><p class="hello">${c.Cơmtấmsườnbìchảtrứng}</p></div></div><div class="hi2"><div class="immg2"><img class="img2 h" src="ga-ran1.jpg.webp" /></div><div class="p1"><p class="hello1">${c.GàránKFC}</p></div></div><div class="hi3"><div class="immg3"><img class="img3 h" src="./maxresdefault.jpg" /></div><div class="p1"><p class="hello2">${c.Cơmchiêndươngchâu}</p></div></div>`
        document.getElementById('webpage').innerHTML = table;
    }
}, 1000);


var customers;
setInterval(function() {
    customers = JSON.parse(localStorage.getItem('customers')) || [];
}, 1000);   

function addCustomer() {
    var nameCus = document.getElementById('nameCustomer').value;
    var ageCus = document.getElementById('ageCustomer').value;

    customers.push({ 
        name: nameCus, 
        age: ageCus
    });
    localStorage.setItem('customers', JSON.stringify(customers));
}

document.getElementById('addCustomer').addEventListener('click', addCustomer);

document.getElementById('clearStorage').addEventListener('click', function() {
    localStorage.removeItem('customers');
})