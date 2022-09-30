import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
{
  /* 
// @ts-ignore */
}import styled from 'styled-components/native';
const ToDoWrapper = styled.View`
  height: 110px;
  width: 100%;
  position:relative;
  padding:0 0 0 20px
  flex-direction:row;
  align-items:center;
  margin:0 0 10px 0
`;
const ToDoWrapperDone = styled.View`
  height: 110px;
  width: 100%;
  position:relative;
  padding:0 0 0 20px
  flex-direction:row;
  align-items:center;
  margin:0 0 10px 0
  background-color:green;
  opacity:0.7;
`;
const ToDoInfo = styled.View`
  flex-direction: column;
`;
const ToDoTitle = styled.Text`
  font-size: 18px;
`;
const ToDoTitleDone = styled.Text`
  font-size: 18px;
  text-decoration: line-through;
`;
const ToDoDesc = styled.Text`
  font-size: 18px;
  opacity: 0.6;
`;
const ToDoDate = styled.Text`
  font-size: 18px;
  opacity: 0.6;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
export type Props = {
  title: string;
  description: string;
  date: string;
  done: boolean;
  children: JSX.Element;
};
export const ToDo: React.FC<Props> = ({
  title,
  description,
  date,
  done,
  children,
}) => {
  return done ? (
    <ToDoWrapperDone>
      {children}
      <ToDoInfo>
        <ToDoTitleDone>{title}</ToDoTitleDone>
        <ToDoDesc>{description}</ToDoDesc>
      </ToDoInfo>
      <ToDoDate>{date}</ToDoDate>
    </ToDoWrapperDone>
  ) : (
    <ToDoWrapper>
      {children}
      <ToDoInfo>
        <ToDoTitle>{title}</ToDoTitle>
        <ToDoDesc>{description}</ToDoDesc>
      </ToDoInfo>
      <ToDoDate>{date}</ToDoDate>
    </ToDoWrapper>
  );
};
