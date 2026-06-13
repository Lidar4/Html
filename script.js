document.querySelector('.admin-trigger').addEventListener('click', () => {
    document.getElementById('admin-Panel').style.display = 'block';
});

document.getElementById('adminClose').addEventListener('click', () => {
    document.getElementById('admin-Panel').style.display = 'none';
});

document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    let newTitle = document.getElementById('newTitle').value;
    document.querySelector('.hero h1').innerText = newTitle;
    localStorage.setItem('savedTitle', newTitle);
});

window.onload = () => {
    let saved = localStorage.getItem('savedTitle');
    if(saved) document.querySelector('.hero h1').innerText = saved;
};

