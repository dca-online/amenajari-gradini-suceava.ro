// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM fully loaded and parsed");

//     displayImages('Peisagistica');
//     displayImages('Mentenanta plante')


//     document.querySelectorAll('#portfolio-flters li').forEach(button => {
//         button.addEventListener('click', () => {
//             const selectedCategory = button.getAttribute('data-filter');
//             displayImages(selectedCategory);
//         });
//     });
// });

// function displayImages(category) {
//     const portfolioItemsContainer = document.getElementById('portfolio-items');
//     portfolioItemsContainer.innerHTML = '';

//     const folderPath = `img/imaginiGradini/${category}/`;

//     const images = {
//         "Peisagistica": [
//             `${folderPath}IMG-20250110-WA0015.webp`,
//             `${folderPath}IMG-20250110-WA0017.webp`,
//             `${folderPath}IMG-20250110-WA0021.webp`,
//             `${folderPath}IMG-20250110-WA0004.webp`,
//             `${folderPath}IMG-20250110-WA0056.webp`,
//             `${folderPath}IMG-20250110-WA0060.webp`,
//             `${folderPath}IMG-20241119-WA0001.webp`,
//             `${folderPath}IMG-20250110-WA0007.webp`,
//             `${folderPath}IMG-20241119-WA0006.webp`,
//             `${folderPath}IMG-20241119-WA0067.webp`,
//             `${folderPath}IMG-20241119-WA0063-1.webp`,
//             `${folderPath}IMG-20241119-WA0055.webp`,
//             `${folderPath}IMG-20241119-WA0053.webp`,
//             `${folderPath}IMG-20241119-WA0048.webp`,
//             `${folderPath}IMG-20241119-WA0046.webp`,
//             `${folderPath}IMG-20241119-WA0043.webp`,
//             `${folderPath}IMG-20241119-WA0049.webp`,
//             `${folderPath}IMG-20241119-WA0035.webp`,
//             `${folderPath}IMG-20241119-WA0036.webp`,
//             `${folderPath}IMG-20241119-WA0031.webp`,
//             `${folderPath}IMG-20250110-WA0008.webp`,
//             `${folderPath}IMG-20241119-WA0037.webp`,
//             `${folderPath}IMG-20250110-WA0013.webp`,
//             `${folderPath}IMG-20241119-WA0011.webp`,
//             `${folderPath}IMG-20241119-WA0012.webp`,
//             `${folderPath}IMG-20241119-WA0014.webp`,
//             `${folderPath}IMG-20241119-WA0016.webp`,
//             `${folderPath}IMG-20241119-WA0017.webp`,
//             `${folderPath}IMG-20241119-WA0018.webp`,
//             `${folderPath}IMG-20241119-WA0019.webp`,
//             `${folderPath}IMG-20241119-WA0020.webp`,
//             `${folderPath}IMG-20241119-WA0021.webp`,
//             `${folderPath}IMG-20241119-WA0022.webp`,
//             `${folderPath}IMG-20241119-WA0023.webp`,
//             `${folderPath}IMG-20241119-WA0024.webp`,
//             `${folderPath}IMG-20241119-WA0025.webp`,
//             `${folderPath}IMG-20241119-WA0026.webp`,
//             `${folderPath}IMG-20241119-WA0027.webp`,
//             `${folderPath}IMG-20241119-WA0028.webp`,
//             `${folderPath}IMG-20241119-WA0029.webp`,
//             `${folderPath}IMG-20241119-WA0030.webp`,
//             `${folderPath}IMG-20241119-WA0032.webp`,
//             `${folderPath}IMG-20241119-WA0033.webp`,
//             `${folderPath}IMG-20250110-WA0035.webp`,
//             `${folderPath}IMG-20250110-WA0036.webp`,
//             `${folderPath}IMG-20250110-WA0037.webp`,
//             `${folderPath}IMG-20241119-WA0038.webp`,
//             `${folderPath}IMG-20241119-WA0039.webp`,
//             `${folderPath}IMG-20241119-WA0040.webp`,
//             `${folderPath}IMG-20241119-WA0041.webp`,
//         ],
//         "Mentenanta plante": [
//             `img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0028.webp`,
//             `${folderPath}IMG-20250110-WA0029.webp`,
//             `${folderPath}IMG-20241119-WA0069.webp`,
//             `${folderPath}IMG-20250110-WA0038.webp`,
//         ],
//         "Mentenanta gradina": [
//             `${folderPath}IMG-20241119-WA0013.webp`,
//             `${folderPath}IMG-20241119-WA0081.webp`,
//             `${folderPath}IMG-20250110-WA0024.webp`,
//             `${folderPath}IMG-20241119-WA0015.webp`,
//             `${folderPath}IMG-20250110-WA0026.webp`,
//             `${folderPath}IMG-20250110-WA0010.webp`,
//             `${folderPath}IMG-20250110-WA0022.webp`,
//             `${folderPath}IMG-20241119-WA0007.webp`,
//             `${folderPath}IMG-20241119-WA0063.webp`,
//             `${folderPath}IMG-20250110-WA0014.webp`,
//             `${folderPath}IMG-20250110-WA0026.webp`,
//             `${folderPath}IMG-20241119-WA0008.webp`,
//         ],
//         "Irigare si drenaj": [
//             `${folderPath}IMG-20250110-WA0057.webp`,
//             `${folderPath}IMG-20250110-WA0058.webp`,
//             `${folderPath}IMG-20250110-WA0003.webp`,
//             `${folderPath}IMG-20250110-WA0059.webp`,
//             `${folderPath}IMG-20241119-WA0080.webp`,
//             `${folderPath}IMG-20250110-WA0082.webp`,
//             `${folderPath}IMG-20250110-WA0025.webp`,
//             `${folderPath}IMG-20241119-WA0083.webp`,
//             `${folderPath}IMG-20241119-WA0074-1.webp`,
//             `${folderPath}IMG-20241119-WA0070-1.webp`,
//             `${folderPath}IMG-20241119-WA0073-1.webp`,
//             `${folderPath}IMG-20250110-WA0016.webp`,
//         ],
//         "Tehnologii de gradina": [
//             `${folderPath}IMG-20250110-WA0040.webp`,
//             `${folderPath}IMG-20250110-WA0042.webp`,
//             `${folderPath}IMG-20250110-WA0044.webp`,
//             `${folderPath}IMG-20250110-WA0045.webp`,
//             `${folderPath}IMG-20250110-WA0041.webp`,
//             `${folderPath}IMG-20250110-WA0047.webp`,
//             `${folderPath}IMG-20250110-WA0051.webp`,
//             `${folderPath}IMG-20250110-WA0052.webp`,
//             `${folderPath}IMG-20250110-WA0054.webp`,
//         ],
//         "Gradinarit si Peisagistica urbana": [
//             `${folderPath}IMG-20250110-WA0005.webp`,
//             `${folderPath}IMG-20250110-WA0018.webp`,
//             `${folderPath}IMG-20250110-WA0019.webp`,
//             `${folderPath}IMG-20250110-WA0020.webp`,
//         ],
//     };

//     const selectedImages = images[category] || [];

//     selectedImages.forEach(imageUrl => {
//         const item = document.createElement('div');
//         item.className = 'col-md-6 col-lg-4 fadeInUp portfolio-item wow';
//         item.innerHTML = `
//             <div class="rounded">
//                 <img alt="" class="img-fluid" src="${imageUrl}">
//             </div>
//         `;
//         portfolioItemsContainer.appendChild(item);
//     });

//     const itemCount = selectedImages.length;
//     const itemHeight = 200; 
//     portfolioItemsContainer.style.height = `${Math.ceil(itemCount / 3) * itemHeight}px`; // 3 items per row
// }

// let resizeTimer;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         initializePortfolioCards()
//     }, 250)
// })

// initializePortfolioCards();

