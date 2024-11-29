import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, BackHandler, ToastAndroid } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getApiUrl } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginDoctor = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

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




  const handleLogin = () => {
    if (!phone || !password) {
      // Hiển thị thông báo yêu cầu nhập lại typeof phone !== 'string' phone.includes('@')
      alert('Vui lòng nhập đủ thông tin.');//isNaN(phone)
      return;
    }
    // Gửi dữ liệu đăng ký đến API backend
    fetch(getApiUrl() + 'loginDoc.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `sdt=${phone}&pass=${password}`,
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          const userName = result.name;
          const id = result.idDoc;

          AsyncStorage.setItem('userName', userName);
          AsyncStorage.setItem('idDoc', id);
          AsyncStorage.setItem('phone', phone);
          alert('Đăng nhập thành công');
          navigation.navigate("HomeDoc",{ idD: id })
        } else {
          alert('Đăng nhập không thành công!!');
          return;
        }
      })
      .catch(error => {
        console.error(error);
        // Xử lý lỗi
      });
  };
  
  const handleAcc = () => {
    navigation.navigate("Login")
  };



  return (

    <SafeAreaView className="flex-1 bg-white">
      <View style={styles.container}>
        <Text style={styles.title}>FLPut App</Text>
        <Text style={styles.title1}>Chào bạn</Text>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          value={phone}
          onChangeText={(text) => setPhone(text)}

          keyboardType='phone-pad'
          textContentType='telephoneNumber'
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <View className="flex-1 items-center justify-center">
            <Text style={styles.buttonText}>Đăng Nhập</Text>
          </View>

        </TouchableOpacity>
        <View className="flex-row mt-2">
          <Text onPress={handleAcc} className="text-[#FF6813] font-semibold">Đăng nhập bệnh nhân</Text>
        </View>
      </View>
      <View className="w-[70px] h-[70px] bg-[#ff9980] absolute rounded-full top-4 left-10" />
      <View className="w-[40px] h-[40px] bg-[#FF6813] absolute rounded-full top-20 left-2" />
      <View className="w-[70px] h-[70px] bg-[#ff9980] absolute rounded-full bottom-4 right-10" />
      <View className="w-[40px] h-[40px] bg-[#FF6813] absolute rounded-full bottom-20 right-2" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6813',
  },
  title1: {
    fontSize: 20,
    marginBottom: 40,

  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6813',
    width: '80%',
    height: 50,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  buttonText: {
    fontSize: 16,
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginDoctor;
