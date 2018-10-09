import React , {Component } from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import {employeeCreate} from '../actions';
import { Header, SearchBar } from 'react-native-elements'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Drawer from 'react-native-drawer'
import Tabs from 'react-native-tabs';
import { Text, Image, View, FlatList, TouchableHighlight, ActivityIndicator, ToastAndroid, Picker, StatusBar, Platform, Dimensions, Linking, StyleSheet } from 'react-native';
import { CircularProgress, AnimatedCircularProgress } from 'react-native-circular-progress';

import {colors} from '../styles/base.js'

const drawerStyles = {
    drawer: { backgroundColor:"#0F084B"}
}

const MAX_CALS = 2000;

const categories = {
        0:"home",
        1:"add food",
        2:"add exercise",
        3:"food notes",
        4:"exercise notes"
    }

class Home extends Component {

    state = {
        isMoving: false,
        pointsDelta: 0,
        dailyCal: 325
    };

    componentWillMount= () => {
        /*
        fetch('placeholder', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dailyCal: responseJson
            })
        })
        */
    }
/*
    state = {
        
        newsData:[],
        language:'en',
        totalResults:0,
        render:[],
        page:1,
        categorySelected:0,
        count:0,
        headlines:(<ActivityIndicator size="large" color="#0000ff" />),
        showLoader:true,
        searchText:"",
        showSearch:false,
        q:[],
        height:Dimensions.get('window').height
    }
/*
    componentWillMount = () => {
        let category = categories[this.state.categorySelected];
        const request = new Request('https://newsapi.org/v2/everything?pageSize=5&sortBy=publishedAt&page=' + this.state.page++ + '&q=' + category,headers)
        this.formData(request)
        
    }

    showSearchbar = () => {
        
        if(this.state.showSearch == true)
            this.setState({showSearch:false})
        else
            this.setState({showSearch:true})
           
    }
*/
    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    onPress = (item) => {
        
        Actions.push("articleinfo", {item:item});
        
    }

    showHome = () => {
        Actions.home();
    }

    showAddFood = () => {
        Actions.push("addfood",{type:"addfood"});
    }

    showAddExercise = () => {
        /*
        Actions.push("publications",{type:"publications"});
        */
    }

    showAddFoodNotes = () => {
        
        Actions.push("foodnotes");
        
    }

    showAddExerciseNotes = () => {
        
        Actions.push("exercisenotes");
        
    }
/*
    tabChanged = (tab) => {
        this.state = {
            categorySelected:tab.i,
            page:1
        }
        this.setState({showLoader:true,newsData:[],q:[]})
        let category = categories[tab.i];
        const request = new Request('https://newsapi.org/v2/everything?pageSize=10&sortBy=publishedAt&page=' + this.state.page++ + '&q=' + category,headers)
        this.formData(request);
    }

    formData = (request)  => {
        fetch(request)
            .then((response) => response.json())
            .then((responseJson)=>{
                if(responseJson.status == 'ok') {
                    responseJson.articles.map((item) => {
                        this.state.q.push(item.title);
                        this.state.newsData.push(item);
                    })
                   
                       
                        this.setState({newsData:this.state.newsData, showLoader:false})
                        this.tabview(this.state.newsData);
                    
                } else {
                    console.log("no data");
                }
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    tabview = (data) => {
        this.setState({
             render:(
                 <View>
                 <FlatList
                     data={data}
                     renderItem={({item}) => (
                         <TouchableHighlight
                             onPress={() => this.onPress(item)}
                             underLayColor="transparent"
                         >
                             <View>
                                 <Card
                                     title={item.title}
                                     image={{uri: item.urlToImage || 'http://www.blackbell.com.ng/ui/images/img_not_found.jpg'}}
                                     imageProps={{resizeMode: "contain"}}
                                     titleNumberOfLines={2}
                                 >
                                     <Text style={{
                                         color: "maroon",
                                         fontSize: 15,
                                         marginBottom: 5
                                     }}>{item.author}({item.source.name})</Text>
                                 </Card>
                             </View>
                         </TouchableHighlight>
                     )}
                 />
                 </View>)
         })

 }

    tabChanged = (tab) => {
        this.state = {
            categorySelected: tab.i,
            page:1
        }
        if(tab == "Add Food")
        {
            this.showAddFood();
        }
        else{
            this.showAddFoodNotes();
        }
    }
    */

