$(document).ready(function () {
    $('#card_num').mask("9999 9999 9999 9999");
    $('#card_month').mask("99");
    $('#card_year').mask("9999");
    $('#card_cvv').mask("999");

    $(function () {
        $('#btn').click(function (e) {
            e.preventDefault();
            if ($('#card_num').val() == "") {
                alert("Вы не ввели номер карты");
            }  
            else if ($('#card_name').val() == "") {
                alert('Вы не ввели имя');
            } 
            else if ($('#card_month').val() == "") {
                alert('Вы не ввели месяц');
            }
            else if ((Number($('#card_month').val() > 12)) || (Number($('#card_month').val() < 1))) {
                alert('Вы ввели неверное значение месяца');
            } 
            else if (+$('#card_year').val() > 2029 || +$('#card_year').val() < 2019 ) {
                alert('Вы ввели неверное значение года');
            } 
            else if ($('#card_year').val() == "") {
                alert('Вы не ввели год');
            } else {
                alert('success');
                $('#card_num').attr('disabled', 'disabled');
                $('#card_name').attr('disabled', 'disabled');
                $('#card_month').attr('disabled', 'disabled');
                $('#card_year').attr('disabled', 'disabled');
                $('#card_cvv').attr('disabled', 'disabled');
            }
        })
    })
});  