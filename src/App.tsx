import React from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { generateId } from './utils/react/generateRandomIndex';
import { MyList } from './lessons/GenericList'

// константа, которая содержит элементы нашего списка (надо к ним добавить id)
// лучше константу выносить вне рендера компонента (один раз сделать и сохранить)
const LIST = [
    { value: 'some' },
    { value: 'other value' },
    { value: 'one more value' },
].map(generateId) // в таком исполнении мы сгенерим id один раз и всем элементам будет присвоен один и тот же id
// хотя кажется, что это не так (до этого был assignId)

function AppComponent() {
    
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <MyList list={LIST} onClick = {console.log} />
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent)