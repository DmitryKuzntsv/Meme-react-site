import './Quiz.css';
import React from 'react';
import { useState } from 'react';

var flag = Boolean(false)
 
export const Quiz = () =>{
    const handleAnswerOptionClick = (isCorrect) =>{
        if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == false)){
            setScore(score+1)
            flag = true
        }
        else if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == true)){
            setScore(score)
        }
        else
        if (isCorrect){
            setScore(score+1)
        }
        const nextQuestion = currentQuestion +1
        if (nextQuestion <questions.length){
            setCurrentQuestion(nextQuestion)
        } 
    }
    const [currentQuestion, setCurrentQuestion]= useState(0)
const [score, setScore]= useState(0)
const questions =[
    {
        questionText:'Да?', //0
        answerOptions: [
            {answerText: "Нет.", isCorrect: false},
            {answerText: "Нет.", isCorrect: false},
            {answerText: "Нет.", isCorrect: false},
            {answerText: "Да.", isCorrect: true},
            {answerText: "Нет.", isCorrect: false},
            {answerText: "Нет.", isCorrect: false},
        ]
    },
    {
        questionText:'', //0
        answerOptions: [
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
        ]
    },
    {
        questionText:'', //0
        answerOptions: [
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
        ]
    },
    {
        questionText:'', //0
        answerOptions: [
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
        ]
    },
    {
        questionText:'', //0
        answerOptions: [
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
            {answerText: "", isCorrect: false},
        ]
    }
]
return(
    <div>
        <div className = "quiz" >
            <div className = 'question_section' >
                <div className = "question_count">
                    <span>Вопрос {currentQuestion +1}</span>/{questions.length}
                </div>
                <div className='question_text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className = "answer_section">
                    {questions[currentQuestion].answerOptions.map(
                        item =>(<button className = "answer_button" onClick=
                        {() => handleAnswerOptionClick(item.isCorrect)}>
                            {item.answerText}
                        </button>
                    ))}
                <div className = "score_section">
                    Правильных ответов {score} из {questions.length}
                </div>
                </div>
           </div>
             </div>


)
}