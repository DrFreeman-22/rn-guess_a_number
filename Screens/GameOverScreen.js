import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../components/Card';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <View style={styles.summaryContainer}>
                    <Text>The Game is Over!</Text>
                    <Text>Number of rounds: {props.roundsNumber}</Text>
                    <Text>Number was: {props.userNumber}</Text>
                </View>
                    <Button title="NEW GAME" onPress={props.onRestart} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
});

export default GameOverScreen;