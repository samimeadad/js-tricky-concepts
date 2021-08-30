function welcomeMessage( userName, greetHandler ) {
    greetHandler( userName );
}

function greetMorning( userName ) {
    console.log( 'Good Morning!!!', userName );
}

function greetEvening( userName ) {
    console.log( 'Good Evening!!!', userName );
}

function greetNight( userName ) {
    console.log( 'Good Night!!!', userName );
}

welcomeMessage( 'Sami', greetMorning ); //Function greetMorning is passed as a paramter of other function.
welcomeMessage( 'Farmee', greetEvening ); //Function greetMorning is passed as a paramter of other function.
welcomeMessage( 'Arishamma', greetNight ); //Function greetMorning is passed as a paramter of other function.