const appsSecret = '6622ba724c513b99641e7ad1419864fd59324f7ff6763f19a4a4465512c9d2a2';

const clientId = 'Mjk4MjE5Njl8MTY2NjQ0OTk0NC42NjcwMTU4';

const baseURL = 'https://api.seatgeek.com/2/events';

//function that does performer search
function eventSearch(performer){
    const hyphen = performer.replace(/\s+/g, '-')
    console.log(hyphen)
    
    //replace any spaces with a hyphen
    //constructing url for request
    const url = `${baseURL}?client_id=${clientId}&client_secret=${appsSecret}&performers.slug=${hyphen}`

    //make your request
    $.ajax(url)
    .then((events) => {
        console.log(events)

        const list = events.events
        console.log(list)
        //render the data

       list.forEach((event) =>{
        console.log(event)

        const div = $("<div>")
        const artistName = event.title;
        const location = event.venue.display_location;
        const utcdate = event.datetime_utc;
        const date = new Date(utcdate);
        const ticketLink = event.url;


        div.html(`
        <h1>${artistName}</h1>
        <h2>${location}</h2>
        <h2>${date}</h2>
        <h3><input type="button" value='Get Tickets' onclick="window.open('${ticketLink}')"></h3>
        `)
        const footer = $("footer")
        // clear footer before appending

        footer.append(div)
        
        


       })
       
{/* <h3><a onclick="window.open('${ticketLink}')"><input type="button" value="Get Tickets”></a></h3> */}

        
    })
    .catch((error)=>{
        console.log(error)
    })
}
function searchbarClicked() {
    document.getElementById('searchbar').value = '';
    }
$("input[type=submit]").on("click", (event) => {
    //prevent for refresh
    event.preventDefault()

    //grab text from input box
    const inputText = $("input[type=text]").val()
    console.log(inputText)

    //update the screen
    eventSearch(inputText)
})
// {/* // eventSearch("charlie-puth") */}






