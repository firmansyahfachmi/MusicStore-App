import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import harp from '../img/harp.png'
import { withNavigation } from 'react-navigation';

class Carditem extends Component {
    constructor(){
        super()
        this.state = {
            data : [
                {id: 1,name: 'Harp1'},
                {id: 2,name: 'Harp2'},
                {id: 3,name: 'Harp3'},

            ]
        }
    }

    render(){
        return(
            <Fragment>
                <View style={styles.cardhome}>
                    <FlatList
                        numColumns={2}
                        data={this.state.data}
                        renderItem={({ item }) => 
                        <TouchableOpacity activeOpacity={0.8} style={styles.carh1} onPress={() => this.props.navigation.navigate('Detail')}>
                            <View style={{ width:'100%',height:110,borderTopLeftRadius: 5,borderTopRightRadius: 5,backgroundColor:'white',alignItems:'center'}}>
                                <Image source={harp} style={{resizeMode:'contain',flex:1}}/>
                            </View>
                            <Text style={{flex:1,paddingLeft:10,paddingTop:5,fontSize:17,fontWeight:'700'}}>{item.name}</Text>
                            <Text style={{flex:1,paddingLeft:10,fontWeight:'700',color:'orange'}}>Rp. 2.000.000</Text>

                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Fragment>
        )
    }
}


const styles = StyleSheet.create({
    cardhome: {
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingTop:10,
        paddingLeft:9
    },

    carh1: {
        backgroundColor: 'whitesmoke',
        width: '47%',
        height: 170,
        borderRadius: 5,
        marginRight:5,
        marginBottom:10,
        elevation: 2,
        marginLeft: 5
    },
})

export default withNavigation(Carditem)