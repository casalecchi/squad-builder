import app from './app.js'

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3004

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
