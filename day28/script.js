// axios.get ('')
const APIURL = 'https://api.github.com/users/'
// getUser('fanyalvarez')

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//get api
async function getUser(username) {
    // axios(APIURL + username)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    try {
        const { data } = await axios(APIURL + username)

        console.log(data)
        createUserCard(data)
        getRepos(username)
    } catch (err) {
        if (err.response.status == 404) {
            console.log(err)
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
        console.log(data)
    } catch (err) {
        console.log(err)
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div> 
        </div>
    </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(errorMsg) {
    const cardHTML = `
<div class='card'>
    <h1>${errorMsg}</h1>
</div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name


            reposEl.appendChild(repoEl)

        })


}

//use the search
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    if (user) {
        getUser(user)

        search.value = ''
    }
})