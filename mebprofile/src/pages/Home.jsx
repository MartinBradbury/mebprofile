import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import video from "../assets/trihub2.mp4";
import video2 from "../assets/trihub.mp4";
import Offcanvas from "react-bootstrap/Offcanvas";

const Home = () => {
  const videoRef1 = useRef(null); // Ref for the first video
  const videoRef2 = useRef(null); // Ref for the second video

  const handleMouseEnterVideo1 = () => {
    videoRef1.current.play(); // Play the first video on mouse enter
  };

  const handleMouseLeaveVideo1 = () => {
    videoRef1.current.pause(); // Pause the first video on mouse leave
    videoRef1.current.currentTime = 0; // Reset video to start
  };

  const handleMouseEnterVideo2 = () => {
    videoRef2.current.play(); // Play the second video on mouse enter
  };

  const handleMouseLeaveVideo2 = () => {
    videoRef2.current.pause(); // Pause the second video on mouse leave
    videoRef2.current.currentTime = 0; // Reset video to start
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  return (
    <div className={styles.bg}>
      <div className={styles.cardPos}>
        <h1>
          Martin Bradbury
          <br />
          <br />
          Junior Full Stack Software Developer
        </h1>
        <p>Please find below a list of the projects I have completed.</p>
        <Card
          className={styles.card}
          onMouseEnter={handleMouseEnterVideo1}
          onMouseLeave={handleMouseLeaveVideo1}
          onClick={handleShow} // Click to show Offcanvas
        >
          <video
            ref={videoRef1} // Attach the ref to the video element
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
              A Full Stack project using React.js front end and Django REST back
              end.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Offcanvas Component */}
        <Offcanvas className={styles.canvas} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <p>Tri Hub</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>TriHub is a comprehensive platform created by Martin Bradbury,
              designed to serve the diverse needs of the triathlon community. It
              aims to bring together triathletes of all skill levels by offering
              a range of features, including performance tracking, customizable
              training plans, and a vibrant social space for sharing
              experiences. The platform emphasizes user engagement, providing
              tools for setting goals, interacting with the community, and
              staying updated with the latest industry news. TriHub's design
              focuses on accessibility and usability for competitive athletes,
              casual participants, and newcomers alike. The platform features a
              responsive layout and a clean, straightforward color scheme,
              ensuring a seamless experience across all devices. Continuous
              improvement is a priority, with future updates planned to enhance
              user satisfaction and expand platform capabilities.
              <br />
              Technologies Used: Frontend: React, Axios, React Bootstrap
              Backend: Python, Django REST Additional Features: Responsive
              design</p>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Additional Cards */}
        <Card
          className={styles.card}
          onMouseEnter={handleMouseEnterVideo2}
          onMouseLeave={handleMouseLeaveVideo2}
          onClick={handleShow2} // Click to show Offcanvas
        >
          <video
            ref={videoRef2} // Attach the ref to the video element
            className={styles.video}
            muted
            loop
            playsInline
            webkit-playsinline="true"
            alt="triathlon background video"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card.Body className={styles.cardBody}>
            <Card.Title>Tri Hub</Card.Title>
            <Card.Text>
              A Full Stack project using React.js front end and Django REST back
              end.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Offcanvas Component */}
        <Offcanvas className={styles.canvas} show={show2} onHide={handleClose2}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <p>Walking the Wainwrights</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              Test
            </p>
          </Offcanvas.Body>
        </Offcanvas>

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
