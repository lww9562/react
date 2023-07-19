import { useState } from "react";
import styles from './ClassNames.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const ClassNames = () => {
    const [open, setOpen] = useState(false);
    
    const clickHandler = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={cn('box', {on : open})}>box</div>
            <button type='button' onClick={clickHandler}>Toggle</button>
        </div>
    )
};

export default ClassNames;