import axios from 'axios'


var new_api_id = ""
var stage = "dev"


const axiosInstance = axios.create({
    baseURL: `https://${new_api_id}.execute-api.us-east-1.amazonaws.com/${stage}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
})


// GET ALL KITCHENS
const getAllKitchens = async () => {
    let data = []
    let fetch_api_url = `/fetch`

    let response = await axiosInstance.get(fetch_api_url)
    if (response){
        data = response.data
        return data
    }
    return data
}


// TO IMPLEMENT THE FOLLOWING:
// 1 - ADD NEW KITCHEN
// 2 - GET KITCHEN WITH ID
// 3 - UPDATE KITCHEN
// 4 - DELETE KITCHEN



export { getAllKitchens }
