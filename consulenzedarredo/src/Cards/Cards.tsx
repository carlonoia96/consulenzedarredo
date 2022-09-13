import React, {FC} from 'react';
import './Cards.css';
import cards from "./Cards.json";
import CardModel from "./Cards.model"

interface CardsProps {
  cards: CardModel[]
}

class Cards extends React.Component<{}, CardsProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      cards: cards,
    }
  }

  clickCard(card: CardModel) {
    card.open = !card.open;
    this.setState({
      cards
    });
  }

  cardStyle(card: CardModel) {
    if (card.open) {
      return "cardStyleClose"
    } else {
      return "cardStyleOpen"
    }
  }

  showCardText(card: CardModel) {
    if (card.open) {
      return card.description
    } else {
      return card.title
    }
  }

  pintImg(card:CardModel){
    if(card.img && card.img != "" && !card.open){
      return <img src={require(`../${card.img}`)}/>
    }
  }

  render() {
    return (
      <>
        {
          this.state.cards.map((card: CardModel) => (
              <div className={"card"} onMouseEnter={() => this.clickCard(card)}
                   onMouseLeave={() => this.clickCard(card)}>
                <p className={`text ${this.cardStyle(card)}`}>
                  {this.showCardText(card)}
                </p>
                <div className={"image"}>
                  {this.pintImg(card)}
                </div>
              </div>
            )
          )
        }
      </>
    );
  }
}

export default Cards;
