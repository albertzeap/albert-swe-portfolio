import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

export const Cursor = () => {

    
    const cursorRef = useRef<HTMLDivElement>(null);
    const followRef = useRef<HTMLDivElement>(null);
  
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

        const onMouseEnterLink = (e: MouseEvent) => {
            const link = e.target as HTMLElement;
            console.log(link)

            if(link.tagName === 'BUTTON' || link.tagName === 'A'){
                gsap.to(cursorRef.current, {scale: 4});
            }
        }

        const onMouseLeaveLink = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {scale : 1});
        }
        // gsap.set(cursorRef, {
        //     xPercent: 100,
        //     yPercent: 100,
        // });
        // gsap.set(followRef, {
        //     xPercent: 0,
        //     yPercent: 0
        // });
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', onMouseEnterLink);
        window.addEventListener('mouseleave', onMouseLeaveLink);


        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', onMouseEnterLink);
            window.addEventListener('mouseleave', onMouseLeaveLink);
        }

    }, []);


    return (
        <div>
            <div ref={cursorRef} className='cursor'></div>
            <div ref={followRef} className='follower-cursor'></div>
        </div>
    );
}
