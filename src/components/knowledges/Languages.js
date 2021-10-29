import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 0.6},
            {id: 2, value: "Php", xp: 0.6},
            {id: 3, value: "HTML5", xp: 1.2},
            {id: 4, value: "CSS3", xp: 1.2},
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp: 0.4},
            {id: 2, value: "React", xp: 0.2},
            {id: 3, value: "Express", xp: 0.1},
            {id: 4, value: "Sass", xp: 0.7}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languages-frameworks-block">
                <ProgressBar 
                    className="languagesDisplay"
                    languages={languages}
                    title="Languages"
                />
                <ProgressBar 
                    className="frameworksDisplay"
                    languages={frameworks}
                    title="Frameworks & bibliothèques"
                />
            </div>
        )
    }
}

export default Languages;