import React from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { Dropdown } from './shared/Dropdown';
//import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
//import { GenericList } from './lessons/GenericList'
//import { merge } from './utils/js/merge'

// константа, которая содержит элементы нашего списка (надо к ним добавить id)
// лучше константу выносить вне рендера компонента (один раз сделать и сохранить)
// чтобы делать что-то с константным списком - нужно сделать состояние 
// const LIST = [
//     { text: 'some' },
//     { text: 'other value' },
//     { text: 'one more value' },
// ].map(generateId) // в таком исполнении мы сгенерим id один раз и всем элементам будет присвоен один и тот же id
// хотя кажется, что это не так (до этого был assignId)

function AppComponent() {
//     const[list, setList] = React.useState(LIST); // в аргументах - начальное состояние
    
//     const handleItemClick = (id:string) => {
//         setList(list.filter((item) => item.id != id));
//     }
//     const handleAdd = () => {
//         setList(list.concat(generateId({ text: generateRandomString() })))
//     }
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <div style={{padding: 20}}>
                    <br />
                    <Dropdown isOpen = {false} onClose = {() => console.log('closed')} onOpen = {() => console.log('isopen')} button = {<button>Test</button>}>
                        <ul>
                            <li onClick = {console.log}>Click me</li>
                            <li> Dont Click me</li>
                        </ul>
                    </Dropdown>
                </div>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />)