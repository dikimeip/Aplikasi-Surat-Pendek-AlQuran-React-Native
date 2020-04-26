import React from 'react';
import { View, Text } from 'react-native';

const ListSurat = (props) => {
    return (
        <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flex: 1, marginLeft: 30, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'salmon' }}> {props.nama} </Text>
                <Text style={{ fontSize: 15 }}> {props.turun} </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center',marginRight:25 }}>
                <Text style={{ fontSize: 25 }}> {props.surat} </Text>
            </View>
        </View>
    )
}

export default ListSurat