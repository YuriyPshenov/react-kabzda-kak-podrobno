import React, {useState} from 'react';
import s from './OnOff.module.css';


const UnControlledOnOff = () => {

    const [onOff, setOnOff] = useState(false)

    const on = onOff && s.green
    const off = !onOff && s.red
    const lamp = off ? s.red : s.green

    return (
        <div className={s.onOffContainer}>
            <div className={s.on + ' ' + on} onClick={() => setOnOff(true)}>On</div>
            <div className={s.off + ' ' + off} onClick={() => setOnOff(false)}>Off</div>
            <div className={s.lamp + ' ' + lamp}></div>
        </div>
    );
};

export default UnControlledOnOff;