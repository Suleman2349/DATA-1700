const meterToYards=1.0936132983;
function oppgave3(meters){
    let yards = meterToYards * meters;
    console.log(yards + " yards");
    if (yards > 300){
        console.log("That is a really long golf drive")
    }
}
oppgave3(400);