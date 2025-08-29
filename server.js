const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route gốc
app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng tương tác bài viết mạng xã hội!');
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
