import './App.css'

function App() {
  const changeTheme = () => {
    if (document.getElementsByTagName('html')[0].classList.contains('myclss')) {
      document.getElementsByTagName('html')[0].classList.remove('myclss')
    } else {
      document.getElementsByTagName('html')[0].classList.add('myclss')
    }
  }
  return (
    <>
      <button onClick={changeTheme}>Change Theme</button>

    </>
  )
}

export default App
