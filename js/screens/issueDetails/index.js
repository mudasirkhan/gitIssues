import React from "react";
import {View, Image, ScrollView, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from 'axios';


import {SafeAreaView} from "react-native-safe-area-context";
import {issueDetailssApi, issuesApi} from '../constants';


export default class Issues extends React.Component{
    constructor (props) {
        super (props);
        this.state={
            issue: null
        };
    }

    componentDidMount() {
        let issueId = this.props.route.params.issueId;
        this.getIssueDetails(issueId);
    }

    getIssueDetails = async (id) => {
        this.setState( {loading: true}, async()=> {
            let issue = await axios.get(issueDetailssApi + id);

            this.setState({issue: issue.data, loading: false});
        })
    }

    navigateToIssueDetails = (issue) => {
        try {
            this.props.navigation.pop()
        }  catch (e) {
            console.log(e);
        }
    };

    renderIssueDetails = () => {
            return  <View style={{paddingHorizontal: 16, paddingTop: 24}}>

                <Text>
                    {this.state.issue.title}
                </Text>
                <Text>
                    {this.state.issue.number}
                </Text>
                <Text>
                    {this.state.issue.id}
                </Text>
                <Text>
                    {this.state.issue.url}
                </Text>
            </View>
    };


    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                {this.state.loading ?
                    <ActivityIndicator size={"large"}/>
                    :null}

                <ScrollView
                    style={{flex: 1, width: '100%', height: 600}}
                >
                    <View >

                        {this.state.issue && this.renderIssueDetails()}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



