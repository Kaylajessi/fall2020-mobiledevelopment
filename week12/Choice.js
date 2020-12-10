import React, {useState} from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function Choice(props){
    const[selection, setSelection] = useState(0)  
return (
    <Card>
        <Card.Title>{props.title}</Card.Title>
        <Text>{props.storage[selection]}</Text>
        <Button title="Next" onPress={() => {setSelection((selection + 1)%props.storage.length)}}></Button>
        <br/>
        <Button title="Vote" onPress={() => props.onPress(props.storage[selection]) }></Button>
    </Card>
)
}
