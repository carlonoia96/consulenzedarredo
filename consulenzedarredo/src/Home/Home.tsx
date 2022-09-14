import React, {FC} from 'react';
import './Home.css';
import Cards from "../Cards/Cards";
import IconsText from "../IconsText/IconsText";

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
      <div className={"geneic-block default-block-size block-2"}>
        <div className={"textContainer text-center display-center flex-column"}>
          <p>
            Hai voglia di cambiare look alla tua casa o devi ancora andarci ad abitare e vuoi avere un progetto
            d'interni già studiato? <br/>
            Hai svariate idee che ti frullano in testa ma non sai come metterle in pratica e hai bisogno di un
            professionista del settore?
          </p>
          <p>
            Il mio servizio di consulenza online è proprio quello che fa a caso tuo.<br/>
            Non dovrai preoccuparti di nulla: insieme creeremo interni di design, super funzionali ed accoglienti, dal
            look moderno.
          </p>
          <p className={"color-red grassetto"}>
            Sarà un piacere lavorare per te e la tua nuova casa!
          </p>
        </div>
      </div>
      <div className={"geneic-block default-block-size immagineCucina"}/>
      <div className={"prenota default-block-size text-center flex-column"}>
        <div className={"container display-center flex-row"}>
          <div className={"col1"}>
            <div className={"image"}/>
          </div>
          <div className={"col2 display-center"}>
            <div className={"textContainer"}>
              <p>
                Creerò un <span className={"color-red"}>progetto d'interni su misura per te</span>, assecondando il tuo
                gusto personale e soprattutto le
                esigenze tue e della tua famiglia.<br/>
                Per farlo avrò bisogno di conoscerti meglio, scoprire quello di cui hai bisogno e farti vedere come
                lavoro. Ecco perché nel form che troverai qui sotto potrai prenotare una <span className={"color-red"}>call conoscitiva gratuita</span> con
                me della durata di ben <span className={"grassetto"}>30 minuti!</span>
              </p>
              <p>
                Sarò in grado di farti sentire finalmente bene nella tua casa.<br/>
                Non dovrai preoccuparti di nulla: trasformerò i tuoi sogni e desideri in solide realtà.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"cards"}>
        <div className={"container"}>
          <Cards/>
        </div>
      </div>

      <div className={"cosaOtterrai"}>
        <div className={"title"}>
          <p>
            Cosa otterrai con la video call
          </p>
        </div>
        <div className={"container"}>
          <IconsText rows={[
            {
              icon:"camera",
              text:"potrai farti conoscere e spiegarmi le tue necessità"
            },
            {
              icon:"camera",
              text:"mi conoscerai e vedrai come lavoro"
            },
            {
              icon:"camera",
              text:"conoscerai meglio i diversi stili di arredamento per decidere quale si avvicina di più ai tuoi gusti"
            },
            {
              icon:"camera",
              text:"potrai elencarmi tutte le tue richieste/desideri per avere la casa dei tuoi sogni"
            },
            {
              icon:"camera",
              text:"iniziare ad avere un'idea più chiara di come potrà diventare la tua nuova casa"
            },
            {
              icon:"camera",
              text:"avere una panoramica del costo per il restyling della tua casa \n"
            }
          ]}/>
          <p>
            Al termine della videocall potrai decidere in totale autonomia se affidarmi il progetto!
          </p>
        </div>
      </div>

      <div className={"adatta default-block-size flex-column"}>
        <p className={"title color-red"}>
          E' adatta a te se...
        </p>
        <div className={"textContainer"}>
          <div className={"row"}>
            <div className={"col1"}>
              <div className={"image"}/>
            </div>
            <div className={"col2 text-center"}>
              <p>
                stai comprando/hai comprato casa e vorresti suddividere gli spazi al meglio
              </p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col1"}>
              <div className={"image"}/>
            </div>
            <div className={"col2 text-center"}>
              <p>
                vuoi capire come sarà suddivisa e arredata la tua casa grazie ad un progetto in 3D
              </p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col1"}>
              <div className={"image"}/>
            </div>
            <div className={"col2 text-center"}>
              <p>
                vuoi mantenere gli arredi che hai, senza cambiarli, ma non sai come e dove posizionarli
              </p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col1"}>
              <div className={"image"}/>
            </div>
            <div className={"col2 text-center"}>
              <p>
                hai bisogno di ridistribuire i tuoi spazi
              </p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col1"}>
              <div className={"image"}/>
            </div>
            <div className={"col2 text-center"}>
              <p>
                vuoi scoprire se una casa fa a caso tuo e ti serve l'idea giusta in visuale 2D e 3D per capirlo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"geneic-block default-block-size immagineBagno"}/>
    </>);
  }

}

export default Home;
