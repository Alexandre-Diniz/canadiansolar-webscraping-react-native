import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import axios from 'axios'

axios.defaults.baseURL = 'http://http://192.168.43.159:3000/'

export class Catalog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    fetch('http://192.168.43.159:3000/api/scraping')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          }
        )
        console.log(responseJson[0].modelo)
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, backgroundColor: '#DDD' }}>
        </View>
      )
    }
    const iter = this.state.dataSource.map(item => {
      return (
        <View
          key={item.modelo}
          style={{
            borderRadius: 10,
            marginVertical: 5,
            backgroundColor: '#DDD',
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }} > {item.modelo} </Text>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[0]} </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[1]} </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[2]} </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[3]} </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[4]} </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection:'row' }} >
            <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: '#000', marginRight: 5 }} />
            <Text style={{fontSize:12}} > {item.data[5]} </Text>
          </View>
        </View>
      )
    })

    return (
      <View style={{ flex: 1, }}>
        <ScrollView>
          {iter}
        </ScrollView>
      </View>
    )
  }
}