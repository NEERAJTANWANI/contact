import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Keyboard,
  AsyncStorage,
  TouchableWithoutFeedback,
  ScrollView ,
  FlatList,
  Alert} from 'react-native';

import { Form,Item,Input,Label,Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class AddNewContactScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"",
      phone:"",
      email:"",
      address:"",
      }
  }

  static naviagtionOptions={
    title: "Contact App"
  };
  saveContact = async () =>{
    if (
        this.state.fname !== "" &&
        this.state.lname !== "" &&
        this.state.phone !== "" &&
        this.state.email !== "" &&
        this.state.address !== "" 
      ) {                                             
        var contact={
          fname:this.state.fname,
          lname:this.state.lname,
          phone:this.state.phone,
          email:this.state.email,
          address:this.state.address          
        };
        await AsyncStorage.setItem( 
          Date.now().toString(),
          JSON.stringify(contact),
        )
        .then(()=>{
          this.props.navigation.goBack();
        })
        .catch( error=>{
          console.log(error);          
        })
      }
      else{
        Alert.alert("All Fields are Required");
      }
    };
  
  render(){
  return (
    <TouchableWithoutFeedback
            onPress={()=>{
              Keyboard.dismiss
            }}>
        <ScrollView 
            style={styles.container}
            >
          <Form 
            marginTop={40}
            margin={10}
             >
            <Item style={styles.inputItem}>
            <Label>First Name : </Label>
              <Input
                autoCorrect={false}
                placeholder="Enter First Name"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={ fname => this.setState({fname})}
                 />
            </Item>
            <Item style={styles.inputItem}>
            <Label>Last Name : </Label>
              <Input
                autoCorrect={false}
                placeholder="Enter Last Name"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={ lname => this.setState({lname})}
                 />
            </Item>
            <Item style={styles.inputItem}>
            <Label>Email ID : </Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Enter Email ID"
                keyboardType="email-address"
                onChangeText={ email => this.setState({email})}
                 />
            </Item>
            <Item style={styles.inputItem}>
            <Label>Phone : </Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="number-pad"
                placeholder="Enter Phone"
                onChangeText={ phone => this.setState({phone})}
                 />
            </Item>
            <Item style={styles.inputItem}>
              <Label>Address : </Label>
              <Input
                autoCorrect={false}
                placeholder="Enter Address"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={ address => this.setState({address})}
                 />
            </Item>
                   
          </Form>
            <Button
              style={styles.button}
              full
              rounded
              onPress={()=>{
                this.saveContact()
              }}
            >
              <Text style={styles.buttonText}>SAVE</Text>
            </Button>
            <View style={styles.empty}></View> 
        </ScrollView>
    </TouchableWithoutFeedback>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    margin: 10,
    height: 500
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#B83227",
    marginTop: 40
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  empty: {
    height: 500,
    backgroundColor: "#FFF"
  }
});
