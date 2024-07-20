document.addEventListener('DOMContentLoaded', () => {
    const btnGraphics = document.getElementById('btnGraphics');
    const btnSoftware = document.getElementById('btnSoftware');
    const btnNetworking = document.getElementById('btnNetworking');

    const graphicsSection = document.getElementById('Graphics');
    const softwareSection = document.getElementById('Software');
    const networkingSection = document.getElementById('Networking');

    const buttons = [btnGraphics, btnSoftware, btnNetworking];
    const sections = [graphicsSection, softwareSection, networkingSection];

    function switchProject(activeButton, activeSection) {
        // Hide all sections and remove primary class from all buttons
        sections.forEach(section => section.classList.add('hidden'));
        buttons.forEach(button => button.classList.replace('btn-primary', 'btn-outline-dark'));

        // Show the active section and add primary class to the active button
        activeSection.classList.remove('hidden');
        activeButton.classList.replace('btn-outline-dark', 'btn-primary');
    }

    // Add event listeners to buttons
    btnGraphics.addEventListener('click', () => switchProject(btnGraphics, graphicsSection));
    btnSoftware.addEventListener('click', () => switchProject(btnSoftware, softwareSection));
    btnNetworking.addEventListener('click', () => switchProject(btnNetworking, networkingSection));

    // Initially show the graphics section
    switchProject(btnGraphics, graphicsSection);

    const graphicsImages = ['./assets/demo.jpg', './assets/6upe.jpg'];
    let currentGraphicsIndex = 0;
    const graphicsImageElement = document.getElementById('graphicsImage');
    const prevGraphics = document.getElementById('prevGraphics');
    const nextGraphics = document.getElementById('nextGraphics');

    function updateGraphicsImage(index) {
        graphicsImageElement.src = graphicsImages[index];
    }

    prevGraphics.addEventListener('click', () => {
        currentGraphicsIndex = (currentGraphicsIndex - 1 + graphicsImages.length) % graphicsImages.length;
        updateGraphicsImage(currentGraphicsIndex);
    });

    nextGraphics.addEventListener('click', () => {
        currentGraphicsIndex = (currentGraphicsIndex + 1) % graphicsImages.length;
        updateGraphicsImage(currentGraphicsIndex);
    });

    updateGraphicsImage(currentGraphicsIndex);


});