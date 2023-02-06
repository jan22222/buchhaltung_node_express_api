
import TaskList from './components/task-list.component.js';
import Overview from './components/overview.component';
import AddTask from './components/add-task.component';
import Task from './components/task.component';
import EditTable from './components/edit-table.component';
import UploadTable from './components/upload-table.component';
import SignUp from './components/signUp.component';
import SignIn from './components/signIn.component';
import UserList from './components/user-list.component';
import UserProfile from './components/user.component';

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
              <Route path="/" element={<Overview/>} />
              <Route path="/tasks" element={<TaskList/>} />
              <Route path="/addTask" element={<AddTask/>} />
              <Route path="/tasks/:id" element={<Task/>} />
              <Route path="/tasks/:id/editTable" element={<EditTable/>} />
              <Route path="/tasks/:id/uploadTable" element={<UploadTable/>} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/signIn" element={<SignIn/>} />
              <Route path="/users" element={<UserList/>} />
              <Route path="/users/:id" element={<UserProfile/>} />
      </Routes>
    </>
  );
};

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default App;