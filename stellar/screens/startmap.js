import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class startmapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Start Map Screen!</Text>
            </View>
        )
    }
}