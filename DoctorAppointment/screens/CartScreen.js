import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Entypo, MaterialCommunityIcons ,FontAwesome} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { getApiUrl } from './config'

const CartScreen = ({ route }) => {
    const { idUser } = route.params;
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
        fetchDataCart(idUser);

    }, []);

    const fetchDataCart = (idUser) => {

        fetch(getApiUrl() + `loadCart.php?idU=${idUser}`)
            .then(response => response.json())
            .then(result => {
                setDataCart(result);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const renderCart = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailCart', { item: item })}>

            <View className="flex-row mt-2 mb-2">

                <Image source={{ uri: item.image }} resizeMode="stretch" className="w-32 h-24 rounded-sm " />
                <View className="ml-2">
                    <Text className="font-semibold text-[15px]">Bs.{item.name}</Text>
                    <Text className="">Ngày: {item.ngayDen}</Text>
                    <Text className="">Giờ: {item.gioDen}</Text>
                    <Text className="text-[#FF6813]">{item.trangthai}</Text>
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
            <View className="px-2 h-[90%]">
                <FlatList
                    data={dataCart}
                    renderItem={renderCart}
                    keyExtractor={item => item.idDC.toString()}
                />
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
                onPress={() => navigation.navigate("Home")}
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

export default CartScreen