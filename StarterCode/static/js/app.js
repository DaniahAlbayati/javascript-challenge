// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
// Use d3 to append one table row `tr` for each Sighting
// Loop Through `data`
// Use d3 to append 1 cell per UFOSighting value

var tbody = d3.select("tbody");
function table_function(data){
    tbody.html("");
    data.forEach((UFOSighting)=>{
        var row = tbody.append("tr");
        Object.values(UFOSighting).forEach((values)=>{
            var cells = row.append("td");
            cells.text(values);
        });
    });
}
table_function(tableData);

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

var button = d3.select("#filter-btn")
// Create event handlers
button.on("click", runEnter);

//filter data by date element
function runEnter() {
d3.select("tbody").html("");

 // Prevent the page from refreshing
d3.event.preventDefault();

    // get the date input
var requestedDate = d3.select("#datetime").property("value");

    // /filter the data
var filteredData = tableData.filter(date => date.datetime === requestedDate);
console.log(filteredData);

   // Display the filtered data
       filteredData.forEach(function(UFOSighting2) {
           console.log(UFOSighting2);
           var row = tbody.append("tr");
           Object.entries(UFOSighting2).forEach(function([key, value]){
                var cell = row.append("td");
                cell.text(value);
           });
       });
   }