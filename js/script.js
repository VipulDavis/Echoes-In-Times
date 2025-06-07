document.addEventListener('DOMContentLoaded', function() {
    // Navigation dropdown functionality
    const menuButton = document.querySelector('.menu-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (menuButton && dropdownContent) {
        menuButton.addEventListener('click', function() {
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    }
    
    // Gallery functionality - only on gallery.html
    if (window.location.pathname.includes('gallery.html') || window.location.pathname.endsWith('/gallery')) {
        const galleryImages = [
            'images/photo1.jpg',
            'images/photo2.jpg',
            'images/photo3.jpg',
            'images/photo4.jpg',
            'images/photo5.jpg',
            'images/photo6.jpg',
            'images/photo7.jpg',
            'images/photo8.jpg'
        ];
        
        let currentImageIndex = 0;
        const currentImageElement = document.getElementById('current-image');
        const prevButton = document.querySelector('.nav-arrow.prev');
        const nextButton = document.querySelector('.nav-arrow.next');
        
        // Function to show current image
        function showImage(index) {
            // Handle looping (last → first, first → last)
            if (index < 0) {
                index = galleryImages.length - 1;
            } else if (index >= galleryImages.length) {
                index = 0;
            }
            
            currentImageIndex = index;
            
            // Apply transition animation
            currentImageElement.classList.remove('gallery-slide-transition');
            void currentImageElement.offsetWidth; // Trigger reflow
            currentImageElement.classList.add('gallery-slide-transition');
            
            // Set the image source
            currentImageElement.src = galleryImages[currentImageIndex];
        }
        
        // Set up navigation event listeners
        if (prevButton && nextButton && currentImageElement) {
            prevButton.addEventListener('click', function() {
                showImage(currentImageIndex - 1);
            });
            
            nextButton.addEventListener('click', function() {
                showImage(currentImageIndex + 1);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function(event) {
                if (event.key === 'ArrowLeft') {
                    showImage(currentImageIndex - 1);
                } else if (event.key === 'ArrowRight') {
                    showImage(currentImageIndex + 1);
                }
            });
        }
    }
    
    // Add smooth scrolling to all anchor links
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
});
