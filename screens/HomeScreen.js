import React, { useEffect, useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import DeviceCard from '../components/DeviceCard';
import { getDevices, toggleDevice } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    const data = await getDevices();
    setDevices(data);
  };

  const handleToggle = async (id) => {
    await toggleDevice(id);
    loadDevices();
  };

  return (
    <View>
      <Button title="Add Device" onPress={() => navigation.navigate('Add Device')} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <DeviceCard device={item} onToggle={handleToggle} />
        )}
      />
    </View>
  );
}
