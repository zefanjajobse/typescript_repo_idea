import './App.css'
import { Button, current_time } from "ui_framework";

import { current_time as testTime } from "typescript_framework";

function App() {
  console.log(testTime);
  return (
    <>
      <Button text={current_time().toUTCString()} primary />
    </>
  )
}

export default App
