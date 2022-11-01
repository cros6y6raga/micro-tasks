import React, {useState, MouseEvent} from 'react';
import './App.css';
import {NewComponent} from "./tasks/map/NewComponent";
import {Button} from "./tasks/button/Button";

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
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasya')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Ivan')
    // }

    // const onClickHandler=(name:string)=>{
    //     console.log(name)
    // }

    // const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log(100200)
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }
    const Button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const Button2Foo = (sub: string) => {
        console.log(sub)
    }
    const Button3Foo = (sub: string) => {
        console.log(sub)
    }
    return (
        <div className='App'>
            <NewComponent students={students} topCars={topCars}/>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event)=>onClickHandler('I\'m Vasya')}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event)=>onClickHandler('I\'m Ivan')}>MyYouTubeChannel-2</button>*/}
            {/*<button onClick={()=>onClickHandler('some info')}>MyYouTubeChannel-3</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event) => foo2(100200)}>2</button>*/}
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I\' am Vasya', 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I\' am Ivan')}/>
            <Button name={'MyYouTubeChannel-3'} callBack={() => Button3Foo('I\' am stupid button')}/>
        </div>
    );
}

export default App;