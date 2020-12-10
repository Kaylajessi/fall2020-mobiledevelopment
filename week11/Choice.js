import React, {useState} from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function Choice(props){
    const[selection, setSelection] = useState(0)  
return (
    <Card>
        <Text>{props.storage[selection]}</Text>
        <Button title="Next" onPress={() => {setSelection((selection + 1)%props.storage.length)}}></Button>
    </Card>
)
}
