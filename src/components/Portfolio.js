import React from 'react';

const Portfolio = () => {

    return (
        <>
        <hr width='50%' style={{ margin: 'auto' }} />
        <section className="section source-font" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Portfolio</h3>
                    <h4 className="subtitle is-5">My stuffs!</h4>
                </div>
                <br />

                <div className="container portfolio-container">
                    <div className="columns is-flex" style={{ flexWrap: 'wrap' }}>
                        <div className="column is-5">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Curio Hackathon Project</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">React</span>
                                            <span className="tag is-default">Node</span>
                                            <span className="tag is-default">Express</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/curio.png')} alt="Curio screen shot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a target="_blank" rel="noopener noreferrer"  href="https://curio-app.netlify.com/" className="card-footer-item">Preview</a>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://github.com/curio-app" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Book Reviews</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">Python</span>
                                            <span className="tag is-default">Flask</span>
                                            <span className="tag is-default">JS</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/bookreviews.png')} alt="Cards template screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://github.com/grifmang/Book-Reviews" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/grifmang/Book-Reviews" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>KidsFlyConnection (Uber clone backend)</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">JS</span>
                                            <span className="tag is-default">Node</span>
                                            <span className="tag is-default">Express</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/kidsfly.png')} alt="Cards template screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://github.com/KidsFly-BuildWeek/BackEnd" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/KidsFly-BuildWeek/BackEnd" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Read The Times!</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">JS</span>
                                            <span className="tag is-default">React</span>
                                            <span className="tag is-default">Redux</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/news.png')} alt="Cards template screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://condescending-carson-03717d.netlify.com/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/grifmang/News" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Portfolio;