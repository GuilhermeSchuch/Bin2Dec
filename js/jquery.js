$('input').on("input", function(e) {
    $(this).val($(this).val().replace(/,/g, ""));
    $(this).removeAttr('value');
    console.log("Campo deverá conter apenas números");
    return false;
});