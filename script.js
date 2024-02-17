async function fetchData() {
    // let userNameCF = "v1pin";
    const cfRating = await fetch(`https://codeforces.com/api/user.rating?handle=v1pin`)
    const cfData=await cfRating.json();
    let cfValue = cfData["result"][cfData["result"].length - 1]["newRating"];
    // console.log(cfValue)
    const getCfRank = (rating) => {
            if (rating < 1200) {
                return "Novice";
            } else if (rating < 1400) {
                return "Pupil";
            } else if (rating < 1600) {
                return "Specialist";
            } else if (rating < 1900) {
                return "Expert";
            } else if (rating < 2200) {
                return "Candidate Master";
            } else if (rating < 2400) {
                return "Master";
            } else if (rating < 2600) {
                return "International Master";
            } else if (rating < 3000) {
                return "Grandmaster";
            } else {
                return "International Grandmaster";
            }    
    }
    document.getElementById('cf').innerHTML = `${cfValue} - ( ${getCfRank(cfValue)} )`;

    
    
}
fetchData();

