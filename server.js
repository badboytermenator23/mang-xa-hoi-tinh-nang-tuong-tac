const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware để phân tích dữ liệu JSON và URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route gốc
app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng tương tác bài viết mạng xã hội!
    Hãy chia sẻ bài viết của bạn!'); // Cập nhật thông điệp chào mừng
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});