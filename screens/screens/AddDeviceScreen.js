import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addDevice } from '../services/api';

export default function AddDeviceScreen({ navigation }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleAdd = async () => {
    await addDevice({ name, room, isOn: false });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Device Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Room" value={room} onChangeText={setRoom} />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
