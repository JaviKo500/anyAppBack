"use strict";var e=({init:e},{env:r})=>{const t="/"!==r.PUBLIC_URL?r.PUBLIC_URL:"http://0.0.0.0:8080";e("routes.before",(()=>{require("pg").types.setTypeParser(1700,(e=>parseFloat(e)))})),e("middlewares.after",(({app:e})=>{e.use(((e,r,s)=>{"/users/invite"===e.originalUrl&&(e.body.invite_url=`${t}/register-with-token`),s()}))}))};module.exports=e;