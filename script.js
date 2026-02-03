document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-vamo');

    btn.addEventListener('click', () => {
        Toastify({
            text: "VAMOOOOOOOOOO 🚀",
            duration: 3000,
            destination: "#", // Link opcional
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                // Style is handled in CSS mostly, but we can inline override here if needed
                fontSize: "1.2rem",
                padding: "1rem 2rem"
            },
            onClick: function () { } // Callback after click
        }).showToast();

        // Add a little scaling effect to the button on click JS side if needed, 
        // though CSS active state handles most of it.
        console.log('VAMOOOOOOOOOO acionado!');
    });
});
