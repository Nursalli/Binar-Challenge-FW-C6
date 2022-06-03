const deleteDataUser = document.querySelectorAll('.deleteDataUser');

deleteDataUser.forEach((ddu) => {
    ddu.addEventListener('click', () => {
        const id = ddu.dataset.id;
        const form = document.querySelector('.modal-content form');
    
        form.setAttribute('action', '/dashboard/data-users/delete/' + id + '?_method=DELETE');
    });
})