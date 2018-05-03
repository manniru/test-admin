// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

///const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:3001');
//const dataProvider = jsonServerProvider('https://realtime-system.firebaseio.com/test_admin/.json');


const App = () => (
    <Admin dataProvider={dataProvider} title="Realtime System">
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
