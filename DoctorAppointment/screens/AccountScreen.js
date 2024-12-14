import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';



const AccountScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [iduser, setIdUser] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const handleBackPress = () => {
        navigation.goBack();
    };
    useEffect(() => {
        getUserName();
        getPhone();
        getIdUser();
    }, []);
    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('userName');
            if (value !== null) {
                setUser(value);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const getPhone = async () => {
        try {
            const value = await AsyncStorage.getItem('phone');
            if (value !== null) {
                setPhone(value);
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
    const funcDangxuat = () => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn đăng xuất?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đăng xuất',
                    onPress: async () => {
                        try {
                            // Xóa các mục đã lưu trong AsyncStorage
                            await AsyncStorage.removeItem('userName');
                            await AsyncStorage.removeItem('idUser');
                            await AsyncStorage.removeItem('phone');
                            await AsyncStorage.removeItem('password');

                            alert('Đăng xuất thành công');
                            // Điều hướng đến trang đăng nhập
                            navigation.navigate('Login');
                        } catch (error) {
                            console.error(error);
                            // Xử lý lỗi
                        }
                    },
                },
            ]
        );

    };
    return (

        <View className="flex-1 bg-white">
            <View className=" ml-2">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back" size={34} color="black" />
                </TouchableOpacity>
            </View>

            <View className="items-center justify-center mt-16">
                <Image source={require('../assets/acc.png')} className="w-32 h-32 rounded-full" />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Tên tài khoản"
                    value={user}


                />
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    value={phone}


                />

                <View className="flex-1 mt-2 items-center">
                    <Text onPress={funcDangxuat}
                        className="text-[#FF6813] font-semibold text-[18px]">Đăng xuất</Text>
                    <Text className="mt-3">Phiển bản 1.0.0 (bản test)</Text>

                </View>
            </View>
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
                onPress={() => navigation.navigate("Home")}
                className="absolute w-14 h-14 right-2 bottom-8 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center ">
                <Animatable.View
                    animation={"pulse"}
                    easing={"ease-in-out"}
                    iterationCount={"infinite"}
                    className="w-12 h-12 items-center justify-center rounded-full bg-[#FF6813]">
                    <Entypo name="home" size={20} color="white" />
                </Animatable.View>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
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

});

export default AccountScreen