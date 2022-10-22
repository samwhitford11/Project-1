const appsSecret = '6622ba724c513b99641e7ad1419864fd59324f7ff6763f19a4a4465512c9d2a2';

const clientId = 'Mjk4MjE5Njl8MTY2NjQ0OTk0NC42NjcwMTU4';

const baseURL = 'https://api.seatgeek.com/2/events';

//function that does performer search
function eventSearch(performer){
    //constructing url for request
    const url = `${baseURL}?client_id=${clientId}&client_secret=${appsSecret}&performers.slug=${performer}`

    //make your request
    $.ajax(url)
    .then((event) => {
        console.log(event)

        //render the data

    })
    .catch((error)=>{
        console.log(error)
    })
}
eventSearch("charlie-puth")

