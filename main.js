const quantityProduct = document.getElementById('count');
let convertQuantity = Number(quantityProduct.innerHTML);
let list = document.querySelectorAll('.menu-container .menu-box');
// const price = document.getElementById('price');
// let Price = Number(price.innerHTML);
const sumPrice = document.getElementById('sum-price');
let SumPrice = Number(sumPrice.innerHTML);
list.forEach(item => {
    item.addEventListener('click',function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset = false;

            let listcart = document.querySelectorAll('.cart .menu-box');
            listcart.forEach(cart => {
                if(cart.getAttribute('data-key')== itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    }, 1000)
                    alert('Mặt hàng này đã tồn tại!!')
                }
            })
            if(checkIsset==false) {
                document.querySelector('.list-cart').appendChild(itemNew);
                alert('Đã thêm thành công!!');
                convertQuantity++;
                quantityProduct.innerHTML = convertQuantity;
                SumPrice = convertQuantity*15000;
                sumPrice.innerHTML = SumPrice + 'đ';
            }
        }
    })
})
function Remove($key) {
    let listcart = document.querySelectorAll('.cart .menu-box');
    listcart.forEach(item => {
        if(item.getAttribute('data-key') == $key) {
            item.remove();
            --convertQuantity;
             quantityProduct.innerHTML = convertQuantity;
             SumPrice = convertQuantity*15000;
            sumPrice.innerHTML = SumPrice + 'đ';
            return;
        }
    })
}

function Close() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('mobile-nav-list').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

}
function showcart() {
    document.getElementById('cart').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

}
function showMenu() {
    document.getElementById('mobile-nav-list').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    
}
