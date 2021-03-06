$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout:3000,
    smartSpeed: 1300,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
flatpickr("#myID", {
    dateFormat: "d-m-Y",
});

const header = document.querySelector('.header')
const navtext = document.querySelectorAll('.header-nav-items-link')
const bookzoom = document.querySelector('.bookzoom')
window.onscroll = function() {
    if(this.pageYOffset > 86) {
        header.classList.add('header-scroll')
        for(var i = 0; i< navtext.length; i++) {
            navtext[i].classList.add('color-scroll')
            bookzoom.classList.add('header-bookzoom')
            document.querySelector('.go-top').classList.add('go-top-scroll')
        }
        
    }else {
        header.classList.remove('header-scroll')
        for(var i = 0; i< navtext.length; i++) {
            navtext[i].classList.remove('color-scroll')
            bookzoom.classList.remove('header-bookzoom')
            document.querySelector('.go-top').classList.remove('go-top-scroll')
        }
    }
}

const dangkys = document.querySelectorAll('.js-showdk')
const modal = document.querySelector('.js-modal-dk')
const modal1 = document.querySelector('.js-modal-hidedk')
const modal2 = document.querySelector('.js-modal-container')
function showdangky() {
    modal.classList.add('open')
}
function hidedangky() {
    modal.classList.remove('open')
}
for (const dangky of dangkys) {
    dangky.addEventListener('click', showdangky)
}
modal1.addEventListener('click', hidedangky)
modal.addEventListener('click', hidedangky)
modal2.addEventListener('click', function (event) {
event.stopPropagation()
})
const inputSearch = document.querySelector('.search-content-input')
const autoboot = document.querySelector('.autoboot')
inputSearch.onkeyup = (e) => {
    let checkdata = e.target.value 
    let dataArray = []
    if(checkdata) {
        dataArray = recommentList.filter((data) => {
            return data.toLocaleLowerCase().startsWith(checkdata.toLocaleLowerCase())
        })
        dataArray = dataArray.map((data) => {
            return data = '<li class="autoboot-items ">'+data+'</li>'
        })
        autoboot.classList.add('active')
        renderAdress(dataArray)
        const a = document.querySelector('.valuefirstsearch')
        a.classList.add('autoboot-items-hover')
        var dataArrayli = autoboot.querySelectorAll('li')
        dataArrayli.forEach((place,index) => {
            place.onclick = function() {
                inputSearch.value = place.innerHTML
                autoboot.classList.remove('active')
            }
        })
        // console.log(e.which);
    }else{
        autoboot.classList.remove('active')
    }
    
}
function renderAdress(list) {
    let listData = ""
    if(!list.length) {
        listData = '<li>'+inputSearch.value+'</li>'
    }else{
        listData = '<li class="valuefirstsearch autoboot-items-hover">'+inputSearch.value+'</li>' + list.join("")
    }
    autoboot.innerHTML = listData
}

var recommentList = [
    "H???i An",
    "H???i Ph??ng",
    "An Giang",
    "B?? R???a ??? V??ng T??u",
    "B???c Giang",
    "B???c K???n",
    "B???c Li??u",
    "B???c Ninh",
    "B???n Tre",
    "B??nh ?????nh",
    "B??nh D????ng",
    "B??nh Ph?????c",
    "B??nh Thu???n",
    "C?? Mau",
    "C???n Th??",
    "Cao B???ng",
    "???? N???ng",
    "?????k L???k",
    "?????k N??ng",
    "??i???n Bi??n",
    "?????ng Nai",
    "?????ng Th??p",
    "Gia Lai",
    "H?? Giang",
    "H?? Nam",
    "H?? N???i",
    "H?? T??nh",
    "H???i D????ng",
    "H???u Giang",
    "H??a B??nh",
    "H??ng Y??n",
    "Kh??nh H??a",
    "Ki??n Giang",
    "Kon Tum",
    "Lai Ch??u",
    "L??m ?????ng",
    "L???ng S??n",
    "L??o Cai",
    "Long An",
    "Nam ?????nh",
    "Ngh??? An",
    "Ninh B??nh",
    "Ninh Thu???n",
    "Ph?? Th???",
    "Ph?? Y??n",
    "Qu???ng B??nh",
    "Qu???ng Nam",
    "Qu???ng Ng??i",
    "Qu???ng Ninh",
    "Qu???ng Tr???",
    "S??c Tr??ng",
    "S??n La",
    "T??y Ninh",
    "Th??i B??nh",
    "Th??i Nguy??n",
    "Thanh H??a",
    "Th???a Thi??n Hu???",
    "Ti???n Giang",
    "H??? Ch?? Minh",
    "Tr?? Vinh",
    "Tuy??n Quang",
    "V??nh Long",
    "V??nh Ph??c",
    "Y??n B??i",
    "Ph?? Qu???c",
    "????? S??n",
    "H??? T??y",
    "H??? G????m",
    "Qu???t L??m",
    "Nh???t L???",
    "S???m S??n",
    "H??? Long"

]


