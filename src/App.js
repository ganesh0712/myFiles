import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import Superhero from './Superhero';
import Counter from './State/Counter'
import Parent from './State/Parent';
import Destructure from './State/Destructure';
import CurrentTime from './State/CurrentTime';
import Keys from './Rendering/Keys';
import FormDemo from './Rendering/FormDemo';
import Uncontrolled from './Rendering/Uncontrolled';
import ConditionalRendering from './Rendering/ConditionalRendering';
import FragmentsD from './TaskD/FragmentsD';
import Calculaor from './Task/Calculaor';
import DynamicList1 from './Task/DynamicList1';
import JasonArrayForm from './Task/JasonArrayForm'
import JasonArray from './Task/JasonArray';
import DynamicTable from './Task/DynamicTable';
import Tablemain from './State/tablemain';
import Dtablemain from './Task/Dtablemain';
import CRUD from './Task/CRUD';
import MyToDo from './todoapp/myTodo';
import Todo from './todoapp/todo';
import Crud from './Rendering/Crud';
import LoginValidation from './Task/LoginValidation';
import MainCompany from './RoutingCrud/MainCompany';
import Main from './RoutingCrud/Main';
import DisplayMsg from './TaskD/DisplayMsg';
import PureComDemo from './TaskD/PureComDemo';
import RefDemo from './TaskD/RefDemo';
import GetData from './JsonAxios/GetData';
import PostData from './JsonAxios/PostData';
import FetchData from './JsonAxios/FetchData';
import HOC from './TaskD/HOC'
import ClickCounterUsingHoc from './TaskD/ClickCounterUsingHoc';
import HooksObject from './Hooks/HooksObject';
import Reducer from './Hooks/Reducer';
import DataFetching from './Hooks/DataFetching';
import DocTitleOne from './CustomHookCompoent/DocTitleOne';
import CustomHooks1 from './Hooks/CustomHooks1';
import CustomHooks2 from './Hooks/customHooks2';
// import BootstrapForm from './Rendering/BootstrapForm'

function App() {
  return (
    <div className="App">
       {/* <Employee name="Ganesh" id = "101"/>
      <Employee name="Ashok" id = "102"/>
      <Employee name="Dhake" id = "103"/>  */}

{/* <Superhero name = "Ganesh" heroname = "Superman"/>
<Superhero name = "Ganesh" heroname = "Ironman"/>
<Superhero name = "Ganesh" heroname = "Batman"/> */}

      {/* <Counter/> */}
      {/* <Destructure  name= "Ganesh" rollno="32" mark="85"  /> */}
        {/* <CurrentTime/> */}
         {/* <Keys/>  */}
        {/* < FormDemo/> */}
          {/* <ConditionalRendering/> */}
      {/* <FragmentsD/> */}
      {/* <Calculaor/> */}
      {/* <DynamicList1/> */}
      {/* <JasonArrayForm/> */}
      {/* <JasonArray/> */}
      {/* <DynamicTable/> */}
      {/* <Dform/> */}
      {/* <Tablemain/> */}
      {/* <Dtablemain/> */}
      {/* <BootstrapForm/> */}
     {/* <CRUD/> */}
      {/* <MyToDo/> */}
          {/* <Todo/> */}
          <Crud/>
          {/* <MainCompany/> */}
            {/* <Main/> */}
          {/* <DisplayMsg/> */}
          {/* <PureComDemo/> */}
          {/* <FragmentsD/> */}
          {/* <RefDemo/> */}
          {/* <GetData/> */}
          {/* <PostData/> */}
          {/* <FetchData/> */}
          {/* <HOC/> */}
          {/* <ClickCounterUsingHoc/> */}
          {/* <HooksObject/> */}
          {/* <Reducer/> */}
          {/* <DataFetching/> */}
          {/* <CustomHooks1/> */}
          {/* <CustomHooks2/> */}
          {/* <DocTitleOne/> */}
    </div>
  );
}

export default App;
