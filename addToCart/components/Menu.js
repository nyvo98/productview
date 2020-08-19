import {
     View,StyleSheet, Text
} from "react-native"
import React, { Component } from "react"

export default class Menu extends Component{

    state ={
        choice: this.props.danhsachchon
    }

    render(){
        var idArr = this.state.choice;
        return(
            <View style={styles.menu}>
                <Text>Your card:</Text>
                <Text>{idArr || "Ban chua co su lua chon"}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    menu:{
        height:50,
        backgroundColor: "pink"
    }
});