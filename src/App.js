// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';
import { PulseList, PulseEdit, PulseCreate } from './heart_rate/Pulse'
import { UserList } from './users';

///const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:3001');
//const dataProvider = jsonServerProvider('https://realtime-system.firebaseio.com/test_admin/.json');


const App = () => (
    <Admin
    dataProvider={dataProvider}
    title="Realtime System"
    dashboard={Dashboard}
    >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="pulses" list={PulseList} edit={PulseEdit} create={PulseCreate} icon={PostIcon} />

    </Admin>
);

export default App;
