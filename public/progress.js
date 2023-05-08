
// for sorting through an html element
// takes arugments for the table name, column of table to sort and 
// bool for sorting order 
const sortTable = (table, column, asc = true) => {
    const direction = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    
    // for sorting rows in table
    const sortedRows = rows.sort((a, b) => {
      const aValue = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
      const bValue = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
      
      return (aValue === bValue ? 0 : (aValue < bValue ? -1 : 1)) * direction;
    });

    // remove all rows from table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild)
    }

    // add the sorted rows
    tBody.append(...sortedRows)

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

const sortColumn = (column) => {
    const table = document.querySelector("table");
    const currentAsc = table.querySelector(`th:nth-child(${column + 1})`).classList.contains("th-sort-asc");
    sortTable(table, column, !currentAsc);
  };