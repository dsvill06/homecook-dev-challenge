import axios from 'axios'


var new_api_id = "7aqlss9ih7"
var stage = "dev"

const kitchen = (i) =>{ 
    return({
    name: `Kitchen ${i}`,
    status: "Confirmed",
    location: "New York",
    cost: "40.00",
    })
}



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
    let fetch_api_url = `https://${new_api_id}.execute-api.us-east-1.amazonaws.com/${stage}/fetch`

    let response = await axiosInstance.get(fetch_api_url)
    if (response){
        data = response.data
        return data
    }
    return data
}

const getKitchenID = async (props) => {
    let data = []
    let fetch_api_url = `https://${new_api_id}.execute-api.us-east-1.amazonaws.com${stage}/fetch/${props.id}`

    let response = await axiosInstance.get(fetch_api_url)
    if (response){
        data = response.data
        return data
    }
    return data
}

const addKitchen = async (props) => {
    let data = props
    let fetch_api_url = `https://${new_api_id}.execute-api.us-east-1.amazonaws.com/${stage}/create`

    let response = await axiosInstance.post(fetch_api_url,data)
    if (response){
        console.log("success");
    }
}

const deleteKitchen = async (props) => {
    let id = props.id 
    let delete_api_url = `https://${new_api_id}.execute-api.us-east-1.amazonaws.com/${stage}/remove/${id}`

    try {
        let response = await axiosInstance.delete(delete_api_url);
        console.log('success');
      } 
    catch (error) {
        console.error('Error deleting kitchen:', error);
      }
    
}

const updateKitchen = async (props) => {
    let {id, data} = props
    let update_api_url = `https://${new_api_id}.execute-api.us-east-1.amazonaws.com/${stage}/update/${id}`

    try{
        let response = await axiosInstance.put(update_api_url,data)
    }
    catch(error) {
        console.error(`Error was found while updating: ${error}`)
    }
}
// TO IMPLEMENT THE FOLLOWING:
// 1 - ADD NEW KITCHEN
// 2 - GET KITCHEN WITH ID
// 3 - UPDATE KITCHEN
// 4 - DELETE KITCHEN



export { getAllKitchens, getKitchenID, addKitchen,deleteKitchen, updateKitchen}
