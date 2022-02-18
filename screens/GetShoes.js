import axios from 'axios';
import React, { useCallback } from 'react';
import {Button, View} from 'react-native';

const GetShoes = () => {
  const instance = axios.create({
    baseURL: 'http://192.168.1.6:8000/api',
    timeout: 1000,
    headers: {
      'Content-Type': 'application-json',
      'X-Costum-Header': 'foobar'
    }
  });

  const get = useCallback(() => {
    instance
      .get('/v2/produk')
      .then(res => console.log(res.data.produk))
      .catch(err => console.log(err))
      .then(() => console.log('always executed'));
  }, [])

  return (
    <View>
      <Button title='get' onPress={get} />
    </View>
  )
}

export default GetShoes;