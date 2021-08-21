// function of getting default 0 value for three buttons
function defaultValue(term) {
    const defaultId = document.getElementById(term + '-extra-cost');
    defaultId.innerText = 0;
    totalCost()
}
// function of getting  value of charge for three buttons
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
//function of calulating total cost
function totalCost() {
    const totalId = document.getElementById('totalCost');
    const totalPromo = document.getElementById('totalCostWithPromoCode');
    let total = 1299 + parseInt(document.getElementById('memory-extra-cost').innerText) + parseInt(document.getElementById('storage-extra-cost').innerText) + parseInt(document.getElementById('delivery-extra-cost').innerText);
    totalId.innerText = total;
    totalPromo.innerText = total;
}
// adding events to the buttons
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
//adding events for  apply button of promo code
document.getElementById("promoButton").addEventListener('click', function () {
    const promoCodeID = document.getElementById('promoInput');
    const promocode = promoCodeID.value;
    let totalPromo = parseFloat(document.getElementById('totalCostWithPromoCode').innerText);
    if (promocode.toLowerCase() == 'stevekaku') {
        totalPromo = totalPromo - totalPromo * .20;
        document.getElementById('totalCostWithPromoCode').innerText = totalPromo;
        document.getElementById('promoInput').value = '';
        document.getElementById("promoButton").disabled = true;

    }
})

