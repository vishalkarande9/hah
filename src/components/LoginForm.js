import React , {Component } from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {  Header  } from 'react-native-elements';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser } from '../actions';

import {colors, fonts, padding, dimensions} from '../styles/base.js'

class LoginForm extends Component {
    onEmailChange(text){
      this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;

        this.props.loginUser({email,password});
    } 

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                       {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
           return<Spinner size="large"/> 
        } else {
            return(
                <Button
                    objStyle = {styles.signInButton}
                    textStyle = {styles.signInText}
                    onButtonPress={this.onButtonPress.bind(this)}
                    title='Sign in'>
                    Sign in
                </Button>
            );
        }
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <Header
                    outerContainerStyles={{ height:60,backgroundColor: colors.brandblue }}
                    centerComponent={{ text: "HAH Login", style: { color: '#fff',fontSize:15 }}}
                />
                <View style = {styles.header}>
                </View>
                <View style = {styles.loginInput}>
                    <Card>
                        <CardSection>
                            <Input
                                label="Email"
                                placeholder="Email" 
                                placeholderTextColor = '#000'
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </CardSection>  
                            
                        <CardSection>
                            <Input
                                secureTextEntry
                                label="Password"
                                placeholder="Password"
                                placeholderTextColor = '#000'
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </CardSection> 
                            {this.renderError()}
                         
                    </Card>
                    <View style = {styles.signInCard}>
                        {this.renderButton()}
                    </View>
                    <View style = {styles.header2}>
                    </View>
                </View>
            </View>   
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    },
    header:{
        flex: 3,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
        //headerText: "Health on Hand"
    },
    header2:{
        flex: 3,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
        //headerText: "Health on Hand"
    },
    loginInput:{
        flex: 4,
        backgroundColor: '#D3D3D3'
    },
    loginContainers:{
        backgroundColor: '#D3D3D3'
    },
    signInButton:{
        //borderRadius: 0,
        //marginLeft: 100,
        //marginRight: 0,
        //marginBottom: 0,
        //backgroundColor: '#000',
        flex: 2,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: colors.brandblue,
        borderColor: colors.brandblue,
    },
    signInView:{
        flex: 1,
        borderWidth: 0
    },
    signInText:{
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
};

export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser}) (LoginForm);