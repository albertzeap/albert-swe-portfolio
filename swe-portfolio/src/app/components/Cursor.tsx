import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

export const Cursor = () => {

    
    const cursorRef = useRef<HTMLDivElement>(null);
    const followRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement>(null);
    
    useEffect(() => {
        const moveCursor = (e: MouseEvent): void => {
            gsap.to(cursorRef.current,{
                x: e.clientX,
                y: e.clientY,
                duration: 0.2
            });
            gsap.to(followRef.current,{
                x: e.clientX,
                y: e.clientY,
                duration: 0.9
            });
        };
        gsap.set(cursorRef, {
            xPercent: 100,
            yPercent: 100,
        });
        gsap.set(followRef, {
            xPercent: 0,
            yPercent: 0
        });
        window.addEventListener('mousemove', moveCursor);
    }, []);


    return (
        <div>
            <div ref={cursorRef} className='cursor'></div>
            <div ref={followRef} className='follower-cursor'></div>
        </div>
    );
}
