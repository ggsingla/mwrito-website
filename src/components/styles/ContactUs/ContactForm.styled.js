import styled from "styled-components";

export const StyledUserFields = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 40%;
`;
export const FormContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5em 0;
    color : ${({theme})=> theme.colors.light}
`;
