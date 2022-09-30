import {ToDo} from './ToDo';
import {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import PaginationDot from 'react-native-animated-pagination-dot';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {
  deleteTODO,
  setPAGE,
  addTODO,
  searchTODO,
  deleteALL,
  filterLIST,
} from '../actions/todo';
import {useSelector} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const ToDoContentView = styled.View`
  padding: 0 0 40px 0;
  height: 100%;
  background-color: #fff;
`;
const ToDoPagination = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const DeleteIMG = styled.Image`
  height: 30px;
  width: 30px;
`;
const DeleteIMGwrapper = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 5px;
`;
const FilterBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 5px;
`;
const SearchInput = styled.TextInput`
  border: 1px solid black;
  width: 80%;
  border-radius: 10px;
  padding: 0 7px;
`;
const FilterChoice = styled.View`
  position: absolute;
  top: 150px;
  background-color: #ffff;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;
const FilterText = styled.Text`
  text-align: center;
  font-size: 15px;
`;
const FilterTextWrapper = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  justify-content: center;
`;
const ToDoContent = props => {
  const todoList = useSelector(state => state.todoReducer.listToShow);
  const allList = useSelector(state => state.todoReducer.todoList);
  const [curPage, setCurPage] = useState(props.currPage);
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);
  useEffect(() => {
    props.setpage(curPage);
  }, [curPage]);
  useEffect(() => {
    props.search(search);
  }, [search]);
  return (
    <GestureRecognizer
      onSwipeLeft={() => {
        setCurPage(curPage + 1);
      }}
      onSwipeRight={() => {
        curPage !== 0 && setCurPage(curPage - 1);
      }}>
      <ToDoContentView>
        <FilterBar>
          <SearchInput onChangeText={setSearch} value={search}></SearchInput>
          <TouchableOpacity onPress={() => setOpenFilters(!openFilters)}>
            <DeleteIMG source={require('../assets/filter.png')} />
          </TouchableOpacity>
          <Modal transparent={true} visible={openFilters}>
            <FilterChoice>
              <FilterTextWrapper
                onPress={() => {
                  setOpenFilters(!openFilters);
                  props.filter('all');
                }}>
                <FilterText>All</FilterText>
              </FilterTextWrapper>
              <FilterTextWrapper
                onPress={() => {
                  setOpenFilters(!openFilters);
                  props.filter('done');
                }}>
                <FilterText>Done</FilterText>
              </FilterTextWrapper>
              <FilterTextWrapper
                onPress={() => {
                  setOpenFilters(!openFilters);
                  props.filter('notdone');
                }}>
                <FilterText>Not done</FilterText>
              </FilterTextWrapper>
            </FilterChoice>
          </Modal>
          <TouchableOpacity onPress={() => props.deleteALL()}>
            <DeleteIMG source={require('../assets/delete.png')} />
          </TouchableOpacity>
        </FilterBar>
        <FlatList
          data={todoList}
          renderItem={data => (
            <View>
              <ToDo
                title={data.item.title}
                description={data.item.desc}
                date={data.item.date}
                done={data.item.done}
                key={data.item.key}>
                <BouncyCheckbox
                  size={25}
                  fillColor="green"
                  unfillColor="#FFFFFF"
                  isChecked={data.item.done}
                  onPress={() => {
                    props.delete(data.item.key);
                    props.add({
                      title: data.item.title,
                      desc: data.item.desc,
                      date: data.item.date,
                      done: !data.item.done,
                      key: data.item.key,
                    });
                  }}
                />
              </ToDo>
              <DeleteIMGwrapper onPress={() => props.delete(data.item.key)}>
                <DeleteIMG source={require('../assets/delete.png')} />
              </DeleteIMGwrapper>
            </View>
          )}
        />
        <Button
          title="Add new"
          onPress={() => props.navigation.navigate('AddToDo')}
        />
        <ToDoPagination>
          <Text
            onPress={() => {
              curPage !== 0 && setCurPage(curPage - 1);
            }}>
            Prev
          </Text>
          {todoList && (
            <PaginationDot
              activeDotColor={'green'}
              curPage={props.currPage}
              maxPage={Math.ceil(allList.length / 5)}
            />
          )}
          <Text
            onPress={() => {
              setCurPage(curPage + 1);
            }}>
            Next
          </Text>
        </ToDoPagination>
      </ToDoContentView>
    </GestureRecognizer>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todoList,
    currPage: state.todoReducer.currPage,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteTODO(key)),
    setpage: page => dispatch(setPAGE(page)),
    add: todo => dispatch(addTODO(todo)),
    search: todo => dispatch(searchTODO(todo)),
    deleteALL: () => dispatch(deleteALL()),
    filter: type => dispatch(filterLIST(type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoContent);
