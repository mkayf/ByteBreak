import './App.css'

function App() {

  const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

  return (
    <>
      <h1>{projectID}</h1>
    </>
  )
}

export default App
