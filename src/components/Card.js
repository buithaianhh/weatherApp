import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../configs/Colors';

const Card = (props) => {
    const   Iicon = ()=> {
        if(props.icon === 'morning'){
            return(
                <Icon name='weather-sunny' style={styles.cardIcon} size={40} color='orange'/>
            )
        }
        if(props.icon === 'afternoon'){
            return(
                <Icon name='weather-pouring' style={styles.cardIcon} size={40} color='orange'/>
            )
        }
        if(props.icon === 'night'){
            return(
                <Icon name='weather-partly-cloudy' style={styles.cardIcon} size={40} color='orange'/>
            )
        } 
    }
    const styles = StyleSheet.create({
        card:{
            backgroundColor:props.backgroundColor,
            height:210,
            width:120,
            alignItems:"center",
            borderRadius:10,
            margin:10
        },
        cardIcon:{
            color:'white',
            margin:20
        },
        temperature:{
            color:Colors.white,
            margin:20
        },
        TextTitle:{
            fontSize:20,
            color:Colors.white,
            margin:10
        },
        Viewstitle:{
            flex:1
        },
    })
    return (
        <View style={styles.card}>
            <View style={styles.Viewstitle}>
                <Text style={styles.TextTitle}>{props.title}</Text>
            </View>
            <Iicon></Iicon>
            <Text style={styles.temperature}>21°C</Text>
        </View>
    )
}

export default Card
