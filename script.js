//Troca o active no navbar//

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})



