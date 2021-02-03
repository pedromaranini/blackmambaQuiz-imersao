import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: #114B5F;
      
      &[data-status="SUCCESS"] {
        background-color: green;
      }
      &[data-status="ERROR"] {
        background-color: #A30015;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;