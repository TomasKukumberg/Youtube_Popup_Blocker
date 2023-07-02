if(document.querySelectorAll('.ytp-ce-element') !== null) {
    const elements = [...document.querySelectorAll('.ytp-ce-element')];
    elements.map(element => {
        element.setAttribute('hidden', true);
    });
}