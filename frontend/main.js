const retrouveCommande = async () =>{
    const result = await fetch ("http://localhost:5011/api/orders")
    const data = await result.json()
    console.log(data);
}

const dataToSend ={
    user: "6824c640781197f311bfd800",
    product: "6824c6b1781197f311bfd802",
    quantity: 2,

}

const newOrder = async () => {
    const result = await fetch("http://localhost:5011/api/new-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend),

    })
    const dataResult = await result.json()
    console.log(dataResult)
    return dataResult
}