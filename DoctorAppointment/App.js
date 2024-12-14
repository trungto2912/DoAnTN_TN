import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import StartScreen from './screens/StartScreen';
import DetailRestaurant from './screens/DetailRestaurant';
import DetailCategory from './screens/DetailCategory';
import OrderScreen from './screens/OrderScreen';
import CartScreen from './screens/CartScreen';
import AccountScreen from './screens/AccountScreen';
import DetailCart from './screens/DetailCart';
import LoginDoc from './screens/doctor/LoginDoctor';
import HomeDoctor from './screens/doctor/HomeDoctor';
import DetailInvoi from './screens/doctor/DetailInvoi';
import AccountDoctor from './screens/doctor/AccountDoctor';
import SearchScreen from './screens/SearchScreen';
import CartDoc from './screens/doctor/CartDoc';
import BotChatScreen from './screens/BotChatScreen';
import DiagnosticScreen from './screens/DiagnosticScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer >
        <Stack.Navigator>
          
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailRes" component={DetailRestaurant} />
          <Stack.Screen name="DetailCate" component={DetailCategory} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="DetailCart" component={DetailCart} />
          <Stack.Screen name="LoginDoc" component={LoginDoc} />
          <Stack.Screen name="HomeDoc" component={HomeDoctor} />
          <Stack.Screen name="DetailInvoi" component={DetailInvoi} />
          <Stack.Screen name="AccDoc" component={AccountDoctor} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="CartDoc" component={CartDoc} />
          <Stack.Screen name="ChatBot" component={BotChatScreen} />
          <Stack.Screen name="Diagnostic" component={DiagnosticScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
