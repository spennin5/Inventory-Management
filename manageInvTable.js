// ARRAY FOR HEADER.
import "./jquery-3.4.1.min.js";
var arrHead = new Array();
var values = new Object();
arrHead = ['Item', 'Quantity'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() {

    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    addRow();
}
function submit() {
    var myTab = document.getElementById('empTable');
    var valueArr = new Array();


    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

            var element = myTab.rows.item(row).cells[c];

            if (element.childNodes[0].getAttribute('type') == 'text') {
                valueArr.push("'" + element.childNodes[0].value + "'");
            }
        }
        values[valueArr[0]] = valueArr[1]

    }

    // SHOW THE RESULT IN THE CONSOLE WINDOW.
    createTableFromInput(values);
}

function createDropDowns(){


  var actual_JSON = JSON.parse('{
      "Gloves":
      {
        "Glove 1": "Checked In",
        "Glove 2": "Checked In",
        "Glove 3": "Checked Out"
      },
      "Wire":
      {
        "Wire 1": "Checked In",
        "Wire 2": "Checked Out",
        "Wire 3": "Checked Out"
      }

  }');

  for (row in data){
    console.log("row: "+row)
    var button = document.createElement('button');
    //button.innerText =
  }

}

function createTableFromInput(tableData) {
  if(document.getElementById('inventoryTable')){
    var element = document.getElementById('inventoryTable');
    element.parentNode.removeChild(element);
  }
  var table = document.createElement('table');
  table.setAttribute('id','inventoryTable')
  var tableBody = document.createElement('tbody');

  for (item in tableData){
    var newRow = document.createElement('tr')

    console.log(item)
    console.log(tableData[item])
    var itemCell = document.createElement('td');
    var quanitityCell = document.createElement('td');
    itemCell.appendChild(document.createTextNode(item));
    quanitityCell.appendChild(document.createTextNode(tableData[item]));
    newRow.appendChild(itemCell);
    newRow.appendChild(quanitityCell);
    tableBody.appendChild(newRow);
  }
  // tableData.forEach(function(rowData) {
  //   var row = document.createElement('tr');
  //
  //   rowData.forEach(function(cellData) {
  //     var cell = document.createElement('td');
  //     cell.appendChild(document.createTextNode(cellData));
  //     row.appendChild(cell);
  //   });
  //
  //   tableBody.appendChild(row);
  // });

  table.appendChild(tableBody);

  document.getElementById('resultsDiv').appendChild(table);
}

// ADD A NEW ROW TO THE TABLE.s
function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);



          // CREATE AND ADD TEXTBOX IN EACH CELL.
          var ele = document.createElement('input');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');

          td.appendChild(ele);

    }
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
