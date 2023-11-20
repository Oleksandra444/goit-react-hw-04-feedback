// import { Component } from "react"; 
import { Title, SectionWrapper } from './SectionTitle.styled.js' 

export const SectionTitle = ({ title, children }) => (
    <>
    <SectionWrapper>
    <Title>
    {title}
    </Title>
        {children}
        </SectionWrapper>
    </>
)