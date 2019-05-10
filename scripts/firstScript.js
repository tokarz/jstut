$('#button').click(AddRow);
$('.title').draggable()
$( "#accordion" ).accordion();

function DoStuff() {
    const rowString = '<tr><td>a</td><td>b</td></tr>';

    $('.myTable tbody').append(rowString);
}

function AddRow(ev, dupa, cycki, udiui, dasd) {
    const firstInputValue = $('.name').val();
    const secondInputValue = $('.surname').val()

    if (firstInputValue && secondInputValue) {

        const rowString = '<tr><td>' + firstInputValue + '</td><td>' + secondInputValue + '</td></tr>';

        $('.myTable tbody').append(rowString);

    }

}