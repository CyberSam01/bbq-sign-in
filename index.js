const emailCollector = document.getElementById("email-collector")
const sectionBottom = document.getElementById("section-bottom")


emailCollector.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let formData = new FormData(event.target)
    
    // Twee manieren om de value die iemand heeft ingevuld op te halen:
    let name = document.getElementById("input-one").value   // sam
    let fName = formData.get("fName");                      // sam

    let email = formData.get("email")
    console.log(`${name} --- ${email}`);

    let updatedHtmlContent = 
        `<h1>Congratulations, ${fName}!</h1>
        <h2 class="orange-all-cap">You're on your way to becoming a BBQ Master!</h2> 
        <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>`
    
        sectionBottom.innerHTML = updatedHtmlContent;
})
