<script>
  // Get the modal and close button
  var modal = document.getElementById('emailModal');
  var closeBtn = document.getElementsByClassName('close')[0];

  // Function to display the modal
  function showModal() {
    modal.style.display = 'block';
  }

  // Function to hide the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Event listener for the email icon
  document.getElementById('emailIcon').addEventListener('click', showModal);

  // Event listener for the close button
  closeBtn.addEventListener('click', closeModal);

  // Event listener for clicking outside the modal
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
</script>