import React from 'react';

const Header = () => {

    return (
        <section className="hero is-link is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="is-flex" style={{ flexDirection:'column' }}>
                    <div className="container title is-4">I'm
                        <h1 className="title is-1">
                        Tim Griffith
                        </h1>
                        <h2 className="subtitle is-3">
                        I'm a Full Stack Web Developer
                        </h2>
                    </div>
                    <div className="buttons has-addons is-centered">
                        <a style={{ margin: '5px' }} href="https://github.com/grifmang" className="button is-link">Github</a>
                        <a style={{ margin: '5px' }} href="https://www.linkedin.com/in/tim-griffith-730a041a/" className="button is-link">LinkedIn</a>
                        {/* <a href="#" className="button is-link">CodeTrace</a> */}
                        <a style={{ margin: '5px' }} href="https://drive.google.com/open?id=1awjqibh7plrRXjKu_uQBwDd5ZUeBNnsY" className="button is-link">
                            <span className="icon">
                            <i className="fas fa-file-alt slide"></i>
                            </span>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;