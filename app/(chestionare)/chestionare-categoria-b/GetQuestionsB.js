"use client";
import React, { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import SendButton from "../_components/SendButton";
import SkipButton from "../_components/SkipButton";
import RejectedQuiz from "../_components/RejectedQuiz";
import PassedQuiz from "../_components/PassedQuiz";

async function getData() {
  const res = await fetch(
    "https://adinicu.github.io/sdp-api/questions.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function GetQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [timer, setTimer] = useState(30 * 60);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionsLoaded(true);
    }
  }, [questions]);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timer);
    }
  }, [timer]);

  useEffect(() => {
    if (questions.length === 0) {
      async function fetchData() {
        try {
          const data = await getData();
  
          const shuffledQuestions = shuffleArray(data);
          const selectedQuestions = shuffledQuestions.slice(0, 3);
  
          setQuestions(selectedQuestions);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }
  }, [questions]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption !== null) {
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      } else {
        setWrongScore(wrongScore + 1);
      }
    }

    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const endRejectedQuiz = () => {
    return (
      <RejectedQuiz />
    );
  };

  const endPassedQuiz = () => {
    return (
        <PassedQuiz />
    );
  };

  if (!questionsLoaded) {
    return null;
  }

  if (wrongScore === 2 || timer === 0) {
    return endRejectedQuiz();
  }

  if (currentQuestion >= questions.length) {
    return endPassedQuiz();
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="w-full text-black">
      <div className="bg-white h-16 flex flex-row text-center items-center text-sm md:text-base lg:text-base">
        <div className="basis-1/3">
          <p>{questions.length}</p>
          <p>Intrebari Initiale</p>
        </div>
        <div className="basis-1/3">
          <p>{questions.length - currentQuestion}</p>
          <p>Intrebari Ramase</p>
        </div>
        <div className="basis-1/3">
          <p className="font-bold text-2xl">{formatTime(timer)}</p>  
        </div>
        <div className="basis-1/3">
          <p className="text-green-600">{score}</p>
          <p>Raspunsuri Corecte</p>
        </div>
        <div className="basis-1/3">
          <p className="text-red-600">{wrongScore}</p>
          <p>Raspunsuri Gresite</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-4xl p-2">
        <div className="text-center my-4">
          <p className="text-2xl">{questions[currentQuestion].question}</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 md:h-full">
          <RadioGroup value={selectedOption} onChange={setSelectedOption} className="order-2 md:order-1">
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option) => (
                <RadioGroup.Option
                  key={option}
                  value={option}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                    ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none md:h-24`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              value={option}
                              checked={selectedOption === option}
                              onChange={() => handleOptionSelect(option)}
                              className={`font-medium w-[400px] ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {option}
                            </RadioGroup.Label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <div className="order-1 mb-6 md:order-2">
            <img src={questions[currentQuestion].image} className="w-[500px]" />
          </div>
        </div>
        <div className="my-6 flex justify-between">
          <SkipButton>Raspunde mai tarziu</SkipButton>
          <SendButton onClick={handleNextQuestion} disabled={!selectedOption}>Trimite Raspunsul</SendButton>
        </div>                      
      </div>
    </div>
  );
}
