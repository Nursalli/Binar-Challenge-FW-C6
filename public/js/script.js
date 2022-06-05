const deleteDataUserGames = document.querySelectorAll('.deleteDataUserGames');
const deleteDataUserBiodata = document.querySelectorAll('.deleteBiodataUser');

deleteDataUserGames.forEach((ddu) => {
    ddu.addEventListener('click', () => {
        const id = ddu.dataset.id;
        const form = document.querySelector('.modal-content form');
    
        form.setAttribute('action', '/dashboard/data-users/delete/' + id + '?_method=DELETE');
    });
});

deleteDataUserBiodata.forEach((ddu) => {
    ddu.addEventListener('click', () => {
        const id = ddu.dataset.id;
        const form = document.querySelector('.modal-content form');
    
        form.setAttribute('action', '/dashboard/biodata-users/delete/' + id + '?_method=DELETE');
    });
});