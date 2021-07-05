import {Route} from "react-router"
import HomepageScreen from "./Screens/HomepageScreen";
import './App.css';
import Navbar from './Components/navbar.js';
import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen";
import UserScreen from "./Screens/UserScreen";
import TopPosts from "./Screens/TopPosts";
import SecurityScreen from "./Screens/SecurityScreen";
import EditorScreen from "./Screens/EditorScreen";
import NewPostScreen from "./Screens/NewPostScreen";
import NewCategoryScreen from "./Screens/NewCategoryScreen";
import PostDetailScreen from "./Screens/PostDetailScreen";

function App() {



  return (
    <div>
        <Navbar></Navbar>

      <Route  exact path="/" component={HomepageScreen} />
      <Route   path="/login" component={LoginScreen} />
      <Route   path="/register" component={RegisterScreen} />
      <Route path="/profile" component={UserScreen} />
      <Route path="/security" component={SecurityScreen} />
      <Route path="/editor" component={EditorScreen} />
      <Route path="/new-post" component={NewPostScreen} />
      <Route path="/new-category" component={NewCategoryScreen} />
      <Route path="/top-posts" component={TopPosts} />
      <Route path="/post/:id?" component={PostDetailScreen} />
        
    </div>
  );
}

export default App;
