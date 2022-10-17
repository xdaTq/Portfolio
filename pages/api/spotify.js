import axios from 'axios'

export async function loadSpotify() {
    // Call an external API endpoint to get posts

    const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
        'Authorization': `Bearer BQDlKTSzdOepBGzIFYgsGnAWLejxQAsNlJDCFLiziypvKL9-V-X4pfWavE5qVUpkA5_aLiJwiy0f2xmqKUjtPXrdESqTuAE1t6gccW1gAnX0g5ROTw_Y79bAg8Lg9bRciUewxXkbTuj8Mq6XDilePYNXYraOVylGFVLi84lIFy-H0r30rHw2yIdkZKONqQh_3IwhMxAr`
        }
    })

    return data
}