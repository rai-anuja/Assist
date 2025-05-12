import React from 'react';
import { View, Text, Switch } from 'react-native';

export default function DeviceCard({ device, onToggle }) {
  return (
    <View style={{ padding: 16, borderBottomWidth: 1 }}>
      <Text>{device.name} ({device.room})</Text>
      <Switch
        value={device.isOn}
        onValueChange={() => onToggle(device._id)}
      />
    </View>
  );
}
