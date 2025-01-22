$.ajax({
    type: "GET",
    url: "https://narutodb.xyz/api/character?page=25",
    success: function (response) {
        response.characters.map(element => {
            console.log(response)

            let card = `
            <div class="col-md-6 mb-4 d-flex justify-content-center ">
                <div class="card bgc__col mb-3" style="width: 18rem">
                        <img src="${element.images}" class="card-img-top" width="220" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">Jutsu: ${element.jutsu}</p>
                        </div>
                    </div>
            </div>                
            `;
            $("#cardsContainer").append(card);
        });
    }
});