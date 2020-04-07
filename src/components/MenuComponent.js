import React, { Component } from 'react'
import { Media } from 'reactstrap'

export class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = { //over here we can define variables related to this component
      //defining as a javascript object containing a list of dishes
      dishes: [
        {
          id: 0,
          name: 'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label: 'Hot',
          price: '4.99',
          description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
        },
        {
          id: 1,
          name: 'Zucchipakoda',
          image: 'assets/images/zucchipakoda.png',
          category: 'appetizer',
          label: '',
          price: '1.99',
          description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
          id: 2,
          name: 'Vadonut',
          image: 'assets/images/vadonut.png',
          category: 'appetizer',
          label: 'New',
          price: '1.99',
          description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
          id: 3,
          name: 'ElaiCheese Cake',
          image: 'assets/images/elaicheesecake.png',
          category: 'dessert',
          label: '',
          price: '2.99',
          description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
      ]
    }
  }

  render() {

    //when we want to refer any value from the state, we can use this.state
    const menu = this.state.dishes.map(dish => {
      //iterating over the javascript object
      return (
        //key helps react to identify each element in this component uniquely while rendering
        //Whenever we render a list of items then we must assign it a key property to each items
        <div key={dish.id} className="col-12 mt-5">
          {/*this classifies that each media tag will act as a list item*/}
          <Media tag='li'>
            <Media left middle>
              <Media object src={dish.image} alt={dish.name}></Media>
            </Media>
            <Media body className='ml-5'>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      )
    });

    return (
      <div className="container">
        <div className='row'>
          <Media list>
            {/*using javascript code within JSX using the {}*/}
            {menu}
          </Media>
        </div>
      </div>
    )
  }
}

export default Menu
