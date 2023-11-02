import { createContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import logo from './assets/logo.png'
import LandingPage from './Pages/Landing/LandingPage'
import Login from './Pages/Account/Login'
import SignUp from './Pages/Account/Signup'
import AboutPage from './Pages/About/about'
import BlogsListing from './Pages/Blogs/Index'
import ContactPage from './Pages/Contact/Contact'
import SubscriptionPage from './Pages/Subscription/Subcription'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Account from './Pages/Account/Account'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './Configs/Firebase';
import Profile from './Pages/Account/Profile'

export const User = createContext(false);

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser(false);
      }
    });
  }, [])

  return (
    <>
      <User.Provider value={user}>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Account />}>
            <Route index path='/account' element={<Navigate to='/account/login' />} />
            <Route path='/account/login' element={<Login />} />
            <Route path="/account/sign-up" element={<SignUp />} />
            <Route path="/account/profile" element={<Profile />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsListing />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path='/blog/:id' element={<>india</>} />
          <Route path="*" element={<h1>Not Fund</h1>} />
        </Routes>
        <Footer />
      </User.Provider>
    </>
  )
}

export default App
