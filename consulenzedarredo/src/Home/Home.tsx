import React, {FC} from 'react';
import './Home.css';

interface HomeProps {
}


class Home extends React.Component<HomeProps> {
    render() {
        return (<>
            <div className={"firstViewed default-block-size"}>
                <div className={"textContainer text-center grassetto no-margin background-block"}>
                    <p className={"title color-white grassetto"}>
                        <span className={"color-red"}>CONSULENZA</span><br/>
                        D'ARREDO
                    </p>
                </div>
            </div>
            <div className={"geneic-block default-block-size"}>
                <div className={"textContainer text-center display-center flex-column"}>
                    <p className={"title color-red"}>
                        La tua consulenza di design in un click
                    </p>
                    <p>
                        Hai voglia di cambiare look alla tua casa o devi ancora andarci ad abitare e vuoi avere un
                        progetto d'interni già studiato?
                    </p>
                    <p>
                        Hai svariate idee che ti frullano in testa ma non sai come metterle in pratica e hai bisogno di
                        un professionista del settore?
                    </p>
                    <p>
                        Il mio servizio di consulenza online è proprio quello che fa a caso tuo.
                    </p>
                    <p>
                        Prima di effettuare una call conoscitiva gratuita il consiglio è quello di avere già una mezza
                        idea e per questo ti potrà essere d'aiuto il mio <span className={"grassetto"}>blog</span>, dove
                        ho racchiuso tante immagini di design d'interni suddivise per le diverse aree della casa.
                    </p>
                    <div className={"blog btn"}>
                        <div className={"image"}>
                            <p>Visita il blog</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"geneic-block default-block-size immagineCucina"}/>
            <div className={"prenota default-block-size text-center flex-column"}>
                <p className={"title color-red"}>
                    Prenota la tua consulenza d'arredo con me
                </p>
                <div className={"container display-center flex-row"}>
                    <div className={"col1"}>
                        <div className={"image"}/>
                    </div>
                    <div className={"col2 display-center"}>
                        <div className={"textContainer"}>
                            <p>
                                Il progetto avrà luogo attraverso una prima call conoscitiva gratuita in cui avrò modo
                                di conoscere il mio cliente e di comprendere le sue reali necessità e richieste in
                                merito allo spazio oggetto di progetto. A seguire svilupperò un proprio concept e
                                Moodboard.
                            </p>
                            <p>
                                A partire da qui, se mi verrà affidato il progetto, svilupperò il disegno in pianta
                                dello spazio ben organizzato in rapporto alle diverse funzioni dell'abitare.
                            </p>
                            <p>
                                Il progetto si concluderà con la scelta di materiali di finitura e il design degli
                                arredi mediante un set completo di disegni e immagini fotorealistiche dello spazio
                                progettato.
                            </p>
                            <div className={"btnPrenota"}>
                                <p>Prenota ora!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }

}

export default Home;