    render(){
        let add = (
            <Icon
                name='add'
                underlayColor={"transparent"}
                color={colors.secondary}
                marginTop={50}
                onPress = {this.showAddFood}
            />
        )

        let hamburger = (
            <Icon
                name='menu'
                underlayColor={"transparent"}
                color={colors.secondary}
                onPress = {this.openControlPanel}
            />
        )

        let drawerMenu = (
            <View style={{padding:10, marginTop:20}}>
                <TouchableHighlight
                    onPress = {this.showAddFood}
                    underlayColor = "transparent"
                >
                <View style={{"marginBottom":20}}>
                    <Text style={{color:"white", fontSize:15, "marginBottom":20}}>Add Food</Text>
                    <View style={{borderColor:"lightgray", borderWidth:1}}></View>
                </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress = {this.showAddExercise}
                    underlayColor = "transparent"
                >
                <View style={{"marginBottom":20}}>
                    <Text style={{color:"white", fontSize:15, "marginBottom":20}}>Add Exercise</Text>
                    <View style={{borderColor:"lightgray", borderWidth:1}}></View>
                </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress = {this.showAddFoodNotes}
                    underlayColor = "transparent"
                >
                <View style={{"marginBottom":20}}>
                    <Text style={{color:"white", fontSize:15, "marginBottom":20}}>Food Notes</Text>
                    <View style={{borderColor:"lightgray", borderWidth:1}}></View>
                </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress = {this.showAddExerciseNotes}
                    underlayColor = "transparent"
                >
                <View style={{"marginBottom":20}}>
                    <Text style={{color:"white", fontSize:15, "marginBottom":20}}>Exercise Notes</Text>
                    <View style={{borderColor:"lightgray", borderWidth:1}}></View>
                </View>
                </TouchableHighlight>
            </View>
        )
        const fill = this.state.dailyCal / MAX_CALS * 100;
        return(
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={drawerMenu}
                type="overlay"
                tapToClose={true}
                styles={drawerStyles}
                openDrawerOffset={0.5}>
                <StatusBar
                    backgroundColor="#0F084B"
                    barStyle="light-content"/>
                <View style={{flex:1}}>
                    <Header
                        outerContainerStyles={{height:60,backgroundColor:"#0F084B"}}
                        leftComponent={hamburger}
                        centerComponent={{ text: 'Home', style: { color: colors.secondary,fontSize:17 }}}
                        rightComponent={add}/>
                    <View style={{flex:3, alignItems: 'center'}}>
                        
                        
                        <View style = {{flex:3, justifyContent: "center"}}>
                            <AnimatedCircularProgress
                                size={250}
                                width={30}
                                fill={fill}
                                tintColor={colors.secondary}
                                backgroundColor={colors.primary}
                                >
                                {(fill) => (
                                    <View>
                                        <Text style={styles.points}>
                                            { Math.round(MAX_CALS * fill / 100) }
                                        </Text>
                                        <Text style = {styles.pointsLabel}>
                                            /{ MAX_CALS } Calories
                                        </Text>
                                    </View>
                                )}
                            </AnimatedCircularProgress>
                        </View>
                        {/*
                        <View
                            style = {{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.pointsHeader}>
                                Total Calories: { Math.round(MAX_POINTS * fill / 100) } / {MAX_POINTS}
                            </Text>
                        </View>
                        */}
                        <View style = {{flex:2}}>
                        </View>
                        





                        {/*
                        <ScrollableTabView
                            initialPage={0}
                            renderTabBar={() => <ScrollableTabBar />}
                            tabBarActiveTextColor={"red"}
                            tabBarUnderlineStyle={{height:2}}
                            onChangeTab={this.tabChanged}>
                            <View tabLabel='Home'>
                            {
                                (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                            }
                            </View>
                            <View tabLabel='Add Food'>
                            {
                                (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                            }
                            </View>
                            <View tabLabel='Add Exercise'>
                            {
                                (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                            }</View>
                            <View tabLabel='Food Notes'>
                            {
                                (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                            }</View>
                            <View tabLabel='Exercise Notes'>
                            {
                                (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                            }</View>
                        </ScrollableTabView>
                        */}
                    </View>
                    <View style={{flexDirection: 'row', height:60, backgroundColor: colors.primary, justifyContent:"space-evenly"}}>
                        <Icon
                            name='tachometer'
                            type='font-awesome'
                            color={colors.secondary}
                            onPress={this.showHome}
                            size={30}>
                        </Icon>
                        <Icon
                            name='food'
                            type='material-community'
                            color={colors.secondary}
                            onPress={this.showAddFood}
                            size={30}>
                        </Icon>
                        <Icon
                            name='run'
                            type='material-community'
                            color={colors.secondary}
                            onPress={this.showAddExercise}
                            size={30}>
                        </Icon>
                    </View>
                </View>
                {/*
                    <View>
                        <Text style={{alignSelf:'center',fontSize:15}}>Powered by HAH.org</Text>
                    </View>
                */}
        </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    pointsHeader: {
      backgroundColor: 'transparent',
      //position: 'absolute',
      //top: 72,
      //left: 56,
      //width: 90,
      textAlign: 'center',
      color: colors.secondary.color,
      fontSize: 20,
      fontWeight: "100",
      justifyContent: 'center',
      alignItems: 'center'
    },
    points:{
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#7591af',
        fontSize: 50,
        fontWeight: "100",
        justifyContent: 'center',
        alignItems: 'center'
    },
    pointsLabel:{
        backgroundColor: 'transparent',
        //position: 'absolute',
        //top: 72,
        //left: 56,
        //width: 90,
        textAlign: 'center',
        color: '#7591af',
        fontSize: 16,
        fontWeight: "100",
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#152d44',
      padding: 50
    },
    pointsDelta: {
      color: '#4c6479',
      fontSize: 50,
      fontWeight: "100"
    },
    pointsDeltaActive: {
      color: '#fff',
    }
});


const mapStateToProps = (state) => {
    
    return state;
};


export default connect(mapStateToProps, {employeeCreate}) (Home);







// ********************************************************************************************************************************************************************************************







/*

var translate = require('../actions/translate')


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});




const languageMap = {
    "English":'en',
    "Hindi":'hi',
    "Marathi":'mr',
    "French":'fr',
    "Gujarati":'gu'
}

class HomePage extends Component {
    state = {
        newsData:[],
        language:'en',
        totalResults:0,
        render:[],
        page:1,
        categorySelected:0,
        count:0,
        headlines:(<ActivityIndicator size="large" color="#0000ff" />),
        showLoader:true,
        searchText:"",
        showSearch:false,
        q:[],
        height:Dimensions.get('window').height
    }



    endReached = () => {
        if(Platform.OS == "android")
            ToastAndroid.show('Loading more news...',3000,"BOTTOM")
        let category = categories[this.state.categorySelected];
        const request = new Request('https://newsapi.org/v2/everything?pageSize=10&sortBy=publishedAt&page=' + this.state.page++ + '&q=' + category,headers)
        this.formData(request)
    }



    changePicker = (position, language) => {
        language = languageMap[language]
        let newsData = this.state.newsData
        this.setState({language:language, newsData:[], showLoader:true})
        if(Platform.OS == "android")
            ToastAndroid.show('Translating...',3000,"BOTTOM")
        let category = categories[this.state.categorySelected];
        let data = []
        translate.translate(this.state.q,language,(resp) => {
            newsData.map((item, index) => {
                return item.title = resp[index]
            })
            this.setState({newsData:newsData, showLoader:false})
        })

        const request = new Request('https://newsapi.org/v2/everything?pageSize=10&sortBy=publishedAt&page=' + this.state.page + '&q=' + category,headers)
        //this.formData(request)
    }

 


 

    submitEditing = () => {
        Actions.push("search",{text:this.state.searchText});
    }

    searchTextChanged = (text) => {
        this.setState({searchText:text})
    }

    showSearchbar = () => {
        if(this.state.showSearch == true)
            this.setState({showSearch:false})
        else
            this.setState({showSearch:true})
    }

 


    showPublications = () => {
        Actions.push("publications",{type:"publications"});
    }

    showCountries = () => {
        Actions.push("publications",{type:"countries"});
    }

    render() {
        let search = (
                <Icon
                    name='search'
                    underlayColor={"transparent"}
                    color="white"
                    marginTop={50}
                    onPress = {this.showSearchbar}
                />
        )

        let hamburger = (
            <Icon
                name='menu'
                underlayColor={"transparent"}
                color="white"
                onPress = {this.openControlPanel}
            />
        )

        let translateView = (
        <View>
            <ModalDropdown options={['English','Marathi','French','Hindi','Gujarati']}
                defaultValue="Translate"
                onSelect = {this.changePicker}
                           style={{borderWidth:1, width:"20%",borderRadius:10, backgroundColor:"#0F084B",marginTop:5,marginLeft:3}}
                dropdownStyle = {{width:"50%",color:"black"}}
                           textStyle = {{fontSize:13, color:"white",alignSelf:"center"}}
                           dropdownTextStyle = {{fontSize:13, color:"black"}}
            />
        </View>
        )

        let drawerMenu = (
            <View style={{padding:10, marginTop:20}}>
                <TouchableHighlight
                    onPress = {this.showPublications}
                    underlayColor = "transparent"
                >
                <View style={{"marginBottom":20}}>
                    <Text style={{color:"white", fontSize:15, "marginBottom":20}}>Publications</Text>
                    <View style={{borderColor:"lightgray", borderWidth:1}}></View>
                </View>
                </TouchableHighlight>
            </View>
        )

        return (
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    content={drawerMenu}
                    type="overlay"
                    tapToClose={true}
                    styles={drawerStyles}
                    openDrawerOffset={0.5}
                >
                    <StatusBar
                        backgroundColor="#0F084B"
                        barStyle="light-content"
                    />
                    <View style={{flex:1}}>
                        <Header
                            outerContainerStyles={{height:60,backgroundColor:"#0F084B"}}
                            leftComponent={hamburger}
                            centerComponent={{ text: 'Headlines', style: { color: '#fff',fontSize:17 }}}
                            rightComponent={search}
                        />
                        {
                            (this.state.showSearch == true) ? <SearchBar
                                lightTheme
                                round
                                onChangeText = {this.searchTextChanged}
                                onSubmitEditing = {this.submitEditing}
                                placeholder='Type Here...' /> : <View></View>
                        }

                        <View style={{flex:3}}>
                            <ScrollableTabView
                                initialPage={0}
                                renderTabBar={() => <ScrollableTabBar />}
                                tabBarActiveTextColor={"red"}
                                tabBarUnderlineStyle={{height:2}}
                                onChangeTab={this.tabChanged}
                            >
                                <View tabLabel='Business'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='Entertainment'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='General'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='Health'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='Science'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='Sports'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                                <View tabLabel='Technology'>
                                    {translateView}
                                    {
                                    (this.state.showLoader == true) ? <ActivityIndicator size="large" color="#0000ff"/> : this.state.render
                                }</View>
                            </ScrollableTabView>
                        </View>
                    </View>
                    <View>
                        <Text style={{alignSelf:'center',fontSize:15}}>Powered by NewsAPI.org</Text>
                    </View>
                </Drawer>

        )
    }
}
export default HomePage;
*/