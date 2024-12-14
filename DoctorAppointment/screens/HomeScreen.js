import { View, Text, ScrollView, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { getApiUrl } from './config'


const HomeScreen = () => {
  const [dataTop, setDataTop] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [userName, setUserName] = useState('');
  const [iduser, setIdUser] = useState('');


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
    fetchDataTop();
    fetchDataCate();
    getUserName();
    getIdUser();
  }, []);

  const fetchDataTop = () => {
    fetch(getApiUrl() + 'homeListTop.php')
      .then(response => response.json())
      .then(result => {
        setDataTop(result);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const fetchDataCate = () => {
    fetch(getApiUrl() + 'homeCate.php')
      .then(response => response.json())
      .then(result => {
        setDataCate(result);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const renderItemCate = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCate', { itemCate: item })}>
      <View className="flex-row">
        <View className="flex-1 mt-2 w-24 h-28 items-center ">
          <Image source={{ uri: item.image }}
            className="w-20 h-20 rounded-full object-cover "
          />
          <Text className="mt-2 font-semibold">{item.name}</Text>
        </View>


      </View>
    </TouchableOpacity>
  );
  const renderItemTop = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailRes', { item: item })}>
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
        <Image source={{ uri: item.image }} style={{ resizeMode: 'contain' }} className="w-32 h-24 rounded-sm " resizeMode="stretch" />

        <View style={{ marginLeft: 8, flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>Bs.{item.name}</Text>
          <Text style={{ flexWrap: 'wrap' }}>{item.address}</Text>
          <Text style={{ color: '#FF6813' }}>Đánh giá: {item.rating} <Ionicons name="star" size={15} color="#FF6813" /></Text>
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
  const getIdUser = async () => {
    try {
      const value = await AsyncStorage.getItem('idUser');
      if (value !== null) {
        setIdUser(value);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View className="bg-white flex-1 px-6">
      <View >
        <View className="flex-row mt-7">
          <View>
            <Text className="text-[#FF6813] text-[24px] font-semibold">FLPut App</Text>
            <Text className="text-[18px]">Hi {userName}</Text>
          </View>
          <View className="right-0 absolute mt-2">
            <Image source={require('../assets/logoapp.png')} className="w-12 h-12 rounded-full" />
          </View>
        </View>
        <View className="mt-3">
          <Image source={require('../assets/banner_doctor.jpg')} className="max-w-full h-[160px] rounded-[40px]" />
        </View>
        
        <View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderWidth: 2,
              borderColor: '#ccc',
              height: 40,
              borderRadius: 20,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Search')}
          >
            <Text className="text-[#ccc]">Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        <Text className="mt-3 text-[18px] font-semibold">Danh Mục</Text>
        <FlatList
          horizontal={true} // Thiết lập FlatList ngang
          data={dataCate}
          renderItem={renderItemCate}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.container}
        />


      </View>
      <Text className="mt-2 text-[18px] font-semibold">Top Bác sĩ</Text>
      <FlatList
        data={dataTop}
        renderItem={renderItemTop}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Diagnostic')}
        className="absolute w-14 h-14 right-2 bottom-40 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center ">
        <Animatable.View
          animation={"pulse"}
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="w-12 h-12 items-center justify-center rounded-full bg-[#FF6813]">
          <FontAwesome name="comments" size={20} color="white" />
        </Animatable.View>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cart', { idUser: iduser })}
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
        onPress={() => navigation.navigate("Account")}
        className="absolute w-14 h-14 right-2 bottom-8 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
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
export default HomeScreen