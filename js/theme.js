function toggleCSSTheme() {
    const currentCSSTheme = localStorage.getItem('csstheme') || 'lightmode';
    const newCSSTheme = currentCSSTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    
    // Set the base URL for your CSS files
    const baseURL = '../css/'; // Adjust this if necessary to point to the correct folder
    document.getElementById('csstheme').setAttribute('href', `${baseURL}${newCSSTheme}.css`);
    localStorage.setItem('csstheme', newCSSTheme);
}

window.onload = function() {
    const csstheme = localStorage.getItem('csstheme') || 'lightmode';
    
    // Set the base URL for your CSS files
    const baseURL = '../css/'; // Adjust this if necessary to point to the correct folder
    document.getElementById('csstheme').setAttribute('href', `${baseURL}${csstheme}.css`);
};