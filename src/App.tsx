import TodoListPage from './pages/todoList';
import CalculatorPage from './pages/calculator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<IndexPage/>} exact/> */}
          <Route path='/TodoList' element={<TodoListPage/>} />
          <Route path='/Calculator' element={<CalculatorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
