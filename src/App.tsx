import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff02 from "./components/OnOff/OnOff02";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {
    console.log('App rendering')

    const [value, setValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className={'app-wrapper'}>
            <div className={'app-layout'}>
                <h3>01-04</h3>
                <Accordion titleValue='Menu' collapsed={true}/>
                <Accordion titleValue='Users' collapsed={false}/>
                <Rating value={value} setValue={setValue}/>
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
                <h3>08-1 callbacks</h3>
                <Rating value={value} setValue={setValue}/>
                <Rating value={value} setValue={setValue}/>
                <Accordion titleValue='Menu' collapsed={accordionCollapsed} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
                <Accordion titleValue='Users' collapsed={accordionCollapsed} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
                <h3>08-1 homeworks</h3>
                <UnControlledOnOff/>
                <UnControlledOnOff/>
            </div>
        </div>
    )
}

export default App;
