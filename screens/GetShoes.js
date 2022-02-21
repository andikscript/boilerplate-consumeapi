import React, { useCallback, useState } from 'react';
import {Button, View} from 'react-native';
import { deleteSepatu, getSepatu, postSepatu, updateSepatu } from '../src/services/sepatu';

const GetShoes = () => {
  const [produk, setProduk] = useState({
    nama_produk: 'Converse',
    ukuran: 44,
    stok: 20,
  });

  const get = useCallback(() => {
    getSepatu()
    .then(res => console.log(res.data.produk))
    .catch(err => console.log(err))
  }, []);

  const post = useCallback(() => {
    postSepatu(produk)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  const put = useCallback(() => {
    updateSepatu(15,produk)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  const remove = useCallback(() => {
    deleteSepatu(15)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Button title='get' onPress={get} />
      <Button title='post' onPress={post} />
      <Button title='put' onPress={put} />
      <Button title='delete' onPress={remove} />
    </View>
  )
}

export default GetShoes;