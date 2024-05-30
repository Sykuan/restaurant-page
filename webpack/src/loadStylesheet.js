let currentStylesheets = [];

export default function loadStylesheet(href) {
    currentStylesheets.forEach(stylesheet => stylesheet.remove());
    currentStylesheets = [];

    // Add the new stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    currentStylesheets.push(link);
}