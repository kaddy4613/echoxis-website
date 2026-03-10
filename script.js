// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formStatus = document.getElementById('formStatus');
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'Not provided',
        subject: document.getElementById('subject').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Validate form
    if (!validateForm(formData)) {
        showStatus('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show processing message
    showStatus('Sending your message...', 'info');
    
    // Simulate form submission (in production, this would send to a server)
    // For now, we'll just show a success message and log the data
    setTimeout(() => {
        console.log('Form submitted:', formData);
        
        // Show success message
        showStatus('Thank you for your message! We will get back to you within 24-48 business hours.', 'success');
        
        // Reset form
        form.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }, 500);
}

function validateForm(data) {
    return data.name.trim() !== '' &&
           data.company.trim() !== '' &&
           data.email.trim() !== '' &&
           data.subject.trim() !== '' &&
           data.service.trim() !== '' &&
           data.message.trim() !== '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