// People

const tru1 = document.querySelector('.box-tru-1')
const cong1 = document.querySelector('.box-cong-1')
const peopleNumber1 = document.querySelector('.people-number-1')
const peopleInput = document.querySelector('.search-content-user')
const people = document.querySelector('.people')
people.onmousedown = function(e) {
    e.preventDefault()
}
let a1=0
cong1.onclick = function() {
    a1= a1+1
    peopleNumber1.innerHTML = a1
    var a3 = a1+a2
    peopleInput.value = a3 + " " + "Ng?????i"
}
tru1.onclick = function() {
    if(a1<1){
        return 
    }else{
        a1= a1-1
        peopleNumber1.innerHTML = a1
    }
    var a3 = a1+a2
    peopleInput.value = a3 + " " + "Ng?????i"
}
const tru2 = document.querySelector('.box-tru-2')
const cong2 = document.querySelector('.box-cong-2')
const peopleNumber2 = document.querySelector('.people-number-2')
let a2 = 0
cong2.onclick = function() {
    a2= a2+1
    peopleNumber2.innerHTML = a2
    var a3 = a1+a2
    peopleInput.value = a3 + " " + "Ng?????i"
}
tru2.onclick = function() {
    if(a2 <1){
        return
    }else{
        a2= a2-1
        peopleNumber2.innerHTML = a2
    }
    var a3 = a1+a2
    peopleInput.value = a3 + " " + "Ng?????i"
}
const cong3 = document.querySelector('.box-cong-3')
cong3.onclick = function() {
    alert('C?? ng?????i y??u ????u m?? ???n l??m g??')
}

const Daygo = document.querySelectorAll('.search-content-day-go')
const btnSearch = document.querySelector('.search-btn-last')
const bookhotel = document.querySelector('.bookhotel')
btnSearch.onclick = function(e) {
    let htmlbook
    if(peopleInput.value !== "" && inputSearch.value !== "" && Daygo[0].value !== "" && Daygo[1].value !== "") {
        alert('Th??? kh??ng c?? ng?????i y??u m?? v???n ??i ?? ?')
        htmlbook = '<div class="bookhotel-icon">'+'<i class="fas fa-check-circle"></i>'+'<span>'+'B???n ???? ?????t ph??ng th??nh c??ng'+'</span>'+'</div>' +
        '<div class="information">'+
        '<span>Th??ng tin chuy???n ??i:</span>'+
        '<li class="bookhotel-items">'+'N??i ?????n:'+inputSearch.value+'</li>' + 
        '<li class="bookhotel-items">'+'Ng??y ??i:'+ Daygo[0].value+'</li>' + 
        '<li class="bookhotel-items">'+'Ng??y v???:'+ Daygo[1].value+'</li>' + 
        '<li class="bookhotel-items">'+'S??? ng?????i ??i:'+ peopleInput.value+'</li>'+
        '<li class="bookhotel-items">'+'Ng?????i y??u:Kh??ng c?? ^^'+'</li>'+
        '<h5>Ch??c qu?? kh??ch c?? m???t chuy???n ??i vui v???</h5>'+
        '<button class="bookhotel-btn ">Xong</button>'
        '</div>'
        
        bookhotel.classList.add('tranform')
        
    }else {
        
        alert('B???n ch??a nh???p ????? th??ng tin')
    }
    bookhotel.innerHTML = htmlbook
    const a = document.querySelector('.bookhotel-btn')
    a.onclick = function() {
        bookhotel.classList.remove('tranform')
    }
}
document.querySelector('.owl-stage-outer').onclick = function() {
    bookhotel.classList.remove('tranform')
}

//  NEXT,PREV ???NH

const locationImg = document.querySelector('.location-body-box')
const ImgLength = document.querySelectorAll('.location-body-box-img')
var indexImg = 0
var next =  document.querySelector('.location-body-next')
var prev =  document.querySelector('.location-body-prev')
next.onclick = function() {
    indexImg++
    if(indexImg < ImgLength.length - 4) {
        prev.classList.remove('location-opacity')
        locationImg.style.transform ='translateX('+(-256*indexImg)+'px)'
    }else{
        indexImg = ImgLength.length - 5
    }
    if(indexImg == ImgLength.length - 5) {
        next.classList.add('location-opacity')
    }
}
prev.onclick = function() {
    indexImg--
    if(indexImg >= 0) {
        next.classList.remove('location-opacity')
        locationImg.style.transform ='translateX('+(-256*indexImg)+'px)'
    }else{
        indexImg = 0
    }
    if(indexImg == 0) {
        prev.classList.add('location-opacity')
    }
}

// HEART
const hearts = document.querySelectorAll('.book-hotel-heart')
const animationHearts = document.querySelectorAll('.animation-heart')

hearts.forEach((heart,index) => {
    heart.onclick = function(e) {
        heart.classList.toggle('fill-color')
        animationHearts[index].classList.toggle('animation')
    }
})

// BOOK-HOTEL-LOCATION
const hotel_location = document.querySelector('.book-hotel-location')
const hotel_body = document.querySelector('.book-hotel-box')
hotel_location.addEventListener('click' ,function(e) {
    if(e.target.classList.contains('book-hotel-location-items'))
    hotel_location.querySelector('.click-hotel').classList.remove('click-hotel')
    e.target.classList.add('click-hotel')
    console.log(e.target);

    const Target = e.target.getAttribute("data-title")
    console.log(Target);
    hotel_body.querySelector('.grid-css').classList.remove('grid-css')
    hotel_body.querySelector(Target).classList.add('grid-css')
})


// .........CHAT...........
const $1 = document.querySelector.bind(document)
const $2 = document.querySelectorAll.bind(document)
function call() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">V?? b???n qu?? ?????p trai</p>'
}
function call2() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">N??n ch??ng t??i s??? tr??? l???i trong gi??y l??t</p>'
}function call3() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">B???n ?????p trai</p>'
}function call4() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">Nh??ng v???n kh??ng c?? ng?????i y??u</p>'
}function call5() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">Qu?? ??en</p>'
}function call6() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">Th??i ??i ki???m ng?????i y??u ??i</p>'
}function call7() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">Nh???n tin v???i t??i l??m g??</p>'
}function call8() {
    $1('.chat-content-text').innerHTML += '<p class="mes-default child">???? b???o ??i t??m ng?????i y??u ??i r???i</p>'
}


$1('.chat').onclick = function() {
    $1('.chat-content').classList.toggle('active')
}
$1('.box-gach').onclick = function() {
    $1('.chat-content').classList.remove('active')
}
$1('.X').onclick = function() {
    $1('.chat-content').classList.remove('active')
}

function send() {
    const inputText = $1('.chat-input').value
    $1('.chat-content-text').innerHTML += '<div class="chat-user chat-child">'+'<p class="chat-content-p2 ">'+inputText +'</p>'+'</div>'
    $1('.chat-input').value = ''
    
}
function view() {
    $1('.chat-content-text').scrollTop = $1('.chat-content-text').scrollHeight
}

$1('.chat-input').onkeypress = function(e) {
    if(e.keycode == 13 || e.which == 13) {
        e.preventDefault()
        send()
        view()
        if( $2('.chat-child').length > 1 && $2('.chat-child').length < 3) {
            call()
            call2()
        }
        if( $2('.chat-child').length > 2 && $2('.chat-child').length < 4) {
            call3()
            call4()
            call5()
        }
        if( $2('.chat-child').length > 3 && $2('.chat-child').length < 5) {
            call6()
            call7()
        }
        if( $2('.chat-child').length > 4 ) {
            call8()
        }
    }
}
$1('.send-mes').onclick = function(e) {
    e.preventDefault()
        send()
        view()
        if( $2('.chat-child').length > 1 && $2('.chat-child').length < 3) {
            call()
            call2()
        }
        if( $2('.chat-child').length > 2 && $2('.chat-child').length < 4) {
            call3()
            call4()
            call5()
        }
        if( $2('.chat-child').length > 3 && $2('.chat-child').length < 5) {
            call6()
            call7()
        }
        if( $2('.chat-child').length > 4 ) {
            call8()
        }
}




// HEADER2 RESPONSIVE 

$1('.box-icon').onclick = function() {
    $1('.header2-ul').classList.add('header-X')
}
$1('.header2-close').onclick = function() {
    $1('.header2-ul').classList.remove('header-X')
}