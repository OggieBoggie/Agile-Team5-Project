
// for sorting through an html element
// takes arugments for the table name, column of table to sort and 
// bool for sorting order 
const sortTable = (table, column, asc = true) => {
    // determines the sort direction, ascending or descending
    const direction = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    
    // for sorting rows in table
    const sortedRows = rows.sort((a, b) => {
      const aValue = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
      const bValue = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
      
      // returns the sorting value to help sort columns
      return (aValue === bValue ? 0 : (aValue < bValue ? -1 : 1)) * direction;
    });

    // remove all rows from table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild)
    }

    // add the sorted rows
    tBody.append(...sortedRows)

    // adds a class to the th header elements
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

const sortColumn = (column) => {
    // selects the table
    const table = document.querySelector("table");
    // checks the th-sort 
    const currentAsc = table.querySelector(`th:nth-child(${column + 1})`).classList.contains("th-sort-asc");
    // !currentAsc to make it ascending if descending and descending if already ascending
    sortTable(table, column, !currentAsc);
  };

// Function to handle search filtering
const handleSearch = () => {
    // connects to search input
    const search = document.getElementById("searchInput");
    // sets search value to lower case
    const filter = search.value.toLowerCase();
    // selects the table
    const table = document.querySelector(".content-table");
    // gets the element for table row
    const rows = table.getElementsByTagName("tr");

    // loop through each row of a table 
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent || cells[j].innerText;
            
            // if the search matches the filter, set to true
            if (cellText.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break
            }
        }
        
        // show matching rows
        rows[i].style.display = found ? "" : "none";
    }
  };
  