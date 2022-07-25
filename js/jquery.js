document.querySelector("#user_input_bin").onkeypress = function(e){
    let chr = String.fromCharCode(e.which);
    let key_code = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which ? e.which : void 0;

    if(key_code != 13){
        if("123456789".indexOf(chr) < 0){
            alert("Campo deverá conter apenas números");
            $(this).removeAttr('value');
            return false;
        }
    }
    
};

document.querySelector("#user_input_dec").onkeypress = function(e){
    let chr = String.fromCharCode(e.which);
    let key_code = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which ? e.which : void 0;

    if(key_code != 13){
        if("10".indexOf(chr) < 0){
            alert("Campo deverá conter apenas 0 e 1");
            return false;
        }
    }
    
};