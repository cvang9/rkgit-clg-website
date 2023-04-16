let previousTable = 0;
let previousBar = 0;
showTable('col-1','r-1');
function showTable(tableID,barID){
    document.getElementById(tableID).style.display = 'block';
    document.getElementById(barID).classList.add('active-table');
    if(previousBar != 0 && previousTable!=tableID){
        document.getElementById(previousTable).style.display = 'none';
        document.getElementById(previousBar).classList.remove('active-table');
    }
    previousTable = tableID;
    previousBar = barID;
}