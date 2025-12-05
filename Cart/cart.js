let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let quantity = document.getElementById('qty')
let itmtotal = document.getElementById('itemTotal')
let finaltotal = document.getElementById('Total')
let items = document.getElementById('cartItem')
let remove = document.getElementsByClassName('remove-btn')[0]

let price = 999

function update(quant){
    itmtotal.textContent = quant * price
    finaltotal.textContent = quant * price
}

plus.addEventListener('click' , function(){
    let quant = Number(quantity.textContent)
    quant++
    quantity.textContent = quant
    update(quant)
})

minus.addEventListener('click' , function(){
    let quant = Number(quantity.textContent)
    
    if (quant > 1){
        quant--
        quantity.textContent = quant
        update(quant)
    }
})

remove.addEventListener('click' , function(){
    items.style.display = 'none'
    quantity.textContent = 0
    itmtotal.textContent = '₹0'
    finaltotal.textContent = '₹0'
})
