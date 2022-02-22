import React, { useCallback, useState } from 'react';
import {Button, View} from 'react-native';
import { deleteSepatu, getSepatu, postSepatu, updateSepatu } from '../src/services/sepatu';

const GetShoes = () => {
  const [id, setId] = useState(15);
  const [namaProduk, setNamaProduk] = useState('Converse');
  const [ukuran, setUkuran] = useState(44);
  const [stok, setStok] = useState(20);

  const get = useCallback(() => {
    getSepatu()
    .then(res => console.log(res.data.produk))
    .catch(err => console.log(err))
  }, []);

  const post = useCallback(() => {
    postSepatu({
      nama_produk: namaProduk,
      ukuran: ukuran,
      stok: stok
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  const put = useCallback(() => {
    updateSepatu(id, {
      nama_produk: namaProduk,
      ukuran: ukuran,
      stok: stok,
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  const remove = useCallback(() => {
    deleteSepatu(id)
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