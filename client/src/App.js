import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';


import { useState } from 'react';

import './css/App.css';


function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };
    return (
        <div className='app-body'>
            <div className='header'>
                <h1>Photo Search</h1>
                <SearchBar onSubmit={handleSubmit} />
            </div>

            <ImageList images={images} />
        </div>
    );
}

export default App;