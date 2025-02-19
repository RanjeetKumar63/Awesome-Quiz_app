import React, { useState } from "react";
import "./App.css";

const Quiz = () => {
  // Quiz questions and answers
  const questions = [
    {
      type: "mcq",
      question: "1. Which planet is closest to the Sun?",
      options: ["A. Venus", "B. Mercury", "C. Earth", "D. Mars"],
      answer: "B",
    },
    {
      type: "mcq",
      question:
        "2. Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
      options: ["A. Stack", "B. Queue", "C. Tree", "D. Graph"],
      answer: "B",
    },
    {
      type: "mcq",
      question:
        "3. Which of the following is primarily used for structuring web pages?",
      options: ["A. Python", "B. Java", "C. HTML", "D. C++"],
      answer: "C",
    },
    {
      type: "mcq",
      question: "4. Which chemical symbol stands for Gold?",
      options: ["A. Au", "B. Gd", "C. Ag", "D. Pt"],
      answer: "A",
    },
    {
      type: "mcq",
      question:
        "5. Which of these processes is not typically involved in refining petroleum?",
      options: [
        "A. Fractional distillation",
        "B. Cracking",
        "C. Polymerization",
        "D. Filtration",
      ],
      answer: "D",
    },
    {
      type: "integer",
      question: "6. What is the value of 12 + 28?",
      answer: 40,
    },
    {
      type: "integer",
      question: "7. How many states are there in the United States?",
      answer: 50,
    },
    {
      type: "integer",
      question: "8. In which year was the Declaration of Independence signed?",
      answer: 1776,
    },
    {
      type: "integer",
      question: "What is the value of pi rounded to the nearest integer?",
      answer: 3,
    },
    {
      type: "integer",
      question:
        "10. If a car travels at 60 mph for 2 hours, how many miles does it travel?",
      answer: 120,
    },
  ];

  // State to track user answers
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (index, value) => {
    setUserAnswers({ ...userAnswers, [index]: value });
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Calculate score
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.type === "mcq" && userAnswers[index] === question.answer) {
        score++;
      } else if (
        question.type === "integer" &&
        parseInt(userAnswers[index]) === question.answer
      ) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      <h1 className="tp"> Quiz_App</h1>

      <h2>Multiple-Choice and Integer-Type Questions (5 + 5 =10 Questions) </h2>
      <hr />
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <h3>{question.question}</h3>
            {question.type === "mcq" ? (
              question.options.map((option, i) => (
                <div key={i}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option[0]}
                      onChange={() => handleInputChange(index, option[0])}
                    />
                    {option}
                  </label>
                </div>
              ))
            ) : (
              <input
                type="number"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Submit Quiz</button>

      {submitted && (
        <div className="results">
          <h2>
            Your Score: {calculateScore()} / {questions.length}
          </h2>
          <h3>Review Answers:</h3>
          {questions.map((question, index) => (
            <div key={index}>
              <p>
                <strong>Question {index + 1}:</strong> {question.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {userAnswers[index]}
              </p>
              <p>
                <strong>Correct Answer:</strong>{" "}
                {question.type === "mcq" ? question.answer : question.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
