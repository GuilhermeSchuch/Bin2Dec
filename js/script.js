let $div_resultado_bin = document.querySelector("#resultado_bin");
let $div_resultado_dec = document.querySelector("#resultado_dec");
let texto_resultado = '';

function converter_bin(){
    let $user_input_bin = document.querySelector("#user_input_bin").value;

    if($user_input_bin == ''){
        alert("Campo deverá ser preenchido");
        return false;
    }

    while($user_input_bin != 1){
        if($user_input_bin % 2 == 0){
            $user_input_bin /= 2;
            texto_resultado = texto_resultado.concat('0');
        }
        else if($user_input_bin % 2 == 1){
            $user_input_bin = Math.floor($user_input_bin / 2);
            texto_resultado = texto_resultado.concat('1');
        }
    }
    $div_resultado_bin.classList.add("active");
    $div_resultado_dec.classList.remove("active");
    
    $div_resultado_bin.innerHTML = '';
    $div_resultado_dec.innerHTML = '';

    texto_resultado = texto_resultado.concat('1');
    escreverResultado_bin(texto_resultado.split("").reverse().join(""));
    document.querySelector("#user_input_bin").value = '';
}

document.querySelector("#user_input_bin").onkeypress = function(e){
    let chr = String.fromCharCode(e.which);
    let key_code = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which ? e.which : void 0;

    if(key_code != 13){
        if("1234567890".indexOf(chr) < 0){
            alert("Campo deverá conter apenas números a");
            return false;
        }
    }
    
};

function converter_dec(){
    let $user_input_dec = document.querySelector("#user_input_dec").value;

    if($user_input_dec == ''){
        alert("Campo deverá ser preenchido");
        return false;
    }
    

    let tamanho_string = $user_input_dec.length;
    let expoente = 0;
    let resultado = 0;

    for(x = 0, y = tamanho_string; x <= tamanho_string; x++, y--){
        if($user_input_dec[x] == '1'){
            expoente += Math.pow(2, (y-1));
            resultado += expoente;
            expoente = 0;
        }
    }
    $div_resultado_dec.classList.add("active");
    $div_resultado_bin.classList.remove("active");

    $div_resultado_bin.innerHTML = '';
    $div_resultado_dec.innerHTML = '';

    escreverResultado_dec(resultado);
    document.querySelector("#user_input_dec").value = '';
}

function escreverResultado_bin(texto){
    $div_resultado_bin.innerHTML = texto;
    texto_resultado = '';
}

function escreverResultado_dec(texto){
    $div_resultado_dec.innerHTML = texto;
    texto_resultado = '';
}

function validar(field){
    str = field.value;

    if(str.length > 7){
        field.value = str.substring(0, str.length - 1);
    }
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

    alert("Campo deverá conter apenas números");
    return false;
}

function numerico_dec(evt){
    let key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;

    if(key_code == 49 || key_code == 48 || key_code == 13){
        return true;
    }
    
    alert("Campo deverá conter apenas '0' e '1'");
    return false;
}