// Form Submission Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form inputs
          const nameInput = this.querySelector('input[type="text"]');
          const emailInput = this.querySelector('input[type="email"]');
          const messageInput = this.querySelector('textarea');
          
          // Basic validation
          if (!nameInput.value.trim()) {
              alert('Please enter your name');
              nameInput.focus();
              return;
          }
          
          if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
              alert('Please enter a valid email address');
              emailInput.focus();
              return;
          }
          
          if (!messageInput.value.trim()) {
              alert('Please enter a message');
              messageInput.focus();
              return;
          }
          
          // Simulated form submission
          alert('Thank you for your message! We will get back to you soon.');
          this.reset();
      });
  }
  
  // Email validation function
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  // Optional: Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({ 
                  behavior: 'smooth' 
              });
          }
      });
  });
});