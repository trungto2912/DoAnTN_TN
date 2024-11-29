import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { getApiUrl } from '../config'


const DetailInvoi = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const [idDoc, setIdDoc] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const handleBackPress = () => {
        navigation.goBack();
    };

    useEffect(() => {

        getIdDoc();
    }, []);
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

    const CancelBooking = () => {

        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn hủy lịch hẹn?',
            [
                {
                    text: 'Không',
                    style: 'cancel',
                },
                {
                    text: 'Hủy lịch',
                    onPress: async () => {
                        fetch(getApiUrl() + `deleteCart.php?cartID=${item.idDC}`)
                            .then(response => response.json())
                            .then(result => {
                                if (result.status === 'success') {
                                    alert(result.message);
                                    navigation.navigate("HomeDoc", { idD: idDoc});
                                } else {
                                    alert(result.message);
                                }
                            })
                            .catch(error => {
                                console.error(error);
                                // Xử lý lỗi
                            })
                    },
                },
            ]
        );

    };
    const ApproveBooking = () => {

        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn duyệt lịch hẹn?',
            [
                {
                    text: 'Không',
                    style: 'cancel',
                },
                {
                    text: 'Duyệt lịch',
                    onPress: async () => {
                        fetch(getApiUrl() + `approveInvoi.php?cartID=${item.idDC}`)
                            .then(response => response.json())
                            .then(result => {
                                if (result.status === 'success') {
                                    alert(result.message);
                                    navigation.navigate("HomeDoc", { idD: idDoc});
                                } else {
                                    alert(result.message);
                                }
                            })
                            .catch(error => {
                                console.error(error);
                                // Xử lý lỗi
                            })
                    },
                },
            ]
        );

    };
    const isApproved = item.trangthai === 'Đã duyệt';
    const cancelButtonStyle = isApproved ? styles.cancelButtonApproved : styles.cancelButton;
    const cancelButtonOnPress = isApproved ? null : CancelBooking;
    const approveButtonStyle = isApproved ? styles.cancelButtonApproved : styles.cancelButton;
    const approveButtonOnPress = isApproved ? null : ApproveBooking;

    return (

        <View className="flex-1 bg-white">

            <View className="">
                <Image source={{ uri: item.image }} className="max-w-full h-[320px]" resizeMode="stretch" />
            </View>
            <View className="mt-7 ml-1 absolute">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back" size={34} color="#FF6813" />
                </TouchableOpacity>
            </View>
            <View className="px-2 flex-1 mt-2">
                <Text className="font-semibold text-[18px]">Bác sĩ: {item.name}</Text>
                <View className="flex-row mt-2">
                    <Ionicons name="home" size={20} color="black" />
                    <Text className="ml-2">Phòng khám: {item.clinic}</Text>
                </View>
                <View className="flex-row mt-2">
                    <Ionicons name="location" size={20} color="black" />
                    <Text className="ml-2 mr-2">Địa chỉ: {item.address}</Text>
                </View>
                <View className="flex-row mt-2">
                    <Ionicons name="call" size={20} color="black" />
                    <Text className="ml-2 mr-2">Diện thoại: {item.phone}</Text>
                </View>
               
                <Text className="mt-2 font-semibold text-[18px]">Thông tin lịch hẹn</Text>
                <View className="flex-row mt-2">
                    <Text className="ml-2">Tên bệnh nhân:</Text>
                    <Text className="ml-2 font-semibold">{item.nameAcc}</Text>
                </View>
                <View className="flex-row mt-2">
                    <Text className="ml-2">Số điện thoại:</Text>
                    <Text className="ml-2 font-semibold">{item.phoneAcc}</Text>
                </View>
                
                <View className="flex-row mt-2">
                    <Text className="ml-2">Ngày giờ đặt:</Text>
                    <Text className="ml-2 font-semibold">{item.gioDen} {item.ngayDen} </Text>
                </View>
                
                <View className="flex-row mt-2">
                    <Text className="ml-2">Trạng thái:</Text>
                    <Text className="ml-2 font-semibold">{item.trangthai}</Text>
                </View>
                <View className="flex-row mt-2">
                    <Text className="ml-2">Ghi chú:</Text>
                    <Text className="ml-2 font-semibold">{item.ghiChu}</Text>
                </View>


            </View>
            <View className="absolute bg-white flex-row w-full bottom-1">
                <View className="items-end ml-36">
                    <TouchableOpacity onPress={cancelButtonOnPress} style={cancelButtonStyle}
                        className=" bg-[#FF6813] w-32 h-10 rounded-full">
                        <View className="flex-1 items-center justify-center">
                            <Text className="text-[#fff] font-semibold ml-2" >HỦY LỊCH HẸN   </Text>
                        </View>

                    </TouchableOpacity>

                </View>
                <View className="items-end ml-2">
                    <TouchableOpacity onPress={approveButtonOnPress} style={approveButtonStyle}
                        className=" bg-[#FF6813] w-32 h-10 rounded-full">
                        <View className="flex-1 items-center justify-center">
                            <Text className="text-[#fff] font-semibold ml-2" >DUYỆT LỊCH HẸN   </Text>
                        </View>

                    </TouchableOpacity>

                </View>


            </View>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('CartDoc', { idD: idDoc })}
                className="absolute w-14 h-14 right-2 bottom-32 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
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
                className="absolute w-14 h-14 right-2 bottom-16 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
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

    );
}
const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: '#FF6813',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonApproved: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default DetailInvoi