import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Supplies from './Supplies';
import Signin from './Signin';
import Contribute from './Contribute';
import Hello from './hello';
import Phases from './Phases';
import Graduation from './Graduation';
import Nostalgia from './nostalgia';
import Signup from './Signup';
import Dashboard from './StudentDashboard/dashboard';
import GalleryHomePage from './Features/Gallery/galleryHome';
import Events from './Features/Events/Events';
import EventUpload from './AdminPages/EventUpload';
import NotificationUpload from './AdminPages/NotificationUpload';
import QuestionPaper from './Features/QuestionPaper/questionpaper';
import ImageComponent from './Features/Gallery/imageComponent';
import Notifications from './Features/Notification/notification';
import ENewsPaper from './Features/Epaper/ENewsPaper';
import AuthGuard from './AuthGuard';
import AdminDashboard from './AdminPages/AdminDashboard';
import NotifcationDelete from './AdminPages/NotificationDelete';
import EventDelete from './AdminPages/EventDelete';
import ImageUploadForm from './Features/Gallery/ImageUploadForm';
import QuestionPaperUploadForm from './Features/QuestionPaper/qpUploadForm';
import ImageDelete from './AdminPages/ImageDelete';
import QuestionPaperDelete from './AdminPages/QuestionPaperDelete';
import './CSS styling/backgroundanimation.css';
import ParticleBackground from './AdminPages/ParticleAnimationBg';
import ChangeProfile from './Features/Profile/ChangeProfile'
import ChangePassword from './Features/Profile/ChangePassword';
import ChatDashboard from './Features/CommunityChat/ChatDashboard';
import ChatsFeedPage from './Features/CommunityChat/ChatsFeedPage'

// import Animation from './CodePen Codes/ParticleAnimation/animation';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/explore" element={<Homepage />}></Route>
          <Route path="/supplies" element={<Supplies />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/contribute" element={<Contribute />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/phases" element={<Phases />}></Route>
          <Route path="/graduation" element={<Graduation />}></Route>
          <Route path="/nostalgia" element={<Nostalgia />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/gallery" element={<GalleryHomePage />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/questionpaper" element={<QuestionPaper />}></Route>
          <Route path="/imagecomponent" element={<ImageComponent />}></Route>
          <Route path="/imageUpload" element={<ImageUploadForm />}></Route>
          <Route path='/changeprofile' element={<ChangeProfile/>}></Route>
          <Route path='/changepassword' element={<ChangePassword/>}></Route>
          {/* Route path of Admin */}
          <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
          <Route path="/admin@clgquora/eventUpload" element={<EventUpload />}></Route>
          <Route path="/admin@clgquora/eventDelete" element={<EventDelete />}></Route>
          <Route path="/admin@clgquora/imageDelete" element={<ImageDelete />}></Route>
          <Route path="/admin@clgquora/notificationUpload" element={<NotificationUpload />}></Route>
          <Route path="/admin@clgquora/notificationDelete" element={<NotifcationDelete />}></Route>
          <Route path="/admin@clgquora/questionPaperUpload" element={<QuestionPaperUploadForm/> }></Route>
          <Route path="/admin@clgquora/questionPaperDelete" element={<QuestionPaperDelete/> }></Route>

          {/* Route for CommunityChat  */}
          <Route path="/communitychat" element={<ChatDashboard />}></Route>
          <Route path="/chat" element={<ChatsFeedPage />}></Route>

          {/* Route paths of Epaper  */}
          <Route path="/ENewsPaper" element={<ENewsPaper key="general" category="general" />}></Route>
          <Route path="/business" element={<ENewsPaper key="business" category="business" />}></Route>
          <Route path="/entertainment" element={<ENewsPaper key="entertainment" category="entertainment" />}></Route>
          <Route path="/sports" element={<ENewsPaper key="sports" category="sports" />}></Route>
          <Route path="/science" element={<ENewsPaper key="science" category="science" />}></Route>
          <Route path="/health" element={<ENewsPaper key="health" category="health" />}></Route>
          <Route path="/technology" element={<ENewsPaper key="technology" category="technology" />}></Route>
          <Route path="/general" element={<ENewsPaper key="general" category="general" />}></Route>
  
        </Routes>
      </Router>
    </div >
  );
}

export default App;
