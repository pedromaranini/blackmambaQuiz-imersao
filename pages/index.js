/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';


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
        <title>BLACKMAMBA_QUIZ</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
        // implementando animação (framer-motion)
          as={motion.section}
          trasition={{ delay: 0, durantion: 0.5 }}
          variants={{
            show: {opacity: 1, y: '0'},
            hidden: {opacity: 0, y: '100%'}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>#BLACKMAMBA_QUIZ</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={ function (infosDoEvento)  {
              infosDoEvento.preventDefault();
              // redirecionando para próxima rota
              router.push(`/quiz?name=${name}`);
            }}>
              <p>Falaaa jogador, 
                  bora responder algumas perguntas
                  sobre a nossa LENDA?
              </p>
              <Input 
                name="nomeDoUsuário"
                onChange={(infosDoEvento) =>  {
                // State
                // name = infosDoEvento.target.value;
                // alterando o nome digitado no botão
                setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome :)"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
          
        <Widget
          as={motion.section}
          trasition={{ delay: 0.5, durantion: 0.5 }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>QUIZES DA GALERA</h1>
                <ul>
                  {db.external.map((linkExterno) => {
                    const [projectName, githubUser] = linkExterno
                      // Expressão regular para remover a /
                      .replace(/\//g, '')
                      .replace('https:', '')
                      .replace('.vercel.app', '')
                      .split('.');

                    return (
                  <li key={linkExterno}>
                    <Widget.Topic 
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                        {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                   );
                  })}
                </ul>

          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.footer}
          trasition={{ delay: 0, durantion: 0.5 }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"
        />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedromaranini" />
    </QuizBackground>
  );
}
