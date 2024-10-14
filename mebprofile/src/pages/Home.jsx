import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import video from "../assets/trihub2.mp4";
import Offcanvas from "react-bootstrap/Offcanvas";

const Home = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  const handleMouseEnter = () => {
    videoRef.current.play(); // Play the video on mouse enter
  };

  const handleMouseLeave = () => {
    videoRef.current.pause(); // Pause the video on mouse leave
    videoRef.current.currentTime = 0; // Reset video to start
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.bg}>
      <div className={styles.cardPos}>
        <Card
          className={styles.card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleShow} // Click to show Offcanvas
        >
          <video
            ref={videoRef} // Attach the ref to the video element
            className={styles.video}
            muted
            loop
            playsInline
            webkit-playsinline="true"
            alt="triathlon background video"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card.Body className={styles.cardBody}>
            <Card.Title>Tri Hub</Card.Title>
            <Card.Text>
              A Full Stack project using React.js front end and Django REST
              back end.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Offcanvas Component */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tri Hub Details</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life, you can have the elements
            you have chosen. Like, text, images, lists, etc. 
            <p>
              This project showcases my skills in React and Django, combining
              them to create a seamless user experience.
            </p>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Additional Cards */}
        <Card className={styles.card}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Add more cards as needed */}
        <Card className={styles.card}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Additional Cards */}
        <Card className={styles.card}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
