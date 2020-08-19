import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import React, { Component } from "react"
import add from '../assets/add.png';
import added from '../assets/added.png';

export default class Item extends Component{
    
    state = {
        isSelected : false
    }

    render(){
        var item = this.props.giatricua1product;
        var icon = add;
        if(this.state.isSelected){
            icon = added;
        }
        return(
            <View style={styles.shadow}>
            <View style={styles.container}>
              <Image style={styles.img} source={item.images}></Image>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name} {item.id}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>{item.price}</Text>
                 <TouchableOpacity onPress={()=>{
                     this.setState({
                         isSelected : !this.state.isSelected
                     });
                     this.props.hamnayTriggerKhiNutAddClick(item.id);
                    
                 }}>
                    <Image
                      style={{width: 40, height: 40}}
                      source={icon}></Image>
                 </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
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
  