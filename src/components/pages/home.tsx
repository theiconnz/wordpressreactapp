import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                <title>Hire Experienced web developer for your next project</title>
                <meta name='description'
                      content='Experienced full-stack web developers. PHP Laravel Magento React Vue wordpress .net developers' />
                <meta name={"robots"} content={process.env.ROBOTS} />
            </Helmet>

            <div className="w-100 overflow-hidden position-relative bg-black text-white" data-aos="fade">
                <div className="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
                <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
                    <div className="row d-flex align-items-center justify-content-center py-vh-5">
                        <div className="col-12 col-xl-10">
                            <span className="h5 text-secondary fw-lighter">My Mission</span>
                            <h1 className="display-huge mt-3 mb-3 lh-1">I do cool stuff and enjoy it</h1>
                        </div>
                        <div className="col-12 col-xl-8">
                            <p className="lead text-secondary">
                                In the world of software programming, it helps to have someone on the team who is
                                something of a jack of all trades. They can help with various stages of development and
                                have the versatility and time management to assist all levels of the development team.
                                When it comes to web development, that role belongs to the Full Stack Developer, someone like Me
                            </p>
                        </div>
                        <div className="col-12 text-center">
                            <a href="#" className="btn btn-xl btn-light">It Means
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
                                          .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5
                                          0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-dark">
                <div className="container px-vw-5 py-vh-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-lg-7 text-lg-end" data-aos="fade-right">
                            <span className="h5 text-secondary fw-lighter">What we do</span>
                            <h2 className="display-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.</h2>
                        </div>
                        <div className="col-12 col-lg-5" data-aos="fade-left">
                            <h3 className="pt-5">Product Design & Strategy</h3>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.<br/>
                                    <a href="#" className="link-fancy link-fancy-light me-2">Tell me more</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                            </p>
                            <h3 className="border-top border-secondary pt-5 mt-5">Development & Engineering</h3>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.<br />
                                    <a href="#" className="link-fancy link-fancy-light me-2">Tell me more</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;