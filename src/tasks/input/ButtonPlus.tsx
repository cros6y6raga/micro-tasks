import React from 'react';

type ButtonPlusType = {
    name: string,
    callBack: () => void
}
export const ButtonPlus = (props:ButtonPlusType) => {
    const onClickHandler = () => {
      props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};