import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Fontisto } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApiUrl } from './config'








const OrderScreen = ({ route }) => {
    const { item } = route.params;
    const [note, setNote] = useState('');
    const [idUser, setIdUser] = useState('');
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleBackPress = () => {
        navigation.goBack();
    };

    useEffect(() => {
        getIdUser();

    }, []);
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



    const handleDateChange = (event, date) => {
        if (date !== undefined) {
            setSelectedDate(date);
        }
        setShowDatePicker(false);
    };

    const handleTimeChange = (event, date) => {
        if (date !== undefined) {
            setSelectedDate(date);
        }
        setShowTimePicker(false);
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const showTimePickerModal = () => {
        setShowTimePicker(true);
    };


    const funcOrder = () => {
        const selectedDateString = selectedDate.toLocaleDateString();
        const selectedTimeString = selectedDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    

        fetch(getApiUrl() + 'order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `idDoc=${item.id}&idAcc=${idUser}&ngayDen=${selectedDateString}&gioDen=${selectedTimeString}&ghiChu=${note}`,
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                if (result === 'access') {
                    // Hiển thị thông báo cho người dùng
                    alert('Đặt chỗ thành công!');
                    navigation.navigate('Cart', { idUser: idUser })

                } else {
                    alert('Thất bại');
                }
            })
            .catch(error => {
                console.error(error);
                // Xử lý lỗi
            });




    };



    return (
        <View className="flex-1 bg-white">
            <View className="flex-row bg-[#FF6813] h-14">
                <View className="mt-2 ml-1">
                    <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <View className=" flex-1  items-center justify-center mr-6" >
                    <Text className="text-[20px] text-[#fff] font-semibold">ĐẶT LỊCH</Text>
                </View>
            </View>
            <View className="px-2 mt-2">
                <Image source={{ uri: item.image }} className="max-w-full h-[320px]" resizeMode="stretch" />
            </View>
            <View className="px-2 flex-1 mt-2">
                <Text className="font-semibold text-[18px]">Bác sĩ: {item.name}</Text>
                <View className="flex-row">
                    <Text className="text-[15px]">Phòng khám: {item.clinic}</Text>

                </View>
                <View className="flex-row">

                    <Text className="text-[15px]">Địa chỉ: {item.address}</Text>
                </View>

                <Text className="mt-3 font-semibold text-[20px]">Thông tin đặt lịch</Text>


                <View style={styles.viewDC}>
                    <Text style={styles.textDC}>Ngày đến</Text>
                    <TouchableOpacity
                        style={styles.textDate}
                        onPress={showDatePickerModal}
                    >
                        <Text style={{ color: 'white' }}>
                            {selectedDate.toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="spinner"
                            onChange={handleDateChange}
                        />
                    )}
                </View>

                <View style={styles.viewDC}>
                    <Text style={styles.textDC}>Giờ đến</Text>
                    <TouchableOpacity style={styles.textDate}
                        onPress={showTimePickerModal} >
                        <Text style={{ color: 'white' }}>
                            {selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Text>
                    </TouchableOpacity>
                    {showTimePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="time"
                            display="spinner"
                            onChange={handleTimeChange}
                        />
                    )}

                </View>


                <TextInput
                    style={styles.input}
                    placeholder="Ghi chú"
                    value={note}
                    onChangeText={(text) => setNote(text)}

                />

            </View>
            <View className="absolute bg-white w-full bottom-0">
                <View style={styles.viewDC}>
                    <TouchableOpacity onPress={funcOrder}
                        className=" bg-[#FF6813] w-full h-12 rounded-full  i">
                        <View className="flex-1 items-center justify-center">
                            <Text className="text-[#fff] font-semibold" >ĐẶT LỊCH NGAY</Text>
                        </View>

                    </TouchableOpacity>

                </View>


            </View>


        </View >
    )
}
const styles = StyleSheet.create({
    viewDC: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,

    },
    textDC: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,

    },
    textDate: {
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'right',

    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 4,
        backgroundColor: 'gray',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 70,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
        margin: 5,
    },


});

export default OrderScreen