import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const InteractiveScreen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style = {style.container}>
            <Button
                title={'Tambah'}
                onPress={() => setCount(count + 1)}
            />
            <Text>You Clicked {count} Times</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {

    }
})

export default InteractiveScreen;