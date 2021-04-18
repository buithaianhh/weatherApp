import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {Colors} from '../configs/Colors';

const InforCard = (props) => {
    const styles = StyleSheet.create({
        Inforcard:{
            alignItems:"center",
            margin:10,
            minWidth:150
    },
    text:{
        color:Colors.white,
        fontSize:18
    }
})

    return (
        <View style={styles.Inforcard}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.value}</Text>
        </View>
    )
}

export default InforCard