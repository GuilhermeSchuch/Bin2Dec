$(document).ready(function(){
    alert("página carregada")
});

$('input').on("input", function(e) {
    $(this).val($(this).val().replace(/,/g, ""));
    $(this).removeAttr('value');
    alert("bom dia");
    console.log("bom dia");
    return false;
});