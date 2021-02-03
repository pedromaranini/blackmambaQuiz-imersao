/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Resultado:
      </Widget.Header>

      <Widget.Content>
        {/* {console.log(results)} */}
        <p>
          Você acertou 
          {/* espaçamento */}
          {' '}
          {/* Usando REDUCE */}
          {results.reduce((somatoria, result) => {
            const isAcerto = result === true;
            if (isAcerto) {
              return somatoria + 1;
            }

            return somatoria;
          }, 0)}
          {/* Usando filter */}
          {/* Array = [true, false, true].filter = retorna e exibe o array [true, true] */}
          {/* {results.filter((x) => x).length} */}
          {/* espaçamento */}
          {' '} 
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true ? ' Acertou' : ' Errou'}
            </li>
          ))}       
        </ul>
      </Widget.Content>
    </Widget>
  );
}

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

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative === undefined;
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
              
              <AlternativesForm onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                setIsQuestionSubmited(true);
                setTimeout(() => {
                  addResult(isCorrect);
                  onSubmit();
                  setIsQuestionSubmited(false);
                  setSelectedAlternative(undefined);
                }, 2 * 1000)
              }}>

              {question.alternatives.map((alternative, alternativeIndex) => {
                // console.log('Para de reclamar um pouquinho só');
                const alternativeId = `alternative__${alternativeIndex}`;
                const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                const isSelected = selectedAlternative === alternativeIndex;
                return (
                  <Widget.Topic 
                    as="label"
                    key={alternativeId}
                    htmlFor={alternativeId}
                    data-selected={isSelected}
                    data-status={isQuestionSubmited && alternativeStatus}
                  >
                    <input 
                      id={alternativeId}
                      name={questionId}
                      onChange={() => setSelectedAlternative(alternativeIndex)}
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

              <Button type="submit" disabled={hasAlternativeSelected}>
                Confirmar
              </Button>
              
              {/* <p>selectedAlternative: {`${selectedAlternative}`}</p> */}
              {isQuestionSubmited && isCorrect && <p>Boa jogador :)</p>}
              {isQuestionSubmited && !isCorrect && <p>Vish, precisa pesquisar melhor :(</p>}
            </AlternativesForm>
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
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];


  // Criando um novo array
  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

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
            addResult={addResult}
          />)}
          {screenState === screenStates.LOADING && <LoadingWidget/>}

          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}