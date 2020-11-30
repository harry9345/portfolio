import React from "react";

import Card from "./Card.js";
import Indecision from "../assets/images/Indecision.png";
import clone from "../assets/images/clone.png";
import Mroom from "../assets/images/Mroom.jpg";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "My MRoom",
          subtitle: "The My MRoom Webpage",
          imgSrc: Mroom,
          link: "www.github.com",
          selected: false,
        },
        {
          id: 1,
          title: "Indecision App",
          subtitle: "The Decision Control App",
          imgSrc: Indecision,
          link: "www.github.com",
          selected: false,
        },
        {
          id: 2,
          title: "Udemy Clone",
          subtitle: "A Clone For Udemy Website",
          imgSrc: clone,
          link: "www.github.com",
          selected: false,
        },
      ],
    };
  }

  handelCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItem = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handelCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItem(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carousel;
