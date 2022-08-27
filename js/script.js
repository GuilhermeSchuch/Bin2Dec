let $div_resultado_bin = document.querySelector("#resultado_bin");
let $div_resultado_dec = document.querySelector("#resultado_dec");

let $desc_bin = document.querySelector("#desc_bin");
let $desc_dec = document.querySelector("#desc_dec");

let texto_resultado = '';

function converter_bin(){
    let $user_input_bin = document.querySelector("#user_input_bin").value;
    let $user_input_bin_no_change = document.querySelector("#user_input_bin").value;

    if($user_input_bin == ''){
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

    $desc_bin.style="display: none;"
    $desc_dec.style="display: block;"
    $desc_dec.innerHTML = $user_input_bin_no_change + " em binário:";

    document.querySelector("#user_input_bin").value = '';
}

function converter_dec(){
    let $user_input_dec = document.querySelector("#user_input_dec").value;

    if($user_input_dec == ''){
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

    $desc_dec.style="display: none;"
    $desc_bin.style="display: block;"
    $desc_bin.innerHTML = $user_input_dec + " em decimal:";

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
