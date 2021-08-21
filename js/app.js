// memory option
document.getElementById('memory-8gb').addEventListener('click', function () {
    const memory8Gb = document.getElementById('memory-cost');
    memory8Gb.innerText = 0;
    totalPrice();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    const memory16Gb = document.getElementById('memory-cost');
    memory16Gb.innerText = 180;
    totalPrice();
})

// storage option
document.getElementById('storage-256gb').addEventListener('click', function () {
    const storage256Gb = document.getElementById('storage-cost');
    storage256Gb.innerText = 0;
    totalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    const storage512Gb = document.getElementById('storage-cost');
    storage512Gb.innerText = 100;
    totalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    const storage1Tb = document.getElementById('storage-cost');
    storage1Tb.innerText = 180;
    totalPrice();
})

// delivery option
document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFree = document.getElementById('delivery-charge');
    deliveryFree.innerText = 0;
    totalPrice();
})
document.getElementById('delivery-withCharge').addEventListener('click', function () {
    const deliveryWithCharge = document.getElementById('delivery-charge');
    deliveryWithCharge.innerText = 20;

    totalPrice();
})

// apply promo code button
document.getElementById('promo-codeApplyBtn').addEventListener('click', function () {
    const inputText = document.getElementById('promo-code').value
    if (inputText == 'stevekaku') {
        promoCode();
    }
})

// total price
function totalPrice() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);
    // calculating total 
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-priceBottom').innerText = totalPrice;
}

// promo code
function promoCode() {
    const previousTotalPrice = parseFloat(document.getElementById('total-price').innerText);
    // 20 percent discount by using promo code
    const newTotalPrice = previousTotalPrice - (.2 * previousTotalPrice);
    document.getElementById('total-priceBottom').innerText = newTotalPrice;
    document.getElementById('promo-code').value = '';
}