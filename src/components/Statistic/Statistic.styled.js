import styled from "styled-components";


export const StatisticList = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
margin-bottom:40px;`;

export const StatisticListItem = styled.li`
color: ${props => { return props.theme.colors.main }};
font-size: 20px;
text-transform:uppercase`;

export const TotalCountWrapper = styled.div`margin-bottom:40px`;

export const TotalCountTitle = styled.p`
color: ${props => { return props.theme.colors.main }};
font-size: 20px;
text-transform:uppercase`;

export const PositiveCountWrapper = styled.div``;

export const PositiveCountTitle = styled.p`color: ${props => { return props.theme.colors.main }};
font-size: 20px;
text-transform:uppercase`;



