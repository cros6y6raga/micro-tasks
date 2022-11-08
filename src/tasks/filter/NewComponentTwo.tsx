import React from 'react';
import {FilterType} from "../../App";

type NewComponentTwoType = {
    currentMoney: Array<NewComponentTwoTypeArray>
    onClickFilterHandler: (nameButton: FilterType) => void
}
type NewComponentTwoTypeArray = {
    banknots: string
    nominal: number
    number: string
}
export const NewComponentTwo = (props: NewComponentTwoType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() =>  props.onClickFilterHandler('rube')}>rub</button>
            <button onClick={() =>  props.onClickFilterHandler('doll')}>dol</button>
        </>
    );
};