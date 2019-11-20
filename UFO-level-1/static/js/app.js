// from data.js
var tableData = data;

// table reference
var tbody = d3.select("tbody");

// building table 
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
// filtering
function handleClick() {
    var date = d3.select("#datetime").property("value");
    let filter = tableData;
    if (date){
        filter = filter.filter(row => row.datetime === date);
    }
    buildTable(filter);
}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);