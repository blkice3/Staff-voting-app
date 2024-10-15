// JavaScript to handle the voting system
let votes = {
    Aaron:0,
    Alex:0,
    Elijah:0,
    Evaldas:0,
    Funmi:0,
    Irina:0,
    Magda:0,
    Mambi:0,
    Mary:0,
    Miriam:0,
    Nelson:0,
    Obi:0,
    Rosa:0,
    Sarah:0,
    Stephanie:0, 
    Tasmina:0,
    Zoe:0
};

// Function to cast a vote
function castVote(profileName) {
    // Increment the vote for the selected profile
    votes[profileName]++;
    console.log(votes[profileName])
    
// Update the vote count display for the profile
document.getElementById('most-voted-profile').innerText = votes[profileName];
//document.getElementById(profileName.toLowerCase() + '-votes').innerText = votes[profileName];

// Update statistics for the profile with the most votes
    updateMostVotedProfile();
}

// Function to find and display the profile with the most votes
function updateMostVotedProfile() {
    let maxVotes = 0;
    let mostVotedProfile = '';

    // Loop through the votes object to find the profile with the most votes
    for (let profile in votes) {
        if (votes[profile] > maxVotes) {
            maxVotes = votes[profile];
            mostVotedProfile = profile;
        }
    }

    // Display the most voted profile
    if (mostVotedProfile) {
        document.getElementById('most-voted-profile').innerText = `${mostVotedProfile} with ${maxVotes} votes`;
    } else {
        document.getElementById('most-voted-profile').innerText = 'No votes yet.';
    }
}
