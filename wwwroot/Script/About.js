window.About = {
    initScrollAnimations: function () {
        const elements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.4,
            rootMargin: "0px 0px -25% 0px"
        });

        elements.forEach(el => observer.observe(el));
    }
};