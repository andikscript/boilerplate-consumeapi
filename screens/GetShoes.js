import React, { useCallback, useState } from 'react';
import {Button, View} from 'react-native';
import { getSepatu, postSepatu } from '../src/services/sepatu';

const GetShoes = () => {
  const [produk, setProduk] = useState('Converse');
  const [ukuran, setUkuran] = useState(41);
  const [stok, setStok] = useState(10);

  const get = useCallback(() => {
    getSepatu()
    .then(res => console.log(res.data.produk))
    .catch(err => console.log(err))
  }, []);

  // post nya masih error dibagian body nya null
  const post = useCallback(() => {
    postSepatu({
      nama_produk: produk,
      ukuran: ukuran,
      stok: stok,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Button title='get' onPress={get} />
      <Button title='post' onPress={post} />
    </View>
  )
}

export default GetShoes;