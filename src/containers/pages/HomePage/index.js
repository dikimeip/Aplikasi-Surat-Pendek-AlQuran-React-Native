import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Axios from 'axios';
import ListSurat from '../../organism/ListSurat';
//import { FlatList } from 'react-native-gesture-handler';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            datas : []
        }
    }


    componentDidMount = () => {
        Axios.get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty").then(res => {
           this.setState({
                datas : res.data
           })
        }).catch(err => {
            console.log(err)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListSurat nama={item.nama} turun={item.type} surat={item.asma} />
    )


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                 <View style={{ height: 50, backgroundColor: 'grey', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20,fontWeight:'bold',color:'white' }}>DAFTAR SURAT AL-QURAN</Text>
                    </View>
                </View>
                <FlatList
                    data = {this.state.datas}
                    keyExtractor = {this.keyExtractor}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
}

export default HomePage