import React, { FC, useState, } from 'react';
import { Demo, Clicker, Garage, Cards, TestTab, ActualContent, } from './Classes';
import { Game } from '../components/game';

export const BodyContent: FC<{tab:string}> = (props) => {
    const [message, setMessage] = useState('waiting for message')
    
    const tab1 = <ActualContent message={message} setMessage={setMessage} />
    const tab2 = <Game />
    const tab3 = <Garage />
    const tab4 = <Cards />
    const tab5 = <TestTab />

    if(props.tab == "1")
        return tab1
    else if(props.tab == "2")
        return tab2
    else if(props.tab == "3")
        return tab3
    else if(props.tab == "4")
        return tab4
    else
        return tab5

}