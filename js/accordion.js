"use strict";
{
    const accordingModule = (() => {
        return {
            toggleMenu: (id) => {
                const checkBox = document.getElementById(id);
                checkBox.checked = !checkBox.checked;
            },
        };
    })();
}
