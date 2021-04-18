import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/Card';
import { Colors } from '../configs/Colors';
import InforCard from '../components/InforCard';
import GetLocation from 'react-native-get-location';
import getCurrentWeather from '../API/ConsultAPI';

const MainScreen = () => {
  const [currenTemperature, setcurrenTemperature] = useState('30')
  const [location, setlocation] = useState('Q9,Hồ chí minh')
  const [wind, setwind] = useState(65)
  const [humidity, sethumidity] = useState(80)
  const [MaxTemp, setMaxTemp] = useState(38)
  const [MinTemp, setMinTemp] = useState(21)
  const [currenhours, setcurrenhours] = useState('13:00')
  const [locationCoords, setlocationCoords] = useState([])

  const [toggle, settoggle] = useState(true)
  const [TextToggle, setTextToggle] = useState(true)
  const Changtheme1 = toggle ? 'black' : 'white'
  const Changtheme2 = toggle ? 'white' : 'black'
  const changbarstyle = toggle ? 'dark-content' : 'light-content'
  const Changthem = () => {
    setTextToggle(!TextToggle)
    settoggle(!toggle)
  }

  async function setcurrenweather() {
    await _Gettloca()

    let date = new Date()
    setcurrenhours(date.getHours() + ':' + date.getMinutes())

    const data = await getCurrentWeather(locationCoords)
    //
    setcurrenTemperature(convertKenvinInC(data[0]))
    setMinTemp(convertKenvinInC(data[1]))
    setMaxTemp(convertKenvinInC(data[2]))
    setlocation(data[3])
    setwind(data[4])
    sethumidity([5])
  }

  function convertKenvinInC(kelvin) {
    return parseInt(kelvin - 273)
  }

  const _Gettloca = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(loma => {
        setlocationCoords(loma)
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  useEffect(() => {
    _Gettloca()
    console.log(getCurrentWeather(locationCoords))
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: Changtheme2
    },
    TextTemperatute: {
      color: Changtheme1,
      fontSize: 40,
    },
    RefreshButton: {
      margin: 20,
      alignSelf: 'flex-start'
    },
    ViewTemperatute: {
      flexDirection: 'row',
      justifyContent: "center"
    },
    header: {
      width: "100%",
    },
    card: {
      flexDirection: 'row'
    },
    TextChangthem: {
      color: Changtheme1
    },
    infor: {
      height: 180,
      width: '90%',
      margin: 10,
      backgroundColor: "#333333",
      borderRadius: 10,
      alignItems: 'center',
    },
    TextInformation: {
      color: Colors.white,
      fontSize: 20,
    },
    inforcard: {
      flexDirection: "row",
      flexWrap: 'wrap'
    },
    ViewVhangthem: {
      height: 50,
      width: "90%",
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    ViewToggle: {
      height: 30,
      width: 55,
      borderRadius: 15,
      backgroundColor: toggle ? "#333333" : "#fff",
      justifyContent: 'center',
      alignItems: toggle ? 'flex-start' : 'flex-end',
    },
    touchToggle: {
      height: 25,
      width: 25,
      backgroundColor: toggle ? '#fff' : '#000',
      borderRadius: 15,
      margin: 5
    }
  })
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Changtheme2}
        barStyle={changbarstyle}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.RefreshButton} onPress={() => setcurrenweather()}>
          <Icon name='refresh' size={24} color={Changtheme1} />
        </TouchableOpacity>
      </View>
      <Icon name='weather-sunny' size={40} color={Colors.orange1} />
      <View style={styles.ViewTemperatute}>
        <Text style={styles.TextTemperatute}>{currenTemperature}</Text>
        <Text style={[styles.TextTemperatute, { fontSize: 22, marginTop: 15 }]}>°C</Text>
      </View>

      <Text style={styles.TextChangthem}>{location} ,{currenhours}</Text>

      <View style={styles.card}>
        <Card title='Sáng' backgroundColor={toggle ? Colors.orange1 : Colors.orange2} icon={'morning'} />
        <Card title='Chiều' backgroundColor={toggle ? Colors.yellow1 : Colors.yellow2} icon={'afternoon'} />
        <Card title='Tối' backgroundColor={toggle ? Colors.blue1 : Colors.blue2} icon={'night'} />
      </View>

      <View style={styles.infor}>
        <Text style={styles.TextInformation}>Thông tin chi tiết</Text>
        <View style={styles.inforcard}>
          <InforCard title={'Gió'} value={wind + 'km/h'} />
          <InforCard title={'Độ ẩm'} value={humidity + 'km/h'} />
          <InforCard title={'Nhiệt độ cao nhất'} value={MaxTemp + '°C'} />
          <InforCard title={'Nhiệt độ thấp nhất'} value={MinTemp + '°C'} />
        </View>

      </View>
      <View style={styles.ViewVhangthem}>
        <View style={styles.ViewToggle}>
          <TouchableOpacity style={styles.touchToggle} onPress={Changthem}>
            <Text style={styles.TextChangthem}>{TextToggle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;