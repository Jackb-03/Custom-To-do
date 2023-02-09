import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textinput}
                    placeholder="Your goals!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#00FF00" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#FF0000" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {

        width: '100%',
        alignItems: 'center',
        padding: 16,
        paddingTop: '50%',
        flex: 1,
        backgroundColor: "#311b6b"
    },
    textinput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        marginRight: 8,
        padding: 16,
        borderRadius: 6,
    },

    image: {
        width: 100,
        height: 100,
        margin: 20
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: "30%",
        marginHorizontal: 8
    },


});
