import './Modal.css'
import React, { useState } from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { Login } from '@mui/icons-material';

export const Modal = ({
    setIsLoggedIn,
    setUserName,
    setIsAdmin
}) =>{
    const [login, setLogin] = useState('');
    const [password, setPassword,] = useState('');
    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleLogIn = (e) => {
        e.preventDefault();

        if (login === 'Mr.White') {
            if (password === 'Heisenburger'){
                localStorage.setItem('isAdmin', true);
                setIsAdmin(true);
            }
            else{
                alert('Джесси,ты опять пытаешься войти в мой аккаунт?')
                 return false
            }
        }
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userName', login);
        setUserName(login);
        setIsLoggedIn(true);
     //   history.push('/');
    }
    return(
        <div>
            <div id="myModal" class="modal_fade" tabindex="-1"    />
        <form class="modal-dialog_modal-sm" onSubmit= {handleLogIn}>
            <div class="modal-content">
               <div class="container">
                <div class="row">
                    <span class="close" data-dismiss="modal"></span>
                </div>
                <div class="row">
                     <h2 class="modal-header-h2">Введите данные:</h2>
                </div>
                <div class="row">
                    <input type="text" placeholder="Логин" name="login" class="placeholder" value={login} onChange={handleLoginChange}/>
                    <input type="text" placeholder="Ваш пароль" name="parol" class="placeholder" value={password} onChange={handlePasswordChange}/>
                    <input type="radio" class="r" id="radioButton" />
                    <input type="radio" class="r" id="radioButton" />
                    <button class="submit1" type="submit"   >Вход/Регистрация</button>
                </div>
               </div> 
            </div>
        </form>
        </div>
    )
}