// Bật tắt Buy Tickets
const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal =document.querySelector('.js-modal-open')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
     modal.classList.add('open')
  

}
// Hàm đóng hiển thị mua vé (xóa class open khỏi modal)
function hideTickets () {
    modal.classList.remove('open')

}

for(const buyBtn of buyBtns){
    // addEvenListener  : lắng nghe
    buyBtn.addEventListener('click', showBuyTickets)
    
}
// Nghe hành vi click vào button
modalClose.addEventListener('click', hideTickets)


// nhấn ngoài nút X vẫn đóng đc modal
modal.addEventListener('click',hideTickets)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()

})


 // Mobile header menu
 const header = document.getElementById('header');
 const mobileMenu = document.getElementById('mobile-menu');
 const headerHeight = header.clientHeight
//  đóng mở menu
 mobileMenu.onclick = function () {
    const isClose = header.clientHeight === headerHeight

     if(isClose){
         header.style.height ='auto'
     }else{
         header.style.height = null
     }
 }

//  tự động đóng khi hiện 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++ ){
    var menuItem = menuItems[i];

    // nextElementSibling tìm anh em liền kề
    // Tạo chọn More không đóng menu

    menuItem.onclick = function(){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            e.preventDefault()
        }else{
            header.style.height = null
        }
        
    }

}