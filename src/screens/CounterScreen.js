import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    const [nomer, ubahNomer] = useState(45);

    return (
        <View>
            <Button
                title = 'Tambah'
                onPress = {() => ubahNomer(nomer + 1)}
            />
            <Button
                title = 'Kurang'
                onPress = {() => ubahNomer(nomer - 1)}
            />
            <Text>Current Count: { nomer }</Text>
        </View>
    )
}

const style = StyleSheet.create({});

export default CounterScreen;
