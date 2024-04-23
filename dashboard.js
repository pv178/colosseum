function filterRowsByStatus(tableId, status) {
  const table = document.getElementById(tableId);
  const tbody = table.tBodies[0];
  const rows = tbody.rows;

  for (const row of rows) {
    const statusCell = row.cells[5]; // Adjust the index for the 'Status' column
    if (status === 'all' || statusCell.textContent.trim().toUpperCase() === status.toUpperCase()) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
}

window.onload = function() {
  // Create the label element
  var label = document.createElement('label');
  label.htmlFor = 'statusFilter';
  label.textContent = 'Filter by Status:';
  label.style.display = 'block'; // Ensure the label is displayed as a block element

  // Create the filter dropdown
  var statusFilter = document.createElement('select');
  statusFilter.id = 'statusFilter';
  statusFilter.innerHTML = `
    <option value="all">All</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  `;
  statusFilter.onchange = function() {
    filterRowsByStatus('logData', this.value);
  };

  // Find the position where the label and dropdown should be inserted
  var container = document.querySelector('.search-container');
  var table = document.getElementById('logData');

  // Insert the label and dropdown above the table, within the search container
  container.insertBefore(label, table);
  container.insertBefore(statusFilter, table);
};
