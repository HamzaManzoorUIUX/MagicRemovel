import { create } from 'apisauce'
export const api = create({
    baseURL: 'https://src.magicremove.ch:8888/?=',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json','Content-Type': 'multipart/form-data'},
  })


  export const urlImg="https://devreact.boxking.ch/laravel/";
  //http://127.0.0.1:8000/api
  //https://devreact.boxking.ch/laravel/api