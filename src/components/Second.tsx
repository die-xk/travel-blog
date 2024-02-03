import "./styles/second.scss";
import { useState } from "react";
import backgroundImage1 from "../../public/1.jpg";
import backgroundImage2 from "../../public/2.jpg";
import backgroundImage3 from "../../public/3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Second = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const switchBackground = () => {
    setBackgroundImage((prevImage) => {
      if (prevImage === backgroundImage1) {
        return backgroundImage2;
      } else if (prevImage === backgroundImage2) {
        return backgroundImage3;
      } else {
        return backgroundImage1;
      }
    });
  };
  return (
    <main
      className="hero"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(71, 75, 255, 0.5) 0%, rgba(166, 38, 240, 0.5) 100%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        transition: "background-image 0.5s",
      }}
    >
      <div className="wrapper">
        <button onClick={switchBackground}>
          <IoIosArrowBack />
        </button>
        <div className="text">
          <h1>trolltunga</h1>
          <p>
            Embark on a journey to discover the wonders of the world. From
            sun-kissed beaches to towering mountain peaks, our travel blog
            invites you to explore the diverse landscapes and vibrant cultures
            that make each destination unique. Join us as we share captivating
            stories, hidden gems, and travel tips to inspire your next
            adventure.
          </p>
          <button className="button">Let's Go</button>
        </div>
        <button onClick={switchBackground}>
          <IoIosArrowForward />
        </button>
      </div>
    </main>
  );
};

export default Second;
