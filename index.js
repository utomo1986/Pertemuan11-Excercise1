/*
Exercise 1

Lakukan pengambilan data yang berasal dari API berikut “https://api.github.com/users/<github_username>”

Gunakan promise utk mendapatkan data

Tampilkan data menggunakan DOM minimal nama, gambar profile, bio, followers, followings
Tampilkan serapih mungkin menggunakan CSS

*/

const getGithubProfile = async () => {
    const api = "https://api.github.com/users/utomo1986";

    fetch(api)
    .then((response) => response.json())
    .then((data) => display(data))
    .catch((error) => console.log("error ",error ));
  };
  
let display = (result) => {
  let githubDataID = document.getElementById("githubData");
  githubDataID.innerHTML = `
      <div><img src="${result.avatar_url}" alt="Avatar"> </div>
        <h3>Nama : ${result.name}</h3>
        <h3>Bio : ${result.bio}</h3>
        <h3>Followers : ${result.followers}</h3>
        <h3>Following : ${result.following}</h3>
      </div>
  `;
  console.log(result);
}

getGithubProfile();

/*<img src="img_avatar.png" alt="Avatar">
*/