/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

/* eslint-disable react/react-in-jsx-scope */
export default function QuizDaGaleraPAge({ dbExterno }) {
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen 
                externalQuestions={dbExterno.questions}
                externalBg={dbExterno.bg}
            />
        </ThemeProvider>
            /* <pre>
                {JSON.stringify(dbExterno.questions, null, 4)}
            </pre> */
    );
}

export async function getServerSideProps(context) {
    // buscando o db externo, de outras apps
    const [projectName, githubUser] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }

            throw new Error('Falha em pegar os dados');
        })
        .then((respostaConvertidaEmObjeto) => {
           return respostaConvertidaEmObjeto;
        })
        .catch((err) => {
            console.error(err);
        });

        console.log('dbbb', dbExterno);
        console.log('Infos', context.query.id);
    return {
        props: {
            dbExterno,
        }
    }
};