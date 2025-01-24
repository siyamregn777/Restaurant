import { useState } from 'react';
import './Cooking.css'; // Assuming you create custom styles here

// List of videos with paths, titles, descriptions, and any extra details
const cookingVideos = [
  { title: 'Video 1', src: '../videos/12289091_2160_3840_30fps.mp4', description: 'Description for video 1' },
  { title: 'Video 2', src: '../videos/12641663_1920_1080_30fps.mp4', description: 'Description for video 2' },
  
  // Add more videos as needed
];

function Cooking() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (index) => {
    setSelectedVideo(index === selectedVideo ? null : index); // Toggle video on/off
  };

  return (
    <div className="cooking-page">
      <h1>Cooking Videos</h1>
      <div className="video-list">
        {cookingVideos.map((video, index) => (
          <div key={index} className="video-item">
            <h2 onClick={() => handleVideoClick(index)}>{video.title}</h2>
            <p>{video.description}</p>
            {selectedVideo === index && (
              <video src={video.src} controls className="video-player"></video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cooking;
