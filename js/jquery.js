$('#user_input_bin').on("input", function(e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ""));
    
    $('#user_input_bin').on('change', function() {
        var value = $(this).val()
      
        if (value.indexOf('0123456789') === -1) {
            return
        }
    })
});

$('#user_input_dec').on("input", function(e) {
    $(this).val($(this).val().replace(/[^0-1]/g, ""));
    
    $('#user_input_dec').on('change', function() {
        var value = $(this).val()
      
        if (value.indexOf('01') === -1) {
            return
        }      
      })
});