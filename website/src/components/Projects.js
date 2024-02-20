import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import image1 from '../assets/img1.png';
import image2 from '../assets/img1.png';
import image3 from '../assets/img1.png';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Yum Website",
            description: "Full Stack Web Application", 
            img: image1, 

        }, 

        {
            title: "Yum Website",
            description: "Marker generation utilizing Google Maps API", 
            img: image2,
        }, 
        
        {
            title: "Yum Website",
            description: "Dynamic generation of restaurant data and pictures utilizing Google Places API", 
            img: image3,
        }, 
    ];

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>There is going to be a long placeholder text here before final revisions</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p> Long text here </p>               
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p> Long text here </p>    
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}