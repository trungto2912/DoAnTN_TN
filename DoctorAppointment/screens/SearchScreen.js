import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { getApiUrl } from './config';
import BackButton from '../components/BackButton';
const SearchScreen = () => {


    const [iduser, setIdUser] = useState('');
    const [dataDocSearch, setDataDocSearch] = useState([]);
    const [searchText, setSearchText] = useState('');
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
        fetchDocSearch();
        getIdUser();
    });
    const fetchDocSearch = () => {
        // Gọi API hoặc thực hiện các tác vụ để lấy danh sách "restaurant" thuộc "category" với ID tương ứng
        // Ví dụ:
        fetch(getApiUrl() + `searchDoc.php?searchText=${searchText}`)
            .then(response => response.json())
            .then(result => {
                setDataDocSearch(result);
            })
            .catch(error => {
                console.error(error);
            });
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

    const renderDocSearch = ({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate('DetailRes', { item: item })}>
            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                <Image source={{ uri: item.image }} style={{ resizeMode: 'contain' }} className="w-32 h-24 rounded-sm object-cover " />

                <View style={{ marginLeft: 8, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>Bs.{item.name}</Text>
                    <Text style={{ flexWrap: 'wrap' }}>{item.address}</Text>
                    <Text style={{ color: '#FF6813' }}>Đánh giá: {item.rating} <Ionicons name="star" size={15} color="#FF6813" /></Text>
                </View>
            </View>

        </TouchableOpacity>

    );
    return (
        <View className="flex-1 bg-white">
            <View className="flex-row  bg-[#FF6813] h-14">
                <View className="mt-2 ml-1">
                    <BackButton onPress={handleBackPress} />

                </View>
                <View className=" flex-1 items-center justify-center mr-6" >
                    <Text className="text-[20px] text-[#fff] font-semibold">Tìm kiếm</Text>
                </View>
            </View>
            <View className="mt-3 px-2">
                <TextInput
                    className="border-2 border-[#ccc] h-[40px] rounded-full px-5 "
                    placeholder="Tìm kiếm"
                    onChangeText={text => setSearchText(text)} // Cập nhật state khi TextInput thay đổi
                    value={searchText}

                />
            </View>
            <View className="px-2">
                <FlatList
                    data={dataDocSearch}
                    renderItem={renderDocSearch}
                    keyExtractor={item => item.id.toString()}

                />
            </View>
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

export default SearchScreen