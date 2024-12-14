import { View, Text, TextInput, Button, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { getApiUrl } from './config';
import BackButton from '../components/BackButton';
import axios from 'axios';
const DiagnosticScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [navigation]);
    const handleBackPress = () => {
        navigation.goBack();
    };
    const [symptoms, setSymptoms] = useState('');
    const [prediction, setPrediction] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [doctors, setDoctors] = useState([]);

    const predictDisease = async () => {
        if (!symptoms.trim()) {
            alert('Vui lòng nhập triệu chứng trước khi dự đoán.');
            return;
        }
        try {
            const response = await axios.post('http://192.168.1.7:5000/predict', { // Địa chỉ IP từ Flask server
                symptoms: symptoms,
            });
            setPrediction(response.data.predicted_disease);
            setSpecialty(response.data.predicted_specialty);

            // Sau khi có chuyên khoa, gọi API để lấy danh sách bác sĩ
            fetchDoctors(response.data.predicted_specialty);
        } catch (error) {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi khi kết nối đến API.');
        }
    };
    // Hàm lấy danh sách bác sĩ dựa vào chuyên khoa
    const fetchDoctors = async (specialty) => {

        fetch(getApiUrl() + `suggestDoc.php?specialty=${specialty}`)
            .then(response => response.json())
            .then(result => {
                setDoctors(result);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // Render từng bác sĩ trong danh sách
    const renderDoctor = ({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate('DetailRes', { item: item })}>
            <View style={styles.doctorItem}>
                <Image source={{ uri: item.image }} style={styles.doctorImage} />
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Bs. {item.name}</Text>
                    <Text>{item.address}</Text>
                    <Text style={styles.doctorRating}>
                        Đánh giá: {item.rating} <Ionicons name="star" size={15} color="#FF6813" />
                    </Text>
                </View>
            </View>

        </TouchableOpacity>

    );


    return (
        <View className="flex-1 bg-white">
            <View className="flex-row bg-[#FF6813] h-14">
                <View className="mt-2 ml-1">
                    <BackButton onPress={handleBackPress} />

                </View>
                <View className=" flex-1 items-center justify-center mr-6" >
                    <Text className="text-[20px] text-[#fff] font-semibold">CHẨN ĐOÁN</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập triệu chứng"
                    value={symptoms}
                    onChangeText={setSymptoms}
                    keyboardType="default" // Chọn bàn phím mặc định
                    autoCapitalize="none" // Không tự động viết hoa
                    autoCorrect={false}   // Tắt tự động sửa
                />

                <Button title="Dự đoán bệnh" onPress={predictDisease} />
                {prediction ? (
                    <Text style={styles.result}>
                        Bệnh dự đoán: {prediction} {'\n'}Chuyên khoa: {specialty}
                    </Text>
                ) : null}

                {doctors.length > 0 && prediction ? (
                    <View style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 16 }}>Bác sĩ gợi ý</Text>
                    </View>
                ) : null}

                {doctors.length === 0 && prediction ? (
                    <Text style={{ marginTop: 20, textAlign: 'center', color: 'gray' }}>
                        Không tìm thấy bác sĩ phù hợp.
                    </Text>
                ) : null}


                <FlatList
                    data={doctors}
                    renderItem={renderDoctor}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.doctorList}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
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
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
    },
    result: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
    },

    doctorList: {
        width: '100%',
        marginTop: 20,
    },
    doctorItem: {
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    doctorInfo: {
        marginLeft: 10,
        flex: 1,
    },
    doctorName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    doctorRating: {
        color: '#FF6813',
        marginTop: 5,
    },
});

export default DiagnosticScreen