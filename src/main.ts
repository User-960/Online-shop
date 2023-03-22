import "./main.scss";

import {createApp} from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

const user = { first_name: 'John' };
const userExtended = { ...user, last_name: 'Doe' };
console.log(Object.values(userExtended));
