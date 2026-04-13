// ده اللينك اللي هتجيبه من Google Sheets بعد ما تعمل "Publish to Web" بصيغة CSV
const sheetURL = 'حط_لينك_الـCSV_هنا'; 

async function fetchProducts() {
    try {
        const response = await fetch(sheetURL);
        const csvData = await response.text();
        const rows = csvData.split('\n').slice(1); // تجاهل الصف الأول (العناوين)
        
        const container = document.querySelector('.products-container'); // تأكد إن ده اسم الكلاس عندك
        container.innerHTML = ''; 

        rows.forEach(row => {
            const columns = row.split(',');
            if (columns.length >= 3) {
                const [name, price, img] = columns;
                container.innerHTML += `
                    <div class="product-card">
                        <img src="${img}" alt="${name}">
                        <h3>${name}</h3>
                        <p>${price}</p>
                    </div>
                `;
            }
        });
    } catch (error) {
        console.error("خطأ في تحميل المنتجات:", error);
    }
}

fetchProducts();
