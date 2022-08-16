import React, { useRef, useState } from 'react'

const VideoPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef();
    const handleClick = () => {
        const playing = !isPlaying
        setIsPlaying(playing);
        
        if(playing) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
        }

  return (
    <>
    <button onClick={handleClick}>Play</button>
    <video
    ref={ref}
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    >
         <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
    </video>
    </>
  )
}

export default VideoPlayer