"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "300",
    height: "250",
  }

  // Komponen tombol buka trailer
  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md
        hover:bg-amber-300 transition-all duration-300"
      >
        🎬 Tonton Trailer
      </button>
    )
  }

  // Komponen player video
  const Player = () => {
    return (
      <div
        className={`
          fixed bottom-2 right-2 bg-gray-800 rounded-lg shadow-lg p-2
          transition-all duration-500 ease-in-out
          transform ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        {/* Tombol close */}
        <button
          onClick={handleVideoPlayer}
          className="text-white bg-red-600 px-3 py-1 rounded-md mb-2 hover:bg-red-700 transition"
        >
          ✕
        </button>

        {/* YouTube Player */}
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("404")}
        />
      </div>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
