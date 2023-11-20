import styled from "styled-components";

export const WrapperButton = styled.ul`
display: flex;
justify-content: center;
gap: 10%;
` 
export const ChooseButton = styled.button`
padding: 10px 20px;
font-size: 20px;
width: 140px;
text-transform: uppercase;
color: ${props => { return props.theme.colors.main } };

background-color: white;
border: 4px solid #efefef;
border-radius: 0.35em;
&:hover {
  border: 4px solid ${props => { return props.theme.colors.accent } };
  border-radius: 0.35em;
  color: ${props => { return props.theme.colors.accent } }; 
;  
}
`