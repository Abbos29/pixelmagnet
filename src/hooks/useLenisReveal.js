import { useEffect } from 'react';

export const useLenisReveal = () => {
    useEffect(() => {
        let lenis;
        let rafId;
        let observer;

        const init = async () => {
            try {
                const lenisModule = await import('lenis');
                const Lenis = lenisModule.default;

                lenis = new Lenis({
                    duration: 1.2,
                    smoothWheel: true,
                    wheelMultiplier: 0.95,
                    touchMultiplier: 1.1,
                });

                const raf = (time) => {
                    lenis.raf(time);
                    rafId = requestAnimationFrame(raf);
                };

                rafId = requestAnimationFrame(raf);
            } catch {
                document.documentElement.style.scrollBehavior = 'smooth';
            }

            const animatedElements = document.querySelectorAll(
                'section, .container > *, .blog_card, .card',
            );

            animatedElements.forEach((element) => {
                element.classList.add('reveal-on-scroll');
            });

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: '0px 0px -8% 0px',
                },
            );

            animatedElements.forEach((element) => observer.observe(element));
        };

        init();

        return () => {
            if (observer) {
                observer.disconnect();
            }

            if (rafId) {
                cancelAnimationFrame(rafId);
            }

            if (lenis) {
                lenis.destroy();
            }
        };
    }, []);
};
