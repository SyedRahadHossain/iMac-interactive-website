// total price calculation
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

// after adding promo code calculation 
function promoCode() {
    const previousTotalPrice = parseFloat(document.getElementById('total-price').innerText);
    // 20 percent discount by using promo code
    const newTotalPrice = previousTotalPrice - (.2 * previousTotalPrice);
    document.getElementById('total-priceBottom').innerText = newTotalPrice;
    //clearing promo code field
    document.getElementById('promo-code').value = '';
}

// memory option
document.getElementById('memory-8gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    totalPrice();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    totalPrice();
})

// storage option
document.getElementById('storage-256gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    totalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    totalPrice();
})

// delivery option
document.getElementById('delivery-free').addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 0;
    totalPrice();
})
document.getElementById('delivery-withCharge').addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 20;
    totalPrice();
})

// apply promo code button
document.getElementById('promo-codeApplyBtn').addEventListener('click', function () {
    const inputText = document.getElementById('promo-code').value;
    if (inputText.toLowerCase() == 'stevekaku') {
        promoCode();
    }
})