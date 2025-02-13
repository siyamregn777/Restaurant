import './Course.css'
// Sample list of videos (replace with your own video paths or URLs)
import foodVideos1 from '../../public/images/pexels-cachi290-29889498.jpg';
import foodVideos2 from '../../public/images/pexels-cachi290-29889498.jpg';
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
