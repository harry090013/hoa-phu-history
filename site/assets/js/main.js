// Main JS file for Thon Hoa Phu website
document.addEventListener("DOMContentLoaded", () => {
    // Handle bottom navigation active states based on section scrolling
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".bottom-nav-item");

    function onScroll() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // offset for header
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Find matching nav item
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${sectionId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }
    
    window.addEventListener("scroll", onScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Set focus to the section for screen readers
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus({ preventScroll: true });
            }
        });
    });
});
