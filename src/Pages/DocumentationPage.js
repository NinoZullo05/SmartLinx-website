import React, { useEffect } from 'react';

const DocumentationPage = () => {
  useEffect(() => {
    window.location.href = '/styleguide/index.html';
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-gray-700 dark:text-gray-300">Caricamento della documentazione...</p>
    </div>
  );
};

export default DocumentationPage;
