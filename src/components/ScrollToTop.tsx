import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            let retries = 0;
            const tryScroll = () => {
                const element = document.querySelector(hash);
                if (element) {
                    const navbarOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'auto'
                    });
                } else if (retries < 10) {
                    retries++;
                    setTimeout(tryScroll, 50);
                }
            };
            setTimeout(tryScroll, 50);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
