
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElement = document.getElementById('offcanvasNavbar');
    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        if (document.activeElement) {
            document.activeElement.blur();
        }
        window.focus();
    });
});

