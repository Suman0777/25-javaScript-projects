const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.Search-btn');
const Base_url = "https://api.github.com/users/";

const profileDetail = document.querySelector('.github-profile-detail');

async function fetchapidetail() {
    try {
        const response = await fetch(`${Base_url}${searchInput.value}`);
        const result = await response.json();

        if(result.message === "Not Found"){
            profileDetail.innerHTML = `<p>User not found ❌</p>`;
            profileDetail.style.display = "flex";
            return;
        }

        displayProfilefinder(result);
    } 
    catch (e) {
        console.log("Error:", e);
    }
}

function displayProfilefinder(getProfileDetail){
    const {login, avatar_url, bio, name, public_repos, twitter_username} = getProfileDetail;

    profileDetail.innerHTML = `
        <p class="profilename">The profile user name is: ${login}</p>
        <p class="calssid"> Name: ${name ?? "N/A"}</p>
        <p class="Numberofreppo">Number of Public repo: ${public_repos}</p>
        <p class="Twitter">The twitter id: ${twitter_username ?? "N/A"}</p>
        <img class="imagetaf" src="${avatar_url}" alt="profile-pic">
        <p class="bio">The profile Bio is: ${bio ?? "No bio available"}</p>
    `;

    profileDetail.style.display = "flex"; 
}

searchBtn.addEventListener('click', fetchapidetail);
