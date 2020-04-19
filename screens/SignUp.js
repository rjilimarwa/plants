import React, { Component } from "react";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";



export default class SignUp extends Component {
    state = {
        email: null,
        password: null,
        username: null,
        errors: [],
        loading: false
    };

    handlesignUp() {
        const { navigation } = this.props;
        const { email, password,username } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        if (!email) {
            errors.push("email");
        }
        if (!password) {
            errors.push("password");
        }
        if (!username) {
            errors.push("password");
        }
        this.setState({ errors, loading: false });

        if (!errors.length) {
            Alert.alert(
                "Sucess",
                "Your account has been created.",
                [
                    {
                        text: "Continue",
                        onPress: () => {
                        navigation.navigate("Browse");
        }
        }
        ],
            { cancelable: false }
        );
        }
    };


    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

        return (

            <Block padding={[0, theme.sizes.base * 2]}style={styles.SignUp} behavior="padding">
            <Text h1 bold>
       SignUp
        </Text>
        <Block middle>
        <Input
        label="Email"
        error={hasErrors("email")}
        style={[styles.input, hasErrors("email")]}
        defaultValue={this.state.email}
        onChangeText={text => this.setState({ email: text })}
    />
    <Input
        label="username"
        error={hasErrors("username")}
        style={[styles.input, hasErrors("username")]}
        defaultValue={this.state.username}
        onChangeText={text => this.setState({ username: text })}
    />
    <Input
        secure
        label="Password"
        error={hasErrors("password")}
        style={[styles.input, hasErrors("password")]}
        defaultValue={this.state.password}
        onChangeText={text => this.setState({ password: text })}
    />

    <Button gradient onPress={() => this.handlesignUp()}>
        {loading ? (
        <ActivityIndicator size="small" color="white" />
        ) : (
        <Text bold white center>
          SignUp
        </Text>
        )}
    </Button>
        </Block>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    SignUp: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});
