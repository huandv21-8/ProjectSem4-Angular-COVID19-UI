$(document).ready(function() {

    $("#icon-clicknew").click(function() {
        if ($("#iconnew").hasClass("fa fa-eye-slash")) {  //check the class
            $("#iconnew").removeClass( "fa fa-eye-slash" ).addClass( "fas fa-eye" );
        }else if($("#iconnew").hasClass("fas fa-eye")){
            $("#iconnew").removeClass( "fas fa-eye " ).addClass( "fa fa-eye-slash" );
        }
        var input = $("#newpass");

        if (input.attr("type") == "text") {
            input.attr("type", "password");
        } else {
            input.attr("type", "text");
        }
    });

    $("#icon-clickconfirm").click(function() {
        if ($("#iconconfirm").hasClass("fa fa-eye-slash")) {  //check the class
            $("#iconconfirm").removeClass( "fa fa-eye-slash" ).addClass( "fas fa-eye" );
        }else if($("#iconconfirm").hasClass("fas fa-eye")){
            $("#iconconfirm").removeClass( "fas fa-eye " ).addClass( "fa fa-eye-slash" );
        }
        var input = $("#comfirmpass");

        if (input.attr("type") == "text") {
            input.attr("type", "password");
        } else {
            input.attr("type", "text");
        }
    });

});