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

import { withNavigation } from 'react-navigation';
import {Icon} from 'native-base';

import {getWishlist} from '../Publics/Redux/Action/wishlist'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';


class Wishlist extends Component {
    constructor(){
        super()
        this.state = {
            
            token: '',
            user : '',
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('token').then(res => {
            this.setState({
            
                token:res
                
            })
        })
        await AsyncStorage.getItem('userId').then(res => {
            this.setState({
                
                user:Number(res)
             
            })
        })

        let header = {
                token: this.state.token,
                user: this.state.user,
        }
        await this.props.dispatch(getWishlist(this.props.navigation.getParam('id'),header))
            
 
        
    }

    render(){
        
        return(
            <Fragment>

                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.item}>
                        {(this.props.wishlist.length > 0)? 
                        <CardWishlist data={this.props.wishlist}/>
                        :
                        <View style={{width:'100%', height:550,justifyContent:'center',alignItems:'center'}}>
                            <Icon type="EvilIcons" name="exclamation" style={{fontSize:50,color:'grey'}}/>
                            <Text style={{fontSize:16,color:'grey'}}>Wishlist  kamu Kosong!</Text>
                        </View>
                        }
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

const mapStateToProps = state =>{
    return{
        wishlist: state.wishlist.wishlistData
    }
} 

export default connect (mapStateToProps) (withNavigation(Wishlist))