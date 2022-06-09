const express = require('express')
const app = express()
const PORT = 8000

const rapsinger = {
    'carlos': {
        'age': 29,
        'birthName': 'London',
        'birthLocation': 'England',
    },
    'raoul': {
        'age': 24,
        'birthName': 'Barcelona',
        'birthLocation': 'Spain',
    },
    'john': {
        'age': 21,
        'birthName': 'Rome',
        'birthLocation': 'Italy',
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapper = req.params.name.toLowerCase()
    if (rapsinger[rapper]) {
        res.json(rapsinger[rapper])
    } else {
        res.json(rapsinger['unknown'])
    }
    //res.json(savage)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})