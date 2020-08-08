import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                  ' I am a software developer who is passionate about change.I like diversity and that\'s what motivates me to work in tech every day.The reach of software has reached every corner of the globe and this opens opportunities to work with different cultures and people.That is the most exciting part of my work which enables me to connect.Also as a military veteran I understand the importance of team and the impact it has on everything we do.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                  'I have been working in the technology field for over seven years as a Software Development Engineer in Test and got the opportunity to work in various industries such as publishing, e-commerce, banking and travel.As a developer I bring to any position my troubleshooting experience , Agile  and automation knowledge.Having served in the military it taught me to be a team player and adapt in any changing situation.Also my engineering background and Code Fellows has geared me with all the tools necessary to contribute in building great software applications.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Science and technology inspires me to be a better developer everyday.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
