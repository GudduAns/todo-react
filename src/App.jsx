import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Todo from './Components/Todo';
import Console from './ExtraStuff/Console';
import ImageGallery from './Components/ImageGallery';
import SearchTool from './Components/SearchTool/SearchTool';
import Redux from './Components/Redux';
import { Provider } from 'react-redux';
// import Store from './Components/Redux/Store/Store';
import ReduxNew from './Components/ReduxNew/ReduxNew';
import { Store } from './Store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/console" element={<Console />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/search-tool" element={<SearchTool />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/redux-new" element={<ReduxNew />} />
          <Route path="/*" element={<p>page not found</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
