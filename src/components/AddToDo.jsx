import React from 'react';
import {TextInput, Button, Text} from 'react-native';
import dayjs from "dayjs";
import {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components/native';
import {addTODO} from '../actions/todo';
import {connect} from 'react-redux';
const ContentView = styled.View`
  padding: 20px 10px 0 10px;
`;
const TitleInput = styled.TextInput`
  height: 50px;
  font-size: 20px;
  border: 1px solid rgba(0, 63, 186, 0.34);
  border-radius: 20px;
  padding: 0 15px;
`;
const DescInput = styled.TextInput`
  height: 120px;
  font-size: 20px;
  border: 1px solid rgba(0, 63, 186, 0.34);
  border-radius: 20px;
  padding: 10px 15px;
  margin:20px 0;
`;
const SubmitButton = styled.Text`
  font-size: 25px;
  color: #3478F6;
  margin:150px 0 0 0;
  text-align:center;
`;
const AddToDoScreen = props => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <ContentView>
      <TitleInput onChangeText={setTitle} value={title} placeholder="title" />
      <DescInput
        multiline={true}
        numberOfLines={3}
        onChangeText={setDescription}
        value={description}
        placeholder="description"
      />
      <Button title="Select Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <SubmitButton
        onPress={() => {
          props.add(
            {
              title: title,
              desc: description,
              date: dayjs(date).format('DD/MM/YYYY'),
              done: false,
              key: Math.random(),
            },
          );
        }}>
        Submit
      </SubmitButton>
    </ContentView>
  );
};
const mapStateToProps = state => {
  return {todos: state.todoReducer.todoList};
};
const mapDispatchToProps = dispatch => {
  return {add: todo => dispatch(addTODO(todo))};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToDoScreen);
