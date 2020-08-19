import React, {Component} from 'react';
import {
  FlatList, View, Button,
} from 'react-native';
import medicine from './assets/product.png';
import Item from './components/Item';
import ListProduct from './components/ListProduct';
import Menu from './components/Menu';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      

      products: [
        {
          id: 1,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
          
        },
        {
          id: 2,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
         
        },
        {
          id: 3,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
          
        },
        {
          id: 4,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
   
        },
        {
          id: 5,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
          
        },
        {
          id: 6,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,

        },
        {
          id: 7,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
        
        },
        {
          id: 8,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
          
        },
        {
          id: 9,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
          
        },
        {
          id: 10,
          name: 'Thuốc chuột',
          images: medicine,
          price: 50000,
        
        },
      ],
    };
  }



  render() {
    return (
      <View>
         <Menu danhsachchon={this.state.choiceArr}></Menu>
         <ListProduct nguyendanhsach={this.state.products}
         >
        </ListProduct>
      
      </View>
    );
  }
}

