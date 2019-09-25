import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import CardWishlist from '../components/cardWishlist'

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';



class Wishlist extends Component {
    render(){
        return(
            <Fragment>
                {/* <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrowleft" size={28} color="#fff"/>
                    </TouchableOpacity>
                
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Wishlist</Text>
                    </View>
              
                </View> */}
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.item}>
                        <CardWishlist/>
                    </View>
                    
            
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F5D372',
        width: '100%',
        height: 60,
        elevation: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    item: {
        width: '100%'
    },

})

export default withNavigation(Wishlist)