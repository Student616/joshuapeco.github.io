const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)'; // Slide the header up
  } else {
    // Scrolling up
    if (currentScroll <= 50) {
      header.style.transform = 'translateY(0)'; // Bring the header back to its original position
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

// Add CSS transition to the header for smooth animation
header.style.transition = 'transform 0.3s ease';

document.querySelector('.phone-number').addEventListener('click', function() {
  const phoneNumber = '09171233714'; // Replace with your phone number
  navigator.clipboard.writeText(phoneNumber)
      .then(() => {
          alert('Phone number copied to clipboard: ' + phoneNumber);
      })
      .catch(err => {
          console.error('Unable to copy: ', err);
      });
});