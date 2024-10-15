function showIframeWindow(title, project, description, author) {
    // Set the iframe window size
    document.getElementById('iframeWindow').style.width = '100vw';
    document.getElementById('iframeWindow').style.height = '100%';
    
    // Set the project title
    document.getElementById('projectName').innerHTML = title;
    document.getElementById('detail').innerHTML = description;
    document.getElementById('author').innerHTML = 'By ' + author;
    document.getElementById('body').style.overflow = 'hidden';

    // Check if the window width is less than 770px
    if (window.innerWidth < 770) {
        // Set the iframe source to the mobile version
        document.getElementById('projectDisplay').src = project + 'MobileSize.html';
    } else {
        // Set the iframe source to the normal version
        document.getElementById('projectDisplay').src = project + 'NormalSize.html';
    }
}


function hideIframeWindow() {
    document.getElementById('iframeWindow').style.width = '0';
    document.getElementById('iframeWindow').style.height = '0';
    document.getElementById('body').style.overflow = 'visible';
    document.getElementById('projectDisplay').src = '';
}

//Scripts by Phone Thon