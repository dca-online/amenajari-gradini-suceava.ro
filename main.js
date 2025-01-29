document.addEventListener("DOMContentLoaded", () => {
    function displayImages(category) {
        const portfolioItems = document.getElementById('portfolio-items');
        portfolioItems.innerHTML = '';

        const categoryKey = category.replace('.', '');
        console.log(`Selected category: ${categoryKey}`);

        const folderPath = `img/imaginiGradini/${categoryKey}/`;
        
        const images = [
            `${folderPath}IMG-20250110-WA0015.webp`,
            `${folderPath}IMG-20250110-WA0017.webp`,
            `${folderPath}IMG-20250110-WA0021.webp`,
            `${folderPath}IMG-20250110-WA0004.webp`,
            `${folderPath}IMG-20250110-WA0056.webp`,
            `${folderPath}IMG-20250110-WA0060.webp`,
            `${folderPath}IMG-20241119-WA0001.webp`,
            `${folderPath}IMG-20250110-WA0007.webp`,
            `${folderPath}IMG-20241119-WA0006.webp`,
            `${folderPath}IMG-20241119-WA0067.webp`,
            `${folderPath}IMG-20241119-WA0063-1.webp`,
            `${folderPath}IMG-20241119-WA0055.webp`,
            `${folderPath}IMG-20241119-WA0053.webp`,
            `${folderPath}IMG-20241119-WA0048.webp`,
            `${folderPath}IMG-20241119-WA0046.webp`,
            `${folderPath}IMG-20241119-WA0043.webp`,
            `${folderPath}IMG-20241119-WA0049.webp`,
            `${folderPath}IMG-20241119-WA0035.webp`,
            `${folderPath}IMG-20241119-WA0036.webp`,
            `${folderPath}IMG-20241119-WA0031.webp`,
            `${folderPath}IMG-20250110-WA0008.webp`,
            `${folderPath}IMG-20241119-WA0037.webp`,
            `${folderPath}IMG-20250110-WA0013.webp`,
            `${folderPath}IMG-20241119-WA0011.webp`,
            `${folderPath}IMG-20241119-WA0012.webp`,
            `${folderPath}IMG-20241119-WA0014.webp`,
            `${folderPath}IMG-20241119-WA0016.webp`,
            `${folderPath}IMG-20241119-WA0017.webp`,
            `${folderPath}IMG-20241119-WA0018.webp`,
            `${folderPath}IMG-20241119-WA0019.webp`,
            `${folderPath}IMG-20241119-WA0020.webp`,
            `${folderPath}IMG-20241119-WA0021.webp`,
            `${folderPath}IMG-20241119-WA0022.webp`,
            `${folderPath}IMG-20241119-WA0023.webp`,
            `${folderPath}IMG-20241119-WA0024.webp`,
            `${folderPath}IMG-20241119-WA0025.webp`,
            `${folderPath}IMG-20241119-WA0026.webp`,
            `${folderPath}IMG-20241119-WA0027.webp`,
            `${folderPath}IMG-20241119-WA0028.webp`,
            `${folderPath}IMG-20241119-WA0029.webp`,
            `${folderPath}IMG-20241119-WA0030.webp`,
            `${folderPath}IMG-20241119-WA0032.webp`,
            `${folderPath}IMG-20241119-WA0033.webp`,
            `${folderPath}IMG-20241119-WA0034.webp`,
            `${folderPath}IMG-20250110-WA0035.webp`,
            `${folderPath}IMG-20250110-WA0036.webp`,
            `${folderPath}IMG-20250110-WA0037.webp`,
            `${folderPath}IMG-20241119-WA0038.webp`,
            `${folderPath}IMG-20241119-WA0039.webp`,
            `${folderPath}IMG-20241119-WA0040.webp`,
            `${folderPath}IMG-20241119-WA0041.webp`,
        ];

        images.forEach(imageUrl => {
            console.log(`Adding image: ${imageUrl}`);
            const item = document.createElement('div');
            item.className = 'col-md-6 col-lg-4 fadeInUp portfolio-item wow';
            item.innerHTML = `
                <div class="portfolio-inner rounded">
                    <img alt="" class="img-fluid" src="${imageUrl}">
                </div>
            `;
            portfolioItems.appendChild(item);
        });
    }

    document.querySelectorAll('#portfolio-flters li').forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-filter');
            displayImages(selectedCategory);
        });
    });

    displayImages('peisagistica');
});