$('#menu-exit').hide();

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
    $('#menu-exit').show();
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
        $('#menu-exit').hide();
    }
})



let name = $("#name");
let phone = $("#phone");
let time = $("#time");
let name2 = $("#name2");
let phone2 = $("#phone2");
let time2 = $("#time2");
let loader = $('.loader');
loader.hide();
var hasError = false;


function validate_inputs() {
    hasError = false;
    name.css("border", "1px solid #989594")
    phone.css("border", "1px solid #989594")
    time.css("border", "1px solid #989594")
    $('.error-input').hide();
    if (!name.val()) {
        name.css("border", "1px solid red");
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css("border", "1px solid red");
        phone.next().show();
        hasError = true;
    }
    if (!time.val()) {
        time.css("border", "1px solid red");
        time.next().show();
        hasError = true;
    }
}

function validate_inputs2() {
    hasError = false;
    name2.css("border", "1px solid #989594")
    phone2.css("border", "1px solid #989594")
    $('.error-input').hide();
    if (!name2.val()) {
        name2.css("border", "1px solid red");
        name2.next().show();
        hasError = true;
    }
    if (!phone2.val()) {
        phone2.css("border", "1px solid red");
        phone2.next().show();
        hasError = true;
    }
}



$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $("#orderButton").click(function () {
        validate_inputs();
        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: time.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('#form1').css('display', 'none');
                        $('#successOrder1').css('display', 'flex');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });
        }
    });

    $("#orderButton2").click(function () {
        validate_inputs2();
        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: time2.val(), name: name2.val(), phone: phone2.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('#form2').css('display', 'none');
                        $('#successOrder2').css('display', 'flex');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });
        }
    });

    $('#calculateButton').click(function (){
        $('#popup').addClass("openpopup");
    })

    $('.exit').click(function (){
        $('#popup').removeClass("openpopup");
    })


    var currentImage = 1;
    var totalImages = 3;

    $("#btnRight").click(function() {
        $("#img" + currentImage).hide();
        $("#indicator" + currentImage).removeClass("indicator__item-on");
        currentImage = (currentImage % totalImages) + 1;
        $("#img" + currentImage).show();
        $("#indicator" + currentImage).addClass("indicator__item-on");
    });

    $("#btnLeft").click(function() {
        $("#img" + currentImage).hide();
        $("#indicator" + currentImage).removeClass("indicator__item-on");
        currentImage = (currentImage - 2 + totalImages) % totalImages + 1;
        $("#img" + currentImage).show();
        $("#indicator" + currentImage).addClass("indicator__item-on");
    });

});

