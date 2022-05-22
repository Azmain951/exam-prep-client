import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './BCSExam.css'

const BCSExam = () => {
    const [user] = useAuthState(auth);
    const { name, no } = useParams({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [grade, setGrade] = useState('');
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/question?category=${name}&no=${no}`)
            .then(res => res.json())
            .then(data => setQuestions(data));
    }, []);
    const initialMinute = 60;
    const initialSeconds = 0;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    handleMark();
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const handleAnswerOptionClick = (isCorrect) => {
        isCorrect = isCorrect || false;

        if (isCorrect === true || isCorrect === "true") {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            handleMark()
        }
    };

    const handleFinishExam = () => {
        setShowScore(true);
        handleMark();
    }

    const handleMark = () => {
        const grade = ((score / questions.length) * 100).toFixed(2);
        calculateGrade(grade);
        const newMark = {
            user: user.displayName,
            email: user.email,
            score,
            percentage: grade,
            total: questions.length,
            category: name,
            bcsNo: no
        }
        fetch('https://desolate-wildwood-64014.herokuapp.com/marks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMark)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Your mark has been added to dashboard successfully!!!');
            });
    }

    const calculateGrade = (mark) => {
        if (mark > 79 && mark <= 100) {
            setGrade(grade);
        }
        else if (mark > 74 && mark < 80) {
            setGrade('A');
        }
        else if (mark > 69 && mark < 75) {
            setGrade('A-');
        }
        else if (mark > 64 && mark < 70) {
            setGrade('B+');
        }
        else if (mark > 59 && mark < 65) {
            setGrade('B');
        }
        else if (mark > 54 && mark < 60) {
            setGrade('B');
        }
        else if (mark > 49 && mark < 55) {
            setGrade('B-');
        }
        else if (mark > 44 && mark < 50) {
            setGrade('C');
        }
        else if (mark > 39 && mark < 45) {
            setGrade('D');
        }
        else {
            setGrade('Fail');
        }
    }

    return (
        <div className='exam-section w-75 mx-auto shadow m-5 p-5 rounded text-center'>
            <h3>{no}th {name}</h3>
            <div className='time-section w-25 text-info ms-auto'>
                {(minutes === 0 && seconds === 0) || showScore
                    ? ''
                    : <h6><span>{minutes}</span> minutes <span>{seconds < 10 ? `0${seconds}` : seconds}</span> seconds</h6>
                }
            </div>
            {(minutes === 0 && seconds === 0) || showScore
                ? (
                    <div className='score-section p-5 rounded'>

                        <h2>{name} Exam is finished</h2>
                        <h4 className='my-4'>You scored {score} out of {questions.length}</h4>
                        <span className='m-2'>Total Questions: {questions.length}</span>
                        <br />
                        <span className='m-2'>Correct Answer: {score}</span>
                        <br />
                        <span>Score Percentage: {((score / questions.length) * 100).toFixed(2)}%</span>
                        <br />
                        <span>Your Grade: {grade}</span>
                        <br />
                        <button className='btn btn-warning mt-3 me-3' onClick={() => navigate(`/all-questions/${name}/${no}`)}>View All Answers</button>
                        <button className='btn btn-success mt-3 me-3' onClick={() => navigate(`/leader-board`)}>View Leader Board</button>
                        <button className='btn btn-info mt-3' onClick={() => navigate(`/home`)}>Back to Home</button>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count mb-4'>
                                <ProgressBar className='mb-2' animated variant="info" now={(currentQuestion / questions.length) * 100} />
                                <div className='question-count-container d-flex justify-content-between'>
                                    <div className='question-no'>Question No {currentQuestion + 1}</div>
                                    <div>Question {currentQuestion + 1} out of {questions.length}</div>
                                </div>
                            </div>
                            <div className='question-text mb-4'><h4>{questions[currentQuestion]?.questionText}</h4></div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                                <button className='answer-option d-block mx-auto w-50 my-3 py-2 rounded-pill border-0' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                            <button onClick={() => handleAnswerOptionClick()} className='btn btn-link'>skip this question</button>
                        </div>
                        <div className=''>
                            <button className='finish-btn d-block ms-auto w-25 mt-5 py-2 rounded-pill border-0' onClick={() => handleFinishExam()}>Finish Exam</button>
                        </div>
                    </>
                )

            }
        </div>
    );
};

export default BCSExam;