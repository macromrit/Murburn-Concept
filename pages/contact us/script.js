/* document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Construct data object
  const formData = {
    name,
    email,
    phone,
    subject,
    message
  };

  // You can either send the data to your server using fetch
  fetch('your-server-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('Your message has been sent successfully!');
    document.getElementById('contact-form').reset(); // Reset the form
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error sending your message. Please try again.');
  });
});

 */

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Construct data object
      const formData = {
          name,
          email,
          phone,
          subject,
          message
      };

      // You can either send the data to your server using fetch
      fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              alert('Your message has been sent successfully!');
              document.getElementById('contact-form').reset(); // Reset the form
          })
          .catch(error => {
              console.error('Error:', error);
              alert('There was an error sending your message. Please try again.');
          });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Construct data object
      const formData = {
          name,
          email,
          phone,
          subject,
          message
      };

      // Send the data to your server using fetch
      fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          alert('Your message has been sent successfully!');
          document.getElementById('contact-form').reset(); // Reset the form
      })
      .catch(error => {
          console.error('Error:', error);
          alert('There was an error sending your message. Please try again.');
      });
  });
});
