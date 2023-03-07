import React, {useState} from "react";


export function UnControlledAccordion() {

    const[title, setTitle] = useState('UnControlledAccordion')
    const[collapsed, SetCollapsed] = useState(false)

    const callBack = () => {
        SetCollapsed(!collapsed)
    }

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={title} callBack={callBack}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.callBack()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
        </ul>
    )
}