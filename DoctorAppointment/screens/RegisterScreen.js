import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, TextBase } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { getApiUrl } from './config'


const RegisterScreen = () => {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = () => {
    navigation.navigate("Login")
  
  };
  const handleRegis = () => {

    if (!userName || !phone || !password || !Repassword) {
      // Hiển thị thông báo yêu cầu nhập lại
      alert('Vui lòng nhập đủ thông tin.');
      return;
    }
  
    // Kiểm tra xem mật khẩu có trùng khớp hay không
    if (password !== Repassword) {
      // Hiển thị thông báo mật khẩu không trùng nhau
      alert('Mật khẩu không trùng nhau.');
      return;
    }
  
    // Gửi dữ liệu đăng ký đến API backend
    fetch(getApiUrl()+'register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `user=${userName}&sdt=${phone}&pass=${password}`,
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        if (result === 'Số điện thoại đã tồn tại!') {
          // Hiển thị thông báo cho người dùng
          alert(result);
        } else if (result === 'Đăng ký thành công!') {
          alert(result);
          navigation.navigate("Login")

        } else {
          // Xử lý lỗi
        }
      })
      .catch(error => {
        console.error(error);
        // Xử lý lỗi
      });
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View style={styles.container}>
        <Text style={styles.title}>FLPut App</Text>
        <Text style={styles.title1}>Chào bạn</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên tài khoản"
          value={userName}
          onChangeText={(text) => setUserName(text)}

        />
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
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          value={Repassword}
          onChangeText={(text) => setRePassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegis}>
          <View className="flex-1 items-center justify-center">
            <Text style={styles.buttonText}>Đăng ký</Text>
          </View>

        </TouchableOpacity>
        <View className="flex-row mt-2">
          <Text>Đã có có tài khoản? </Text>
          <Text onPress={handleLogin} className="text-[#FF6813] font-semibold">Đăng nhập</Text>
        </View>
      </View>
      <View className="w-[70px] h-[70px] bg-[#ff9980] absolute rounded-full top-4 left-10"/>
      <View className="w-[40px] h-[40px] bg-[#FF6813] absolute rounded-full top-20 left-2"/>
      <View className="w-[70px] h-[70px] bg-[#ff9980] absolute rounded-full bottom-4 right-10"/>
      <View className="w-[40px] h-[40px] bg-[#FF6813] absolute rounded-full bottom-20 right-2"/>
    </SafeAreaView>
  )
}
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
    fontSize:16,
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisterScreen