import React from 'react';

const Resume = () => {

    return (
        <section style={{ textAlign: 'center' }} className="section" id="resume">
            <div className="section-heading">
                <h3 className="title is-2">Resume</h3>
                <h4 className="subtitle is-5">Click below to download my resume</h4>
                <a href="https://timgriffith.us/TimGriffithResume.pdf" className="button is-link is-medium">
                    <span className="icon">
                    <i className="fas fa-file-alt"></i>
                    </span>
                    <span>Download</span>
                </a>
            </div>
        </section>
    )
}

export default Resume;