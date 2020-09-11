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
                        <div className="column is-5" style={{ margin: 'auto' }}>
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Tiger King Chronicles</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">Flask</span>
                                            <span className="tag is-default">HTML/CSS</span>
                                            <span className="tag is-default">JavaScript</span>
                                            <span className="tag is-default">Canvas</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/tigerking.png')} alt="tiger king chronicles" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a target="_blank" rel="noopener noreferrer"  href="https://tigerkingchronicles.herokuapp.com/api/game" className="card-footer-item">Preview</a>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://github.com/Final-Lumb-IV-Legend-of-the-Lost-Lumb/Backend" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5" style={{ margin: 'auto' }}>
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Story Squad Daily Story Contest</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">React</span>
                                            <span className="tag is-default">Node</span>
                                            <span className="tag is-default">Express</span>
                                            <span className="tag is-default">Python</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/ss-mvp.png')} alt="story squad daily story contest" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a target="_blank" rel="noopener noreferrer"  href="https://contest.storysquad.app/" className="card-footer-item">BETA</a>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://github.com/ss-mvp" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                    <div className="column is-5" style={{ margin: 'auto' }}>
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Story Squad BackEnd</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">TypeORM</span>
                                            <span className="tag is-default">Node</span>
                                            <span className="tag is-default">Express</span>
                                            <span className="tag is-default">Python</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/ss-be.png')} alt="story squad backend" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a target="_blank" rel="noopener noreferrer"  href="https://master.d37ier1k83jxk6.amplifyapp.com/" className="card-footer-item">Preview</a>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://github.com/Lambda-School-Labs/story-squad-be" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5" style={{ margin: 'auto' }}>
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-flex" style={{ flexDirection: 'column' }}>
                                        <span>Story Squad FrontEnd</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">React</span>
                                            <span className="tag is-default">Typescript</span>
                                            <span className="tag is-default">Material UI</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                    <img src={require('../images/ss-fe.png')} alt="Curio screen shot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a target="_blank" rel="noopener noreferrer"  href="https://master.d37ier1k83jxk6.amplifyapp.com/" className="card-footer-item">Preview</a>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://github.com/Lambda-School-Labs/story-squad-fe" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5" style={{ margin: 'auto' }}>
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
                        <div className="column is-5" style={{ margin: 'auto' }}>
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
                                    <a href="https://book-reviews-grif.herokuapp.com/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/grifmang/Book-Reviews" className="card-footer-item">Source
                                    Code</a>
                                </footer>
                            </div>
                        </div>
                        <div className="column is-5" style={{ margin: 'auto' }}>
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
                        <div className="column is-5" style={{ margin: 'auto' }}>
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