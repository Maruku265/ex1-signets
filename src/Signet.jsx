import './Signet.scss';
import BtnDeplace from './BtnDeplace.jsx';
import BtnConfig from './BtnConfig.jsx';

export default function Signet(props) {
    return (
        <li className="Signet">
            <BtnDeplace />
            <img src={'images-signets/' + props.id + '.jpg'} alt={props.titre}/>
            <div className="info">
                <h3>{props.titre}</h3>
                <p className="dateDeModif">{props.dateMod}</p>
            </div>
            <BtnConfig />
        </li>
    );
}