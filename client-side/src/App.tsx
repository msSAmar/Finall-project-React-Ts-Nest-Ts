import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./components/signUp"
import Root from "./components/routes/root"
import ErrorPage from "./components/error-page"
import SignIn from "./components/signIn"
import Home from "./components/home/home"
import Help from "./components/help"
import Writing from "./components/assiment/writing"
import Reading_comprehension from "./components/reading-comprehension/reading-comprehension"
import Question from "./components/levelTest/questionPart1"

import QuestionPart1 from "./components/levelTest/questionPart1"
import QuestionPart2 from "./components/levelTest/questionPart2"
import Grammar from "./components/assiment/grammar"
import Vocabulary from "./components/assiment/vocabulary"
import Rc from "./components/assiment/rc"
import Admin from "./components/admin/admin"
import AddAssiment from "./components/admin/addAssiment"


function App() {
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn)
  console.log("isLoggedIn: ", isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            isLoggedIn
              ? <Root />
              : <SignUp />
          } errorElement={<ErrorPage />} >
            <Route path="About" element={<Home />} />
            
            <Route path="/" element={<Home />} />
            <Route path="Help" element={<Help />} />
            <Route path="LevelTest" element={<QuestionPart1 />} />
            
          </Route>
          <Route path="Admin" element={<Admin />} />
          <Route path="AddAssiment" element={<AddAssiment />} />
          <Route path="Chat" element={<Grammar />} />
          <Route path="Grammar" element={<Grammar />} />
          <Route path="Rc" element={<Rc />} />
          <Route path="Vocabulary" element={<Vocabulary />} />
          <Route path="QuestionPart1" element={<QuestionPart1 />} errorElement={<ErrorPage />}/>
          <Route path="SignUp" element={<SignUp />} errorElement={<ErrorPage />} />
          <Route path="SignIn" element={<SignIn />} errorElement={<ErrorPage />}/>
          <Route path="Writing" element={<Writing />} errorElement={<ErrorPage />}/>
          <Route path="Chalange" element={<Reading_comprehension />} errorElement={<ErrorPage />}/>
          
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
