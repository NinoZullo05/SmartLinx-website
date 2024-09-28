import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import DefaultPage from './Pages/DefaultPage';
import ErrorPage from './Pages/ErrorPage';
import DocumentationPage from './Pages/DocumentationPage';
function App () {
  return (
    <div className="bg-bg_light dark:bg-bg_dark  custom - scrollbar">
      <BrowserRouter>
        <Routes>
          <Route index element={<DefaultPage />} />
          <Route path="documentation" element={<DocumentationPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
