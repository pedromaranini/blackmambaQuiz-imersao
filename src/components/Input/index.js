import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid #DDC611;
    color: #DDC611;
    background-color: #0C0355;
    border-radius: 4px;
    outline: 0;
    margin-bottom: 25px;

    font-family: JetBrains Mono;
    font-size: 1rem;
    font-weight: bold;

    ::-webkit-input-placeholder {
        color: #E0AC00;
    }
`;

// destruct, referenciando o onChange
export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase 
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

Input.defaultProps = {
    value: '',
};

// não obrigatorio, apenas boa prática
// validando o tipo de dado que cada um recebe
Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};