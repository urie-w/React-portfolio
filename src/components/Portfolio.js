import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: 'First Project',
            description: 'Prework Study guide was my first project in code ever! Check it out.',
            image: '',
            link: 'https://github.com/urie-w/Prework.git'
        },
        {
            title: 'Best Project',
            description: 'SQL logo Maker was the best once I have done so far.',
            image: '',
            link: 'https://github.com/urie-w/SVG-logo.git'
        },
        {
            title: 'Latest Project',
            description: 'At the moment my latest finished project is the UpLearn project which was a collaboration.',
            image: 'project3.jpg',
            link: 'https://github.com/aniraannu/Uplearn.git'}
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                    <h3>{project.title}</h3>
            </div>
                ))}
                </div>
        </section>
    );
}

export default Portfolio;