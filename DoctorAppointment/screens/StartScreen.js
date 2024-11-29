import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-1 relative items-center justify-center">
        <ImageBackground source={require('../assets/bg_splash.jpg')} className="w-full h-full" resizeMode="stretch" />

        <View className="absolute flex-1 justify-center items-center" >

          <Animatable.Image animation="fadeIn"
            easing="ease-in-out" source={require('../assets/logo2.png')} className="w-200 h-200 rounded-full" />
        </View>

        <TouchableOpacity 
        onPress={()=> navigation.navigate("Login")}
        className="absolute w-24 h-24 bottom-16 border-l-2 border-r-2 border-t-4 border-[#FF6813] 
        rounded-full items-center justify-center">

          <Animatable.View
            animation={"pulse"}
            easing={"ease-in-out"}
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#FF6813]">
            <Text className="text-gray-50 text-[28px] font-semibold">Go</Text>
          </Animatable.View>

        </TouchableOpacity>

      </View>



    </SafeAreaView>
  )
}

export default StartScreen