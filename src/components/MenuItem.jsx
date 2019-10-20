import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MenuItem = (props) => (

  <Card>
    <Image src={props.item.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.item.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <div>
        Slice {props.item.prices[0]} 
      </div>
      <div>
        Medium {props.item.prices[1]} 
      </div>
      <div>
        Large {props.item.prices[2]}
      </div>
    </Card.Content>
  </Card>
)

export default MenuItem