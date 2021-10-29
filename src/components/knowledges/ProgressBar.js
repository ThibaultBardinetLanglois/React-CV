
const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>1.5 ans</span>
            </div>
                
            <div>
                {
                    props.languages.map(element => {
                        let xpYears = 1.5;
                        let progressBar = element.xp / xpYears * 100 + "%";

                        return (
                                <div key={element.id} className="item-list">
                                    <li>{element.value}</li>
                                    <div className="progress-bar" style={{width: progressBar}}></div>
                                </div>
                            )
                        
                    })
                }
            </div>
        </div>
    )
}

export default ProgressBar;