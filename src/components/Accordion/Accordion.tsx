import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed?: () => void
}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (() => void) | undefined
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
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

export default Accordion;