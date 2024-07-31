import Recat from 'react';
import styled from 'styled-components';

// We use styled box to pass the css for the box via props to sit it 
const StyledBox = styled.div`
border: 1px solid lightgray;
background: ${props => props.backgroundColor || 'pink'};
width: ${props => props.width || '100px'};
height: ${props => props.height || '100px'};
`;

export default StyledBox;