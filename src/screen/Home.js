import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import {getCategory} from '../Publics/Redux/Action/category'

import Icon from 'react-native-vector-icons/AntDesign';

import Carousel from '../components/carousel'
import Category from '../components/category'
import CardHome from '../components/cardHome'
import AsyncStorage from '@react-native-community/async-storage';


class Home extends Component {
    constructor(){
        super()
        this.state = {
            userid : '',
            search: ''
        }
    }

    componentDidMount = async () =>{
        await this.props.dispatch(getCategory())
        await AsyncStorage.getItem('userId').then(res => {
            this.setState({userid:Number(res)})
        })
    }

    handleChange = async (value) => {
       await this.setState({search: value});
    };

    redirect = () =>{
        this.props.navigation.navigate('item', {name:this.state.search})
    }

    render(){
        
        return(
            <Fragment>
                <View style = {styles.header} >
                    <View style={{width:'60%',paddingRight:10}}>
                    <TextInput
                        style={{
                        borderRadius: 5,
                        padding: 10,
                        backgroundColor: 'white',
                        marginLeft: 3
                        }}
                        placeholder="Search.."
                        onChangeText={(text)=>this.handleChange(text)}
                        onSubmitEditing={() => this.redirect()}
                    />
                    </View>
                    <View style={{width:'40%', flexDirection:'row'}}>
                    {
                        (this.props.user.length < 1)?

                        <TouchableOpacity activeOpacity={0.8} style={{flex:1,alignItems:'center',justifyContent:"center"}} onPress={() => this.props.navigation.navigate('ProfileTab')}>
                            <Icon name='shoppingcart' size={28} color="#ffffff" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.8} style={{flex:1,alignItems:'center',justifyContent:"center"}} onPress={() => this.props.navigation.navigate('Keranjang',{id:this.state.userid})}>
                        <Icon name='shoppingcart' size={28} color="#ffffff" />
                    </TouchableOpacity>
                    }
                        
                        <TouchableOpacity activeOpacity={0.8} style={{flex:1,alignItems:'center',justifyContent:"center"}} onPress={() => this.props.navigation.navigate('Wishlist', {id:this.state.userid} )}>
                            <Icon name="heart" size={25} color="#ffffff"/>
                        </TouchableOpacity>
                        

                    </View>
                </View>
                
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:0}}>
                      
                        <View>
                            <Carousel/>
                        </View>
                            
                        <View style={{marginTop:15}}>
                            <Text style={styles.title}>Kategori</Text>
                            <Category data={this.props.category}/>
                        </View>

                        <View style={{marginTop:15}}>
                            <Text style={styles.title}>Penawaran Terbaru</Text>

                            <CardHome/>
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
        flexDirection: 'row'
    },

    title: {
        fontSize:20,
        width: '100%',
        padding: 12,
        fontWeight: '700',
        color: 'black'
    },


})

const mapStateToProps = state => {
    return{
        category:state.category.categoryData,
        user:state.user.currentUser
    }
}

export default connect (mapStateToProps) (Home)
