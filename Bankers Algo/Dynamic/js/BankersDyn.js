
function removeRow(){
    var lastRow = $('#myTable tr:last');
    lastRow.remove()
}
function addRow(){
    var lastRow = $('#myTable tr:last');
    var rowCount = $("#myTable tr").length;
    
    var newRow = '<tr><td>P'
    + (rowCount - 1)
    
    + '<td><input class="Allocation' + rowCount + '1"/></td>'
    + '<td><input class="Allocation' + rowCount + '2"/></td>'
    + '<td><input class="Allocation' + rowCount + '3"/></td>'
    + '<td><input class="Max' + rowCount + '3"/></td>'
    + '<td><input class="Max' + rowCount + '3"/></td>'
    + '<td><input class="Max' + rowCount + '3"/></td>'
    + '<td><input class="Avail' + rowCount + '3"/></td>'
    + '<td><input class="Avail' + rowCount + '3"/></td>'
    + '<td><input class="Avail' + rowCount + '3"/></td></tr>';
    
    lastRow.after(newRow);
}


  