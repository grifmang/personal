import React from 'react';

const Contact = () => {

    return (
        <div className="column is-three-quarters" id='contact' style={{ margin: 'auto' }}>
            <div className="card">
                <div className="card-content">
                    <h3 className="title is-4 source-font">Contact Me</h3>

                    {/* <div className="container box">
                        <p className='source-font'>My skills are not limited to my professional experience. I have been a web sponge, since the old AOL 3.0 days. My knowledge goes very deep with the web and its standards, protocols, and languages. While my main focus at the moment is learning Javascript, I also dabble in other languages for fun. I've taken and completed nearly every Python-related MOOC on edX and Coursera. I'm currently enrolled in Lambda School's Full Stack Web Development program.</p>
                    </div> */}
                    <h2 className="title is-4">Reach out to me on LinkedIn! Maybe we can work together. (:</h2>
                    <br />
                    <div className="buttons has-addons is-centered">
                    <a style={{ margin: '5px' }} href="https://github.com/grifmang" className="button is-link">Github</a>
                    <a style={{ margin: '5px' }} href="https://www.linkedin.com/in/tim-griffith-730a041a/" className="button is-link">LinkedIn</a>
                    {/* <a href="#" className="button is-link">CodeTrace</a> */}
                    <a style={{ margin: '5px' }} href="https://drive.google.com/file/d/1xOgz_2BXhCu9ecrD4zPVIG8p6a7KnlAS/view?usp=sharing" className="button is-link">
                        <span className="icon">
                        <i className="fas fa-file-alt"></i>
                        </span>
                        <span>Download Resume</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;