import React, { useState } from 'react';
import Form from './Form';

const App = () => {
    const [data, setData] = useState(null);

    return (
        <div className="app">
            <Form setData={setData} />
            {data && <div>Weather Data: {JSON.stringify(data)}</div>}
        </div>
    );
};

export default App;
