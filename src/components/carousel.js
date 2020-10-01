import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';

export default class Carousel extends Component {
    render(){
        return(
            <Fragment>
                <View style = {styles.carousel} >
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                        <View style={[styles.carl1,{backgroundColor: '#f2891f',} ]}>
                           <Text style={{fontSize: 23,
                            color:'white',
                            fontWeight:'700'}}>Promo</Text>
                        </View>
                        <View style={[styles.carl1,{backgroundColor: '#24add6',} ]}>
                            <Text style={{fontSize: 23,
                            color:'white',
                            fontWeight:'700'}}>New Instrument</Text>
                        </View>
                        <View style={[styles.carl1,{backgroundColor: '#ffc012',} ]}>
                            <Text style={{fontSize: 23,
                            color:'white',
                            fontWeight:'700'}}>Discounted %</Text>
                        </View>
                    </ScrollView>
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    carousel: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
        paddingLeft: 9,
    },

    carl1: {
        
        width: 300,
        height: 130,
        borderRadius: 5,
        marginRight: 10,
        elevation: 3,
        marginBottom:5,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems:'center'
        
    },
})