window.CESIUM_BASE_URL = '/cesium/';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Ion } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

createApp(App).mount('#app')

// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyODBhMTZjYy0yYzcwLTRmN2QtOTYzMi01ZmViMTU1ZDNlZjgiLCJpZCI6MjcxMzU1LCJpYXQiOjE3Mzc3OTA2Nzd9.vY7V8XsE4IEMIbVG_Vw82wwMR46oDllkXZXD_4HXUyM';