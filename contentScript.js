function replaceProfilePics() {
    const profilePics = document.querySelectorAll('.feed-shared-actor__avatar-image, .feed-shared-actor__avatar-img');

    profilePics.forEach(pic => {
        if (pic.tagName === 'IMG') {
            pic.src = 'https://img.icons8.com/material-rounded/48/000000/gender-neutral-user.png';  
        } else if (pic.style.backgroundImage) {
            pic.style.backgroundImage = 'url("https://img.icons8.com/material-rounded/48/000000/gender-neutral-user.png")';  
        }
    });
}

replaceProfilePics();

// MutationObserver not needed for Firefox
