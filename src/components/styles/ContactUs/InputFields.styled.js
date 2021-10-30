import styled from "styled-components";

export const FormGroup = styled.div`
	color: ${({theme})=> theme.colors.light};
`;

export const Label = styled.label`
	margin-bottom: 1em;
	color: ${({theme})=> theme.colors.light};
`;


export const Input = styled.input`
	padding: 0.5em;
	color: ${({theme})=> theme.colors.light};
	background: transparent;
	border: 1px solid white;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;
export const InputBig = styled.textarea`
	padding: 0.5em;
	color: ${({theme})=> theme.colors.light};
	background: transparent;
	border: 1px solid white;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;