import React from 'react';
import {
  Catalog
} from './src/components/Catalog'
import { 
  View,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop:40, paddingHorizontal:20, paddingBottom:10, flex:1}} >
      <Catalog/>
    </View>
  )
}