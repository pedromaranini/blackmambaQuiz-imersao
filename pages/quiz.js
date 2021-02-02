/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando . . .
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${db.questions.length}`}
        </h3>
      </Widget.Header>

      <img 
        alt="Descrição"
        style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        }}
        src={question.image}
      />  
            <Widget.Content>
              <h2>{question.title}</h2>

              <p>{question.description}</p>
              
              <form onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                onSubmit();
              }}>

              {question.alternatives.map((alternative, alternativeIndex) => {
                // console.log('Para de reclamar um pouquinho só');
                const alternativeId = `alternative__${alternativeIndex}`;
                return (
                  <Widget.Topic 
                    key={alternativeId}
                    as="label"
                  >
                    <input 
                      id={alternativeId}
                      name={questionId}
                      type="radio"
                    />
                    {alternative}
                  </Widget.Topic>
                );
              })}

              {/* <pre> */}
                {/* Modo de debug em tela (console.log em tela) */}
                {/* {JSON.stringify(question, null, 4)} */}
              {/* </pre> */}

              <Button type="submit">
                Confirmar
              </Button>
            </form>
            </Widget.Content>
          </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  // console.log('Perguntas', db.questions);
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // carregamento
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);
  
  // handleSubmit do Quiz
  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setCurrentQuestion(questionIndex.RESULT);
    }
  }
  
  return ( 
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer  >
        {/* <QuizLogo /> */}
          
          {screenState === screenStates.QUIZ && (
          <QuestionWidget 
            question={question} 
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />)}
          {screenState === screenStates.LOADING && <LoadingWidget/>}

          {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns jogador!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}