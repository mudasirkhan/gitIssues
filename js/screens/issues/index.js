import React from "react";
import {View, Image, ScrollView, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from 'axios';


import {SafeAreaView} from "react-native-safe-area-context";
import {issuesApi} from '../constants';


export default class Issues extends React.Component{
    constructor (props) {
        super (props);
        this.state={
            issues: []
        };
    }

    componentDidMount() {
        this.getIssues();
    }

    getIssues = async () => {
        this.setState( {loading: true}, async()=> {
            let issues = await axios.get(issuesApi);

            this.setState({issues: issues.data, loading: false});
        })
    }

    navigateToIssueDetails = (issueId) => {
        try {
            this.props.navigation.push("IssueDetails", {
                issueId
            });
        }  catch (e) {
            console.log(e);
        }
    };

    renderIssues = () => {
        return this.state.issues.map((issue)=>{
            return  <TouchableOpacity onPress={()=>this.navigateToIssueDetails(issue.number)} style={{paddingHorizontal: 16, paddingTop: 24}}>

            <Text>
                    {issue.title}
                </Text>
                <Text>
                    {issue.number}
                </Text>
            </TouchableOpacity>
        })
    };


    render() {
        return (
            <SafeAreaView style={[{flex: 1, backgroundColor: 'red'}]}>
                    {this.state.loading ?
                        <ActivityIndicator size={"large"}/>
                        :null}

                    <ScrollView
                        style={{flex: 1, width: '100%', height: 600}}
                    >
                        <View >
                            {this.renderIssues()}
                        </View>
                    </ScrollView>
            </SafeAreaView>
        );
    }
}



