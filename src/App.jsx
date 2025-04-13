import "./css/App.css";
import AuthForm from "./components/LoginForm.jsx";
import Pictures from "./components/Pictures";
import Index from "./Index";

function App() {
  return (
    <>
      <Pictures />;
      <AuthForm />;
      <Index />;
    </>
  );
}

export default App;
