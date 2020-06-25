// jQuery that will "listen" to the html survey.html
$(document).ready(function(){

  $("#success-message").hide();

  $('#survey').on('submit', function(){
      
      $.ajax({
        type: 'POST',
        url: '/survey',
        data: $(this).serializeArray(),
        success: function(data){
          $("#submit").prop("disabled", "true");
          $("#success-message").show();
        }
      });
      return false;
  });
});
