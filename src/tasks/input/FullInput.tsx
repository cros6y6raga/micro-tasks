import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickInputHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickInputHandler}>+</button>
        </div>
    );
};