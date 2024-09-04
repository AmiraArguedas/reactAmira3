import React from 'react'

function Routing() {
  return (
    <Router>
        <Routes>
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
   );
};

export default Routing