import React from 'react';
import styled from '@emotion/styled';
import cupcake from '../images/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg';
import { Flex, Box } from 'rebass'

const RecipeContainer = styled(Flex)`
    overflow: auto;
`;

const RecipeName = styled.h2`
    margin: 0;
`;

const SubHeadline = styled.h3`
`;

const RecipeImage = styled.img`
    width: 45%;
`;

const IngredientsList = styled(Box)`
`;

const Ingredient = styled.p`
`;

const InstructionsList = styled(Box)`
`;

const Instruction = styled.p`
`;

const StartPage = () => {
    return (
        <>
        <RecipeContainer>
            <RecipeImage src={cupcake} />
            <Flex flexDirection='column' ml='20px'>
            <RecipeName>Sega chokladmuffins</RecipeName>
            <Flex>
            <IngredientsList>
                <SubHeadline>Ingredients</SubHeadline>
                <Ingredient>2 st ägg</Ingredient>
                <Ingredient>2,5 dl strösocker</Ingredient>
                <Ingredient>100 gram smör, smält</Ingredient>
                <Ingredient>1,5 tsk vaniljsocker</Ingredient>
                <Ingredient>1 krm salt</Ingredient>
                <Ingredient>4 msk kakao</Ingredient>
                <Ingredient>2 dl mjöl</Ingredient>
                <Ingredient>1 tsk bakpulver</Ingredient>
            </IngredientsList>
            {/* <InstructionsList width={1/2}>
                <SubHeadline>Instructions</SubHeadline>
                <Instruction>1. Sätt ugnen på 200 grader, 180 grader för varmluftsugn.</Instruction>
                <Instruction>2. Vispa upp ägg och socker till en porös smet.</Instruction>
                <Instruction>3. Blanda i det smälta smöret och de resterande ingredienserna. Vispa till en jämn smet. Smeten blir ganska trögflytande.</Instruction>
                <Instruction>4. Skeda upp rejält med smet i stora muffinsformar á la amerikanska mått.</Instruction>
                <Instruction>5. Grädda i mitten av ugnen i 10-12 minuter. Inte mer!! Även om det inte ser ut som att de är färdiga ska du inte låta dom gräddas längre. Du måste ju se till att behålla det kladdiga innanmätet ;)</Instruction>
            </InstructionsList> */}
            </Flex>
            </Flex>
        </RecipeContainer>
        </>
    )
}

export default StartPage;