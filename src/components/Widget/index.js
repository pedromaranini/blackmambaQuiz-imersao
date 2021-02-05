import styled from 'styled-components';


const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #DDC611;
  // outra alternativa
  /* background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }}; */
  /* background-color: #1C1814; */
  border-radius: 4px;
  overflow: hidden;

  h1 {
    font-size: 1.3rem;
    font-weight: 700;
    font-family: JetBrains Mono;
    line-height: 1;
    margin-bottom: 0;

    color: #DDC611;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    font-family: JetBrains Mono;
    line-height: 1;
    margin-bottom: 20px;

    color: #DDC611;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    font-family: JetBrains Mono;
    line-height: 1;
    margin-bottom: 0;

    color: #0C0355;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: JetBrains Mono;
    color: #DDC611;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: #DDC611;
  /* color: #A30015; */

  /* font-size: 1.3rem;
  font-family: Montserrat;
  font-weight: bold; */

  h1 {
    color: #0C0355;

    font-size: 1.3rem;
    font-family: JetBrains Mono;
    font-weight: bold;
  }

  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  background-color: #0C0355;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > * {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.success};
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: #0C0355;
  border-radius: 4px;
  background-color: #DDC611;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .8;
  }
`


export default Widget;