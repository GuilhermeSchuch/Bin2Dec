let $msg_alerts_bin = document.querySelector(".msg-alertas-bin");
let $msg_alerts_dec = document.querySelector(".msg-alertas-dec");
let $submit_bin = document.querySelector("#submit_bin");

$('#user_input_bin').on("input", function(e) {
    let value = $(this).val();
    $(this).val(value.replace(/[^0-9]/g, ""));

    fetch("http://numbersapi.com/").then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {

          });
        } 
      });
});

$('#user_input_dec').on("input", function(e) {
    $(this).val($(this).val().replace(/[^0-1]/g, ""));
    
    $('#user_input_dec').on('change', function() {
        var value = $(this).val()
      
        if (value.indexOf('01') === -1) {
            return;
        }      
      })
});


function show_message_bin(msg) {
	$(".msg-alertas-bin").fadeIn(600);
	msg.classList.remove("off");

	setTimeout(function(){		
		$(".msg-alertas-bin").fadeOut(3000);
		msg.classList.add("off");
	}, 3000);
}

function show_message_dec(msg) {
	$(".msg-alertas-dec").fadeIn(600);
	msg.classList.remove("off");

	setTimeout(function(){		
		$(".msg-alertas-dec").fadeOut(3000);
		msg.classList.add("off");
	}, 3000);
}


function numerico(evt){
    let key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;

    if(key_code == 8 || key_code == 9 || key_code == 13 || key_code == 27 || key_code == 46 || key_code == 190){
        return true;
    }
    else if((key_code >= 35) && (key_code <= 40)){
        return true;
    }
    else if((key_code >= 48) && (key_code <= 57)){
        return true;
    }

	show_message_dec($msg_alerts_dec)
    return false;
}

function numerico_dec(evt){
    let key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;

    if(key_code == 49 || key_code == 48 || key_code == 13){
        return true;
    }

    show_message_bin($msg_alerts_bin)
    return false;
}