import './Course.css'
// Sample list of videos (replace with your own video paths or URLs)
import foodVideos1 from '../videos//12289091_2160_3840_30fps.mp4';
import foodVideos2 from '../videos//12641663_1920_1080_30fps.mp4';
const foodVideos = [
  { src: foodVideos1, alt: 'Food Item 1' },
  { src: foodVideos2, alt: 'Food Item 2' },
];

function Course() {
  return (
    <section className="course">
      {foodVideos.map((video, index) => (
        <video key={index} src={video.src} controls className="food-video">
          Your browser does not support the video tag.
        </video>
      ))}
    </section>
  );
}

export default Course;
