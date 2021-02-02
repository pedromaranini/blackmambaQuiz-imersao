/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

// export const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   margin: auto 10%;
//   @media screen and (max-width: 500px) {
//     margin: auto;
//     padding: 15px;
//   }
// `

export default function Home() {
  const router = useRouter();
  // chamar setName, quando for feita a mudança de estado
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg} >
      <Head>
        <title>NBA - QUIZ</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>NBA - QUIZ</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={ function (infosDoEvento)  {
              infosDoEvento.preventDefault();
              // redirecionando para próxima rota
              router.push(`/quiz?name=${name}`);
            }}>
              <p>Falaaa ae jogador, 
                  bora testar seu conhecimento sobre 
                  o melhor basquete do mundo!
              </p>
              <Input 
                name="nomeDoUsuário"
                onChange={(infosDoEvento) =>  {
                // State
                // name = infosDoEvento.target.value;
                // alterando o nome digitado no botão
                setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome jogador :)"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
          
        <Widget>
          <Widget.Content>
            <h1>QUIZES DA GALERA</h1>
          
            <p>Da uma olhadinha nesses quizes incríveis que o pessoal andou fazendo!</p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedromaranini" />
    </QuizBackground>
  );
}
