function defaultValue(term) {
    const defaultId = document.getElementById(term + '-extra-cost');
    defaultId.innerText = 0;
    totalCost()
}
function chargedValue(termForCharge) {
    const chargedId = document.getElementById(termForCharge + '-extra-cost');
    if (termForCharge == 'memory') {
        chargedId.innerText = 180;
    }
    else if (termForCharge == 'storage') {
        chargedId.innerText = 100;

    }
    else if (termForCharge == 'delivery') {
        chargedId.innerText = 20;
    }
    totalCost()

}
function totalCost() {
    const totalId = document.getElementById('totalCost');
    const totalPromo = document.getElementById('totalCostWithPromoCode');


    let total = 1299 + parseInt(document.getElementById('memory-extra-cost').innerText) + parseInt(document.getElementById('storage-extra-cost').innerText) + parseInt(document.getElementById('delivery-extra-cost').innerText);
    totalId.innerText = total;
    totalPromo.innerText = total;

}



document.getElementById('memory-default-button').addEventListener('click', function () {
    defaultValue('memory');
})
document.getElementById('storage-default-button').addEventListener('click', function () {
    defaultValue('storage');

})
document.getElementById('delivery-default-button').addEventListener('click', function () {
    defaultValue('delivery');
})
document.getElementById('memory-charge-button').addEventListener('click', function () {
    chargedValue('memory');

})
document.getElementById('storage-charge-button').addEventListener('click', function () {
    chargedValue('storage');

})
document.getElementById('delivery-charge-button').addEventListener('click', function () {
    chargedValue('delivery');
})
document.getElementById('storage-another-charge-button').addEventListener('click', function () {
    const anotherChargedId = document.getElementById('storage-extra-cost');
    anotherChargedId.innerText = 180;
    totalCost();
})
// let total = parseInt(document.getElementById('totalCost').innerText);

// total = total + parseInt(document.getElementById('memory-extra-cost').innerText) + parseInt(document.getElementById('storage-extra-cost').innerText) + parseInt(document.getElementById('delivery-extra-cost').innerText);
// console.log(total);
// //document.getElementById('totalCost').innerText = total;
// let totalPromo = parseFloat(document.getElementById('totalCostWithPromoCode').innerText);

