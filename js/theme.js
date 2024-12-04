function toggleCSSTheme() {
    const currentCSSTheme = localStorage.getItem('csstheme') || 'lightmode';
    const newCSSTheme = currentCSSTheme === 'lightmode' ? 'darkmode' : 'lightmode';
    document.getElementById('csstheme').setAttribute('href', `../css/${newCSSTheme}.css`);
    localStorage.setItem('csstheme', newCSSTheme);
}

window.onload = function() {
    const csstheme = localStorage.getItem('csstheme') || 'lightmode';
    document.getElementById('csstheme').setAttribute('href', `../css/${csstheme}.css`);
};

