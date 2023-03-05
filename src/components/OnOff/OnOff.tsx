import React, {FC} from 'react';
import s from './OnOff.module.css';

type OnOffPropsType = {
    onOff: boolean
}

const OnOff: FC<OnOffPropsType> = (props) => {

    const on = props.onOff && s.green
    const off = !props.onOff && s.red
    const lamp = off ? s.red : s.green

    return (
        <div className={s.onOffContainer}>
            <div className={s.on + ' ' + on}>On</div>
            <div className={s.off + ' ' + off}>Off</div>
            <div className={s.lamp + ' ' + lamp}></div>
        </div>
    );
};

export default OnOff;