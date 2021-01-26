import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('./images/dung-trieu-DVA6kQNdUWs-unsplash.jpg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
`;

const Box = styled.div`
    background-color: #3a3a3c;
    
    height: 100%;
    position:absolute;
`;

const Box1 = styled(Box)`
    left: 0;
    width: 10%;
`;

const Box2 = styled(Box)`
    left: 12%;
    width: 3%;
`;

const Box3 = styled(Box)`
    right: 12%;
    width: 7%;
`;

const Box4 = styled(Box)`
    right: 0;
    width: 8%;
`;

const Headline = styled.h1`
    color: white;
    font-size: 4rem;
`;

const StartScreen = () => {
    return (
        <Background>
            <Box1 />
            <Box2 />
            <Headline>Hungry</Headline>
            <Box3 />
            <Box4 />
        </Background>
    )
}

export default StartScreen;