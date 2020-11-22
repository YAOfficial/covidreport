import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
class Card extends React.Component {   
  render() {
    return (
    
        <ListGroup bsPrefix='listg' variant="flush">
  <ListGroup.Item bsPrefix='listi' >{this.props.value}</ListGroup.Item>
 
</ListGroup>
        
    
    );
  }
}
export default Card;
