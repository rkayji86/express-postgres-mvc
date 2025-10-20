require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        'data': "Hello from API BoilerPlate."
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
