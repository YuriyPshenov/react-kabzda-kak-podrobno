import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff02 from "./components/OnOff/OnOff02";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";


function App() {
    console.log('App rendering')

    return (
        <div className={'app-wrapper'}>
            <div className={'app-layout'}>
                <h3>01-04</h3>
                <Accordion titleValue='Menu' collapsed={true}/>
                <Accordion titleValue='Users' collapsed={false}/>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
                <h3>05 homeworks</h3>
                OnOFF
                <OnOff onOff={true}/>
                <OnOff onOff={false}/>
                <h3>06 useState</h3>
                OnOFF2
                <OnOff02 on={true}/>
                <OnOff02 on={true}/>
                <OnOff02 on={true}/>
                <h3>06 homeworks</h3>
                <UnControlledRating/>
                <UnControlledAccordion/>
                <Accordion titleValue={'ControlledAccordion'} collapsed={true}/>
            </div>
        </div>
    )
}

export default App;
