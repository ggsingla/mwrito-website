import { FaAngleUp } from "react-icons/fa"
import styled from "styled-components"
import { scrollBack } from "./Button.styled"



export const BackToTop = () => {
    return (
        <scrollBack>
            Back to the Top
            <FaAngleUp/>
        </scrollBack>
    )
}

