import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div className='list'>
        {list.map((card, index) => {
          return (
            <div key={card.id}>
              <Card
                coffeename={card.coffeename}
                date={card.date}
                description={card.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

//coffeename:
//date:
//description:
//process:
//beans: static button
//flavors:
//where?:
//tags
