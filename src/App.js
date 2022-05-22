import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import AllModelTest from './component/AllModelTest/AllModelTest';
import AllBooks from './component/AllBooks/AllBooks';
import Exams from './component/Exams/Exams';
import AddQuestions from './component/AddQuestions/AddQuestions';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { Toaster } from 'react-hot-toast';
import BCSExam from './component/BCSExam/BCSExam';
import RequireAuth from './component/RequireAuth/RequireAuth';
import AllQuestions from './component/AllQuestions/AllQuestions';
import LeaderBoard from './component/LeaderBoard/LeaderBoard';
import BCSExams from './component/BCSExams/BCSExams';
import UserProfile from './component/UserProfile/UserProfile';
import AllQuestionsAnswer from './component/AllQuestionsAnswer/AllQuestionsAnswer';
import Analytics from './component/Analytics/Analytics';
import NotFound from './component/NotFound/NotFound';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className='container main-container shadow-sm bg-light my-4 p-0'>
      <ScrollToTop></ScrollToTop>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/model-test' element={

          <AllModelTest></AllModelTest>

        }></Route>
        <Route path='/books' element={<AllBooks></AllBooks>}></Route>
        <Route path='/bcs-exam' element={

          <BCSExams></BCSExams>

        }></Route>
        <Route path='/exams/:name' element={
          <RequireAuth>
            <Exams></Exams>
          </RequireAuth>
        }></Route>
        <Route path='/exams/:name/:no' element={
          <RequireAuth>
            <BCSExam></BCSExam>
          </RequireAuth>
        }></Route>
        <Route path='/add-questions' element={
          <RequireAuth>
            <AddQuestions></AddQuestions>
          </RequireAuth>
        }></Route>
        <Route path='/all-questions' element={
          <RequireAuth>
            <AllQuestions></AllQuestions>
          </RequireAuth>
        }></Route>
        <Route path='/all-questions/:name/:id' element={
          <RequireAuth>
            <AllQuestionsAnswer></AllQuestionsAnswer>
          </RequireAuth>
        }></Route>
        <Route path='/all-questions/:name' element={
          <RequireAuth>
            <AllQuestionsAnswer></AllQuestionsAnswer>
          </RequireAuth>
        }></Route>
        <Route path='/leader-board' element={
          <RequireAuth>
            <LeaderBoard></LeaderBoard>
          </RequireAuth>
        }></Route>
        <Route path='/profile' element={
          <RequireAuth>
            <UserProfile></UserProfile>
          </RequireAuth>
        }></Route>
        <Route path='/analytics' element={
          <RequireAuth>
            <Analytics></Analytics>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
