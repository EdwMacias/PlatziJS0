function calculateDiscount (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const originalPrice = 1000
const discountPercentage = 35
const finalPrice = calculateDiscount(originalPrice, discountPercentage)
console.log(` el precio original es ${originalPrice}, el descuento es ${discountPercentage}%, el precio con descuento es ${finalPrice}`)