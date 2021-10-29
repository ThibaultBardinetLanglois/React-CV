import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-content">
            <h2>CONTENU NON TROUVÉ</h2>
            <p>Vous pouvez vous rediriger à la page d'accueil en cliquant sur l'icône ci-dessous</p>
            <NavLink exact to="/">
                <i className="fas fa-home"></i>
            </NavLink>
        </div>
    )
}

export default NotFound;