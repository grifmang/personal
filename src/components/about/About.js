import React from 'react';

const About = () => {

    return (
        <section className="section source-font" id="about">
            <div className="section-heading">
                {/* <h3 className="title is-2" style={{ textAlign: 'center' }}>About Me</h3> */}
                <h4 className="subtitle is-5" style={{ textAlign: 'center' }}>Jack of all trades. I like to make things work (:</h4>

                    
                <div className="container has-text-centered">
                    <p>I'm an extremely motivated web developer with 10+ years as a Systems Admin and I'm looking for an exciting new opportunity!</p>

                    <p></p>

                    <p>My skills are not limited to my professional experience. I have been a web sponge, since the old AOL 3.0 days. I had Angelfire/GeoCities pages, along with my own BBS at one point. My knowledge goes very deep with the web and its standards, protocols, and languages. While my main focus at the moment is Javascript, I also dabble in other languages for fun. I've taken and completed nearly every Python-related MOOC on edX and Coursera. I'm currently set to graduate Lambda School's Full Stack Web Development program in two months.</p>
                </div>
            </div>

            <div className="columns has-same-height is-gapless">
            <div className="column is-three-quarters" style={{ margin: '20px auto 5px auto' }}>
                {/* <div className="card"> */}
                <div>
                    <div className="card-content skills-content">
                        <h3 className="title is-4">Skills</h3>
                        <div className="content">

                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                    <strong>JavaScript:</strong>
                                    <br />
                                    <progress className="progress is-primary" value="80" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                    <strong>React.js:</strong>
                                    <br />
                                    <progress className="progress is-primary" value="80" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="media">
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>Node.js:</strong>
                                <br />
                                <progress className="progress is-primary" value="80" max="100"></progress>
                                </p>
                            </div>
                            </div>
                        </article>

                        <article className="media">
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>HTML5/CSS3</strong>
                                <br />
                                <progress className="progress is-primary" value="70" max="100"></progress>
                                </p>
                            </div>
                            </div>
                        </article>

                        <article className="media">
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>Python</strong>
                                <br />
                                <progress className="progress is-primary" value="75" max="100"></progress>
                                </p>
                            </div>
                            </div>
                        </article>

                        <article className="media">
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>Databases</strong>
                                <br />
                                <progress className="progress is-primary" value="66" max="100"></progress>
                                </p>
                            </div>
                            </div>
                        </article>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;