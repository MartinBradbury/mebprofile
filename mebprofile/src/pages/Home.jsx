import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import video from "../assets/trihub.mp4";
import Collapse from "react-bootstrap/Collapse";

const Home = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  const handleMouseEnter = () => {
    videoRef.current.play(); // Play the video on mouse enter
  };

  const handleMouseLeave = () => {
    videoRef.current.pause(); // Pause the video on mouse leave
    videoRef.current.currentTime = 0; // Reset video to start
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.bg}>
      <div className={styles.cardPos}>
        <Card
          className={styles.card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <Card.Img variant="top" src={image1} className={styles.cardbg}/> */}
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
              A Full Stack project using React.js front end and DjangoREST back
              end.
            </Card.Text>
            <Button
              className={styles.btn}
            >
              Link to Project
            </Button>
            <Button
              className={styles.btn}
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              About
            </Button>
            <div style={{ minHeight: "350px" }}>
              <Collapse in={open}>
                <div
                  id="about-project"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    zIndex: 1,
                  }}
                >
                  <Card
                    body
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </Card>
                </div>
              </Collapse>
            </div>
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
