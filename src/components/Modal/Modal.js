import './Modal.css'
import React from 'react';

export const Modal = () =>{
    return(
        <div>
            <div id="myModal" class="modal_fade" tabindex="-1"/>
        <div class="modal-dialog_modal-sm">
            <div class="modal-content">
               <div class="container">
                <div class="row">
                    <span class="close" data-dismiss="modal"></span>
                </div>
                <div class="row">
                     <h2 class="modal-header-h2">Введите данные:</h2>
                </div>
                <div class="row">
                    <input type="text" placeholder="your@email.com" name="email" class="placeholder" />
                    <input type="text" placeholder="Ваш пароль" name="parol" class="placeholder" />
                    <input type="radio" class="r" id="radioButton" />
                    <input type="radio" class="r" id="radioButton" />
                    <button class="submit1" type="submit">Вход/Регистрация</button>
                </div>
               </div> 
            </div>
        </div>
        </div>
    )
}