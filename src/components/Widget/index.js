import styled from 'styled-components';


const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #FFFF;
  // outra alternativa
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  background-color: #1C1814;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;

    color: #FFFF;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;

    color: #FFFF;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: #A30015;
  color: #FFF;

  font-size: 1.3rem;
  font-family: Montserrat;
  font-weight: bold;

  h1 {
    color: #FFF;

    font-size: 1.3rem;
    font-family: Montserrat;
    font-weight: bold;
  }

  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
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
  color: #FFF;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
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