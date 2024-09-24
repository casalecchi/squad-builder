import axios from 'axios'

const useFetchSofascore = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/data')
            const data = response.data
            console.log(data)
        } catch (error) {
            console.error('Error fetching Cartola players', error)
        }
    }

    return { fetchData }
}

export default useFetchSofascore
