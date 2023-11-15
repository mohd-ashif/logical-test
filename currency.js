    const formattedAmount = new Intl.NumberFormat('en-US'){
        style ="currency";

        currency = "USD";



    }
    formattedAmount.format(3500)    