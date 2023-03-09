import React, {useState} from "react";


export function UnControlledRating() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star id={1} selected={value > 0} callBack={(value) =>setValue(value)}/>
            <Star id={2} selected={value > 1} callBack={(value) =>setValue(value)}/>
            <Star id={3} selected={value > 2} callBack={(value) =>setValue(value)}/>
            <Star id={4} selected={value > 3} callBack={(value) =>setValue(value)}/>
            <Star id={5} selected={value > 4} callBack={(value) =>setValue(value)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    id: number
    callBack: (value: number) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    const returnComp1 = <span onClick={() => props.callBack(props.id)}><b>Star </b></span>
    const returnComp2 = <span onClick={() => props.callBack(props.id)}>Star</span>

    return props.selected ? returnComp1 : returnComp2
}