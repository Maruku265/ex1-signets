import './Entete.scss';

export default function Entete(props) {
    return (
        <header className="Entete">
            <div className="logo">Signets</div>
            <ul className="navUtilisateur">
                <li>Nom, Prénom</li>
                <div className="imgUtilisateur">avatar</div>
            </ul>
        </header>
    );
}