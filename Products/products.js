let searching = document.getElementById('search')

searching.addEventListener('input' , function(){
    let search_value = searching.value.toLowerCase()
    let allproducts = document.querySelectorAll('.product')
    allproducts.forEach(function(pro_box){
        let match = pro_box.innerText.toLowerCase().includes(search_value)
        if (match){
            pro_box.style.display = 'block'
        }
        else{
            pro_box.style.display = 'none'
        }
    })
})