import Navbar from "./components/Navbar/navbar.component";
import Search from "./components/Search/search.component";
import Value from "./components/Value/value.component";
import Job from "./components/job/job.component";
import Footer from "./components/Footer/footer.component";
const App = () => {
  return (
     <div className="w-[85%] m-auto bg-white">
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>

      </div> 
      
      );
}
 
export default App;