function toggleCSSTheme() {
    const currentCSSTheme = localStorage.getItem('csstheme') || 'lightmode';
    const newCSSTheme = currentCSSTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    const baseURL = '/css/';
    document.getElementById('csstheme').setAttribute('href', `${baseURL}${newCSSTheme}.css`);
    localStorage.setItem('csstheme', newCSSTheme);
}

window.onload = function() {
    const csstheme = localStorage.getItem('csstheme') || 'lightmode';
    const baseURL = '/css/';
    document.getElementById('csstheme').setAttribute('href', `${baseURL}${csstheme}.css`);
};