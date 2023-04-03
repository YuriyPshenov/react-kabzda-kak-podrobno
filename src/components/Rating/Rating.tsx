import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star id={1} selected={props.value > 0} setValue={props.setValue}/>
            <Star id={2} selected={props.value > 1} setValue={props.setValue}/>
            <Star id={3} selected={props.value > 2} setValue={props.setValue}/>
            <Star id={4} selected={props.value > 3} setValue={props.setValue}/>
            <Star id={5} selected={props.value > 4} setValue={props.setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    id: RatingValueType
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() =>props.setValue(props.id)}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}