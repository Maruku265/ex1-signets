import './Appli.scss';
import BtnAjoutSignet from './BtnAjoutSignet';
import Entete from './Entete.jsx';
import ListeSignets from './ListeSignets.jsx';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenuPrincipal">
          <ListeSignets />
        </section>
        <BtnAjoutSignet />
    </div>
  );
}
