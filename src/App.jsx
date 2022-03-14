import AppLetras from "./components/AppLetras";
import {LectrasProvider} from "./context/LetrasProvider"; 

function App() {

  return (
    <LectrasProvider>
        <AppLetras/>
    </LectrasProvider>
  )
}

export default App
