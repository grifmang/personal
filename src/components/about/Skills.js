import React from 'react';

const Skills = () => {

    return (
        <div className="column is-three-quarters tags custom-tags source-font is-flex justify-stuff" style={{ margin: 'auto', flexWrap: 'wrap' }}>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-node fa-3x"></i><span className="tag is-light">Node.js</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-react fa-3x"></i><span className="tag is-light">React.js</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-js fa-3x"></i><span className="tag is-light">JavaScript</span></div>
          <div style={{ width: '80px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><img style={{ margin: 'auto' }} width='50px' src={require('../../images/logos/postgres.png')} alt="postgreSQL" /><span className="tag is-light">PostgreSQL</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-html5 fa-3x"></i><span className="tag is-light">HTML5</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-python fa-3x"></i><span className="tag is-light">Python</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-css3 fa-3x"></i><span className="tag is-light">CSS3</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-sass fa-3x"></i><span className="tag is-light">Sass</span></div>
          <div style={{ width: '80px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><img style={{ margin: 'auto' }} width='50px' src={require('../../images/logos/jwt.svg')} alt="json web token" /><span className="tag is-light">JWT</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-less fa-3x"></i><span className="tag is-light">less</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-git fa-3x"></i><span className="tag is-light">git</span></div>
          <div style={{ width: '60px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><i style={{ margin: 'auto' }} class="fab fa-docker fa-3x"></i><span className="tag is-light">Docker</span></div>
          <div style={{ width: '100px', flexDirection: 'column', margin: '10px 5px' }} className='is-flex is-centered is-vcentered'><img style={{ margin: 'auto', paddingBottom: '10px' }} width='100px' src={require('../../images/logos/flask-logo.png')} alt="flask" /><span className="tag is-light">Flask</span></div>
        </div>
    )
}

export default Skills;