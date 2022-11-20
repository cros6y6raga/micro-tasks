import React, {useState, MouseEvent} from 'react';
import './App.css';
import {NewComponent} from "./tasks/map/NewComponent";
import {Button} from "./tasks/button/Button";
import {NewComponentTwo} from "./tasks/filter/NewComponentTwo";
import {FullInput} from "./tasks/input/FullInput";
import {Input} from "./tasks/input/Input";
import {ButtonPlus} from "./tasks/input/ButtonPlus";

export type FilterType = 'all' | 'rube' | 'doll';

function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const Button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const Button2Foo = (sub: string) => {
        console.log(sub)
    }
    const Button3Foo = (sub: string) => {
        console.log(sub)
    }
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickReset = () => {
        setA(0)
    }
    const [money, setMoney] = useState([
        {banknots: 'dol', nominal: 100, number: ' a1234567890'},
        {banknots: 'dol', nominal: 50, number: ' z1234567890'},
        {banknots: 'rub', nominal: 100, number: ' w1234567890'},
        {banknots: 'dol', nominal: 100, number: ' e1234567890'},
        {banknots: 'dol', nominal: 50, number: ' c1234567890'},
        {banknots: 'rub', nominal: 100, number: ' r1234567890'},
        {banknots: 'dol', nominal: 50, number: ' x1234567890'},
        {banknots: 'rub', nominal: 50, number: ' v1234567890'},
    ])
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')
    const [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money;
    if (filter === 'rube') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'rub');
    }
    if (filter === 'doll') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'dol');
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
    const callBackButton = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className='App'>
            <NewComponent students={students} topCars={topCars}/>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I\' am Vasya', 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I\' am Ivan')}/>
            <Button name={'MyYouTubeChannel-3'} callBack={() => Button3Foo('I\' am stupid button')}/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>num</button>
            <button onClick={onClickReset}>0</button>
            <NewComponentTwo currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <ButtonPlus name={'+'} callBack={callBackButton}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;