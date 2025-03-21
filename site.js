
        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.style.display = 'none';
            });
            
            // Show the selected page
            document.getElementById(pageId).style.display = 'block';
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find the clicked link and add active class
            document.querySelectorAll('.nav-links a').forEach(link => {
                if (link.getAttribute('onclick').includes(pageId)) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
        
        // Mobile Menu Toggle
        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }
        
        // Payment Option Selection
        function selectPayment(type) {
            // Reset all payment options
            document.querySelectorAll('.payment-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Select the clicked option
            document.querySelectorAll('.payment-option').forEach(option => {
                if (option.querySelector('h3').textContent.toLowerCase().includes(type)) {
                    option.classList.add('selected');
                }
            });
            
            // You can add logic here to show different payment forms
            // based on the selected payment method
        }
        
        // Form Submission Handlers
        document.getElementById('contactForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.');
            this.reset();
        });
        
        document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Payment processed successfully! Thank you for your purchase.');
            this.reset();
        });
    