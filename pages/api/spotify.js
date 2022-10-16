import axios from 'axios'

export async function loadSpotify() {
    // Call an external API endpoint to get posts

    const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
        'Authorization': `Bearer ${process.env.spotify_token}`
        }
    })

    return data
}