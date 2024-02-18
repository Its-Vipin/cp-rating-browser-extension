
const inputContainer = document.querySelector(".input-container");
const infoContainer = document.querySelector(".info-container");
const submitBtn = document.getElementById('submit');
infoContainer.style.display = "none";

submitBtn.addEventListener('click' , async function fetchDataCF(){
    const inputValue = document.getElementById('userName1').value;
    if (inputValue.trim() === "") {
        document.getElementById("warningMessage").innerHTML = "Please enter username";
        return false;
    } else {
        inputContainer.style.display = "none";
        infoContainer.style.display = "block";
        try {
            const fetchData = await fetch(`https://codeforces.com/api/user.rating?handle=${inputValue}`);
            const data = await fetchData.json();
            let rating = data["result"][data["result"].length - 1]["newRating"];
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
            console.log(rating);
            document.getElementById('rating').innerHTML = `${rating}`;
            document.getElementById('rank').innerHTML = `${getCfRank(rating)}`;
        } catch (err) {
            console.log("Error fetching data:", err);
            document.getElementById("warningMessage2").innerHTML = "Error fetching data. Please try again later.";
        }
    }

});

