import logo from './logo.svg';
import './App.css';
import Func_JSX_LeTuanTinh from './components/Func_JSX_LeTuanTinh';
import Class_LeTuanTinh from './components/Class_LeTuanTinh';

function App() {
  return (
    <div className="App">
        <h1>He lo ne</h1>
        {/* function component demo */}
        <Func_JSX_LeTuanTinh/>
        <Func_JSX_LeTuanTinh fullName="LeTuanTinh" age="20"/>
      <hr/>
      <Class_LeTuanTinh info="Hoc ReactJs" time="4 months"/>
    </div>
  );
}

export default App;
