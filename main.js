const quantityProduct = document.getElementById('count');
let convertQuantity = Number(quantityProduct.innerHTML);
let list = document.querySelectorAll('.menu-container .menu-box');
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
            return;
        }
    })
}

function Close() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('mobile-nav-list').style.display = 'none';
}
function showcart() {
    document.getElementById('cart').style.display = 'block';

}
function showMenu() {
    document.getElementById('mobile-nav-list').style.display = 'block';
    
}
