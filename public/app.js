document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search').value;
    // Thực hiện tìm kiếm và hiển thị kết quả
    document.getElementById('results').innerText = 'Kết quả tìm kiếm cho: ' + searchQuery;
});
