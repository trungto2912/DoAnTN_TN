import { View, Text, ScrollView, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { Ionicons , FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { getApiUrl } from '../config'


const HomeDoctor = ({ route }) => {
  const { idD } = route.params;
  const [dataUnap, setDataUnap] = useState([]);
  const [dataToday, setDataToday] = useState([]);
  const [userName, setUserName] = useState('');
  const [idDoc, setIdDoc] = useState('');


  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let lastBackPressed = 0;

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          // Kiểm tra thời gian giữa các lần nhấn nút back
          if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            // Thoát ứng dụng nếu nhấn đúp nút back trong khoảng thời gian 2 giây
            BackHandler.exitApp();
          } else {
            // Hiển thị thông báo để nhấn đúp nút back để thoát
            ToastAndroid.show('Nhấn back một lần nữa để thoát', ToastAndroid.SHORT);
            // Cập nhật thời gian nhấn cuối cùng
            lastBackPressed = Date.now();
          }
          return true; // Ngăn chặn hành vi mặc định của nút back
        }
      };

      // Đăng ký lắng nghe sự kiện nhấn nút back
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Hủy đăng ký khi màn hình không còn focus
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDataUnap(idD);
      fetchDataToday(idD);
      getUserName();
      getIdDoc();
    });
  
    return unsubscribe;
  }, [navigation, idD]);
 

  const fetchDataUnap = (idD) => {
    fetch(getApiUrl() + `docListUnapproved.php?idD=${idD}`)
      .then(response => response.json())
      .then(result => {
        setDataUnap(result);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const fetchDataToday = (idD) => {
    fetch(getApiUrl() + `docListInvoiToday.php?idD=${idD}`)
      .then(response => response.json())
      .then(result => {
        setDataToday(result);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const renderItemToday = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailInvoi', { item: item})}>
      <View className="flex-row border-2 border-[#008000] mr-2">
        <View className="flex-1 mt-2 w-48 h-24 ">
          <Text className="ml-2 font-semibold">Bệnh nhân: {item.name}</Text>
          <Text className="ml-2">Ngày hẹn: {item.ngayDen}</Text>
          <Text className="ml-2">Giờ hẹn: {item.gioDen}</Text>
          <Text className="ml-2" style={{ color: '#FF6813' }}>{item.trangthai}</Text>
          
        </View>


      </View>
    </TouchableOpacity>
  );
  const renderItemUnap = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailInvoi', { item: item })}>
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5}} className="border-2 border-[#008000] ">
     
  
        <View style={{ marginLeft: 8, flex: 1 ,marginTop:7, marginBottom:7}}>
          <Text style={{ fontWeight: 'bold' }}>Bệnh Nhân: {item.nameAcc}</Text>
          <Text >Số điện thoại: {item.phoneAcc}</Text>
          <Text style={{ flexWrap: 'wrap' }}>Ngày hẹn: {item.ngayDen} - Giờ hẹn: {item.gioDen}</Text>

          <Text style={{ color: '#FF6813' }}>{item.trangthai}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setUserName(value);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getIdDoc = async () => {
    try {
      const value = await AsyncStorage.getItem('idDoc');
      if (value !== null) {
        setIdDoc(value);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View className="bg-white flex-1 px-6">
      <View >
        <View className="flex-row mt-8">
          <View>
            <Text className="text-[#FF6813] text-[24px] font-semibold">FLPut App</Text>
            <Text className="text-[18px]">Hi Bác sĩ {userName}</Text>
          </View>
          <View className="right-0 absolute mt-2">
            <Image source={require('../../assets/logoapp.png')} className="w-12 h-12 rounded-full" />
          </View>
        </View>
        <View className="mt-3">
          <Image source={require('../../assets/banner_doctor.jpg')} className="max-w-full h-[160px] rounded-[40px]" />
        </View>
        
        <Text className="mt-3 text-[18px] font-semibold">Lịch hẹn hôm nay</Text>
        <FlatList
          horizontal={true} // Thiết lập FlatList ngang
          data={dataToday}
          renderItem={renderItemToday}
          keyExtractor={item => item.idDC.toString()}
          contentContainerStyle={styles.container}
        />


      </View>
      <Text className="mt-2 text-[18px] font-semibold">Lịch hẹn chưa duyệt</Text>
      <FlatList
        data={dataUnap}
        renderItem={renderItemUnap}
        keyExtractor={item => item.idDC.toString()}
        contentContainerStyle={styles.container}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('CartDoc', { idD: idD })}
        className="absolute w-14 h-14 right-2 bottom-24 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center ">
        <Animatable.View
          animation={"pulse"}
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="w-12 h-12 items-center justify-center rounded-full bg-[#FF6813]">
          <FontAwesome name="shopping-cart" size={20} color="white" />
        </Animatable.View>

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccDoc")}
        className="absolute w-14 h-14 right-2 bottom-7 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center ">
        <Animatable.View
          animation={"pulse"}
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="w-12 h-12 items-center justify-center rounded-full bg-[#FF6813]">
          <MaterialCommunityIcons name="account" size={20} color="white" />
        </Animatable.View>

      </TouchableOpacity>



    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },

});
export default HomeDoctor