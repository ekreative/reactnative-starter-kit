import styled from 'styled-components/native';

const greenColor = '#1f9512';

export const WrapperElement = styled.View`
  flex: 1;
  padding-top: 50px;
  justify-content: flex-start;
  align-items: center;
  background-color: #2e2e2e;
`;

export const HeaderTextElement = styled.Text`
  text-align: center;
  color: #fff;
`;

export const DetailButtonWrapperElement = styled.TouchableOpacity`
  margin-top: 20px;
  border-bottom-width: 0.25px;
  border-bottom-color: ${greenColor};
`;

export const DetailButtonTextElement = styled.Text`
  padding-bottom: 2px;
  color: ${greenColor};
`;

export const ErrorTextWrapperElement = styled.ScrollView`
  margin-top: 20px;
`;

export const ErrorTextElement = styled(HeaderTextElement)`
  text-align: left;
`;
