'use client';
import styles from "../assets/css/style.module.css";
import { useEffect, useState } from 'react';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('dd.scroll-target');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId, event) => {
        event.preventDefault();
        setActiveLink(sectionId);
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.fixNav : ''}`}>
                <div className={styles.inner}>
                    <a href="" className={styles["logo"]}>Hebby</a>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'JumpOn' ? styles.active : ''}
                                onClick={(e) => handleClick('JumpOn', e)}
                            >
                                Jump On
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Cat' ? styles.active : ''}
                                onClick={(e) => handleClick('Cat', e)}
                            >
                                Feed the Cat
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Ripple' ? styles.active : ''}
                                onClick={(e) => handleClick('Ripple', e)}
                            >
                                Ripple Delete
                            </a>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    );
}
