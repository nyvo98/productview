import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import medicine from './assets/product.png';
import add from './assets/add.png';
import added from './assets/added.png';



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
    var selectedId = [];
    var idPicker;
    var addedToCart = -1;
    
    return (
      <FlatList
        numColumns={2}
        data={this.state.products}
        renderItem={({item}) => {
          return (
            <View style={styles.shadow}>
              <View style={styles.container}>
                <Image style={styles.img} source={item.images}></Image>
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity onPress={({item}) => {
                    }}>
                      <Image
                        style={{width: 40, height: 40}}
                        source={add}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => {
          item.id.toString;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#f3f3f3',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    padding: 10,
  },
  container: {
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    padding: 20,
    borderBottomWidth: 0.2,
  },
  img: {
    height: 120,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  info: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#888',
    flex: 1,
  },
});
