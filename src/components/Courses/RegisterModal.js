
import Modal from "react-modal"
import {  FaGooglePlay } from "react-icons/fa"
import { Images, StyledRegisterModal, Text } from "../styles/Courses/CoursePageHeader.styled"
import { Image, StyledH1 } from "../styles/Header.styled"
import './Modal.css'
import { Button } from "../styles/BasicUI/Button.styled"
import { Container } from "../styles/BasicUI/Container.styled"
Modal.setAppElement('#root');

export const RegisterModal = () => {
    return (
        <>
        <StyledRegisterModal>
            <Images>
                <img src={process.env.PUBLIC_URL + "/assets/mockup2.png"} alt="mockup"/>
                <img src={process.env.PUBLIC_URL + "/assets/TextLogo.png"} alt="mockup"/>
                
            </Images>
            <Text>
                <h1>Download our app to get access to all the courses</h1>
                <a href="https://play.google.com/store/apps/details?id=com.wisewizard.writo_learning_app"><Button>Get the App <FaGooglePlay/></Button></a>
            </Text>
        </StyledRegisterModal>
        </>
    )
}
