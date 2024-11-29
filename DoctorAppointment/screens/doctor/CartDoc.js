import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { getApiUrl } from '../config'

const CartDoc = ({ route }) => {
    const { idD } = route.params;
    const [dataCart, setDataCart] = useState([]);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const handleBackPress = () => {
        navigation.goBack();
    };
    useEffect(() => {
        fetchDataCart(idD);

    }, []);

    const fetchDataCart = (idD) => {

        fetch(getApiUrl() + `loadCartDoc.php?idD=${idD}`)
            .then(response => response.json())
            .then(result => {
                setDataCart(result);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const renderCart = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailInvoi', { item: item })}>
            <View style={{
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 5,
                borderWidth: 2,
                borderColor: item.trangthai === 'Đã duyệt' ? '#008000' : '#FF0000',
            }}>
                <View style={{ marginLeft: 8, flex: 1, marginTop: 7, marginBottom: 7 }}>
                    <Text style={{ fontWeight: 'bold' }}>Bệnh Nhân: {item.nameAcc}</Text>
                    <Text>Số điện thoại: {item.phoneAcc}</Text>
                    <Text style={{ flexWrap: 'wrap' }}>Ngày hẹn: {item.ngayDen} - Giờ hẹn: {item.gioDen}</Text>
                    <Text style={{ color: '#FF6813' }}>{item.trangthai}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
    return (
        <View className="flex-1 bg-white">
            <View className="flex-row bg-[#FF6813] h-14">
                <View className="mt-2 ml-1">
                    <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <View className=" flex-1 items-center justify-center mr-6" >
                    <Text className="text-[20px] text-[#fff] font-semibold">LỊCH HẸN</Text>
                </View>
            </View>
            <View className="px-2">
                <FlatList
                    data={dataCart}
                    renderItem={renderCart}
                    keyExtractor={item => item.idDC.toString()}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeDoc",{idD: idD})}
                className="absolute w-14 h-14 right-2 bottom-24 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center ">
                <Animatable.View
                    animation={"pulse"}
                    easing={"ease-in-out"}
                    iterationCount={"infinite"}
                    className="w-12 h-12 items-center justify-center rounded-full bg-[#FF6813]">
                    <Entypo name="home" size={20} color="white" />
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

export default CartDoc