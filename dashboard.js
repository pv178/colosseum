$(document).ready(function() {
    $('#loadLog').click(function(event) {
      event.preventDefault();
      $.get('/api/log', function(data) {
        $('#logData').empty();
        data.forEach(function(log) {
          $('#logData').append(`<p>${log.log_entry}</p>`);
        });
      });
    });
  
    // Function to load members list
    function loadMembersList() {
      $.get('https://fotopoklon.com/API/fetch.php', function(data) {
        $('#logData').empty();
        data.forEach(function(member) {
          $('#logData').append(`<p>ID: ${member.ID}</p>`);
          $('#logData').append(`<p>Name: ${member.Name}</p>`);
          $('#logData').append(`<p>Expiry Date: ${member.ExpiryDate}</p>`);
          $('#logData').append(`<p>Membership Type: ${member.MembershipType}</p>`);
          $('#logData').append(`<p>Mail: ${member.Mail}</p>`);
          $('#logData').append(`<hr>`);
        });
      });
    }
  
    // Initial load of members list when the page loads
    loadMembersList();
  });
  