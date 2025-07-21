const tabButtons = document.querySelectorAll('.register-btn');
const tabContents = document.querySelectorAll('.register-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        console.log("Tab bosildi:", tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});

// PARTICIPANTS TAB
const participantsBtn = document.querySelectorAll('.participants__button');
const participantsContent = document.querySelectorAll('.participants-content');

participantsBtn.forEach(button => {
    button.addEventListener('click', () => {
        participantsBtn.forEach(btn => btn.classList.remove('active'));
        participantsContent.forEach(content => content.classList.remove('active'));

        button.classList.add('active')

        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId)
        console.log("Tab bosildi:", tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }

    });
});

// MEDIA CONTENT TAB
const mediaContentBtn = document.querySelectorAll('.media__button');
const mediaContentInfo = document.querySelectorAll('.media-content-tab');

mediaContentBtn.forEach(button => {
    button.addEventListener('click', () => {
        mediaContentBtn.forEach(btn => btn.classList.remove('active'));
        mediaContentInfo.forEach(content => content.classList.remove('active'));

        button.classList.add('active')

        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId)
        console.log("Tab bosildi:", tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }

    });
});
// MEDIA CONTENT WRAPPER TAB
const mediaBtn = document.querySelectorAll('.media-content__button');
const mediaContent = document.querySelectorAll('.media-content__wrapper');

mediaBtn.forEach(button => {
    button.addEventListener('click', () => {
        mediaBtn.forEach(btn => btn.classList.remove('active'));
        mediaContent.forEach(content => content.classList.remove('active'));

        button.classList.add('active')

        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId)
        console.log("Tab bosildi:", tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }

    });
});

// SCROLL REGISTER
document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('registerForm').scrollIntoView({ behavior: 'smooth' });
    });
});


// LANGUAGE CHANGE
const activeLang = document.getElementById('activeLang');
const secondLang = document.getElementById('secondLang');
const dropdown = document.getElementById('langDropDown');

// Tugmaga bosganda ikkinchi til ko‘rsin
activeLang.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

// Ikkinchi til bosilganda joy almashinadi
secondLang.addEventListener('click', () => {
    // Ikkala tugmadagi matnni almashtiramiz
    let temp = activeLang.innerText;
    activeLang.innerText = secondLang.innerText;
    secondLang.innerText = temp;

    // Dropdownni yashiramiz
    dropdown.style.display = 'none';

    // (Ixtiyoriy) bu yerda tilni o‘zgartirish funksiyasini chaqirsangiz bo‘ladi
    // masalan: changeLanguageTo(activeLang.innerText);
});





// *** SIDEBAR ***
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
    sidebar.style.display = '9999999999';
    document.body.style.overflow = 'hidden'; // scrollni bloklash
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
    document.body.style.overflow = ''; // scrollni tiklash (default holatga)
}
