import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoomBooking from './views/RoomBooking';

function App() {
  const [roomId, setRoomId] = useState("A101");
  return (
    <BrowserRouter>
      <RoomBooking roomId={roomId} setRoomId={setRoomId}/>
    </BrowserRouter>
  );
}

export default App;
