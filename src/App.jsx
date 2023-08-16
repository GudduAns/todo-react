import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Todo from './Components/Todo';
import Console from './ExtraStuff/Console';
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/console" element={<Console />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/*" element={<p>page not found</p>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
