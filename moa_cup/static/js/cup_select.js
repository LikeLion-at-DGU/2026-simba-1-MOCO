const checkIconSrc = document.querySelector('.round_grid').dataset.checkIcon;

const checkIconHTML = `
    <span class="check_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="11" fill="white"/>
            <image href="${checkIconSrc}" x="4.5" y="4.5" width="13" height="13"/>
        </svg>
    </span>`;

document.querySelectorAll('.round_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.round_btn').forEach(b => {
            b.classList.remove('selected');
            b.querySelector('.check_icon')?.remove();
        });
        btn.classList.add('selected');
        btn.insertAdjacentHTML('afterbegin', checkIconHTML);
    });
});

document.querySelectorAll('.category_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category_btn').forEach(b => {
            b.classList.remove('selected');
            b.querySelector('.check_icon')?.remove();
        });
        btn.classList.add('selected');
        btn.insertAdjacentHTML('afterbegin', checkIconHTML);
    });
});
