import { CardArray } from "../../Courses/CardArray"
import { Container } from "../BasicUI/Container.styled"
import {FaArrowDown} from 'react-icons/fa'
import styled from "styled-components"
export const AllCourses = () => {
    return (
        <Container>
            <Sorter/>
            <CardArray/>
            <CardArray/>
            <CardArray/>
            <CardArray/>
        </Container>
    )
}

export const Sorter = () =>{
    return (
        <StyledSorter>
            <p>Select Class</p>
            <span>Class 8 <FaArrowDown/></span>
        </StyledSorter>
    )
}

const StyledSorter = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    p{

    }
    span{
        font-weight: 500;
        display : flex;
        align-items: center;
        gap : 1em;
    }
`