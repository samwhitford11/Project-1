const appsSecret = '6622ba724c513b99641e7ad1419864fd59324f7ff6763f19a4a4465512c9d2a2';

const clientId = 'Mjk4MjE5Njl8MTY2NjQ0OTk0NC42NjcwMTU4';

const baseURL = 'https://api.seatgeek.com/2/events';

//function that does performer search
function eventSearch(performer){
    //constructing url for request
    const url = `${baseURL}?client_id=${clientId}&client_secret=${appsSecret}&performers.slug=${performer}`

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
        const artistName = event.title
        const location = event.venue.display_location
        div.html(`
        <h1>${artistName}</h1>
        <h2>${location}</h2>
        `)
        const footer = $("footer")
        footer.append(div)





       })
       


        
    })
    .catch((error)=>{
        console.log(error)
    })
}
$("input[type=submit]").on("click", (event) => {
    //prevent for refresh
    event.preventDefault()

    //grab text from input box
    const inputText = $("input[type=text]").val()

    //update the screen
    eventSearch(inputText)
})
// eventSearch("charlie-puth")


// how to create a function that take the input 
// arrow callback function for on submit event targeting the form element
// select the form element and store in a variable 
// chain a .on() jquery event
// select the form input element 
// store the form input value in a variable 
// invoke our eventSearch() function passing the form input value as an argument



