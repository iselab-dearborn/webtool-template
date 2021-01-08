
'use strict'

$(function(){

    feather.replace();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass("slide").toggleClass('active');
        $('#content').addClass("slide").toggleClass('active');
    });
});
