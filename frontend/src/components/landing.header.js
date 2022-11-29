import logo from '../images/logoWhite.png';
import tokenStorage from '../tokenStorage';
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
})

function Header() {
  const logout = event => {
    event.preventDefault();
    tokenStorage.removeToken();
    spotifyApi.resetCredentials();
    window.location.href = '/';
  };

  return (
    <header class="text-gray-700 body-font border-b-2 border-[#796a82] bg-[#1a0625] pt-2">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center ">
        <img select draggable="false" class="" style={{width: 200}} src={logo} alt="Trendify"></img>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
      </div>
    </header>
  );
};
  
export default Header;
