import React, { useRef, useEffect } from 'react'
import video_mp4 from "./movie/sample.mp4"

export function Translate() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    const StartReplay = () => {
      if (videoRef.current?.currentTime) {
        videoRef.current.currentTime = 0;
    }
        
    }
    return (
        <React.StrictMode>
                    <video controls muted ref={videoRef} >
                        <source src={video_mp4} type="video/mp4" />
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
        </React.StrictMode>
    );
}
