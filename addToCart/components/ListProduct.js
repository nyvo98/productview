import {
    FlatList
} from "react-native"
import React, { Component } from "react"
import Item from "./Item";


export default class ListProduct extends Component{
    
    render(){
        function myFunc(id){
            alert("hello from cha "+ id)
        }
        return(
            <FlatList
            numColumns={2}
            data={this.props.nguyendanhsach}
            renderItem={({item}) => {
              return (
               <Item giatricua1product={item} 
               hamnayTriggerKhiNutAddClick={myFunc}></Item>
              );
            }}
          />
        )
    }
}