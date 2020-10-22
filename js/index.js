const btn = $('.btn')
const close = $('.close')
btn.on('click', function () { 
    $('.nav').slideDown()
})
close.on('click', function () { 
    $('.nav').slideUp()
})