const setDateFormat = "yy/mm/dd";
var unavailableDates = ["12/25/2020"]
var str;

var filterDate = function(date){
    if(date.getDay() == str || date.getDay() == 0 || date.getDay() == 6)
        return [false];
    
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) == -1]    
}

function test(){
    str = $("#barberList").val();
}

$(document).ready(function(){
        
    //phone validation
    $("#phone").change(function(){
        var phone = $("#phone").val();
        var properPhone = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
        if(properPhone.test(phone)){
            $(".phone-invalid-feedback").hide();
            $("#phone").removeClass("invalid-feedback-border");
            $(".phone-valid-feedback").show();
            $("#phone").addClass("valid-feedback-border");
        }
        else{
            $(".phone-valid-feedback").hide();    
            $(".phone-invalid-feedback").show();
            $("#phone").addClass("invalid-feedback-border");            
        }
    });
    
    //card number validation NOT WORKING YET
    $("#card-number").change(function(){
        var cardNumber = $("#card-number").val();
        var properCardNumber = new RegExp('^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$');
        if(properCardNumber.test(cardNumber)){
            $(".number-invalid-feedback").hide();
            $("#card-icon").removeClass("invalid-feedback-border-icon");
            $("#card-number").removeClass("invalid-feedback-border");
            $(".number-valid-feedback").show();
            $("#card-icon").addClass("valid-feedback-border-icon");
            $("#card-number").addClass("valid-feedback-border");                        
        }
        else{
            $(".number-valid-feedback").hide();    
            $(".number-invalid-feedback").show();
            $("#card-icon").addClass("invalid-feedback-border-icon");
            $("#card-number").addClass("invalid-feedback-border");            
        }        
    });
    
    //card cvv validation
    $("#card-cvv").change(function(){
        var digit = $("#card-cvv").val();
        alert(digit);
        var properDigit = new RegExp('^[0-9]{3}$');
        if(properDigit.test(digit)){
            $(".cvv-invalid-feedback").hide();
            $("#card-cvv").removeClass("invalid-feedback-border");    
            $(".cvv-valid-feedback").show();
            $("#card-cvv").addClass("valid-feedback-border");
        }
        else{
            $(".cvv-valid-feedback").hide();    
            $(".cvv-invalid-feedback").show();
            $("#card-cvv").addClass("invalid-feedback-border");
        }
    });    
    
    $("#dateInput").datepicker({
        dateFormat: setDateFormat,
        minDate: new Date('06/16/2020'),
        maxDate: '+4M',
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: filterDate
    });
    
});