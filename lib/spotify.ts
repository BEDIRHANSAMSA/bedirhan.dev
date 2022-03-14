import axios from "axios";
import qs from "qs";

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const BASIC_AUTH = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const data = qs.stringify({
    grant_type: "refresh_token",
    refresh_token: refresh_token,
  });

  return axios({
    method: "post",
    url: TOKEN_ENDPOINT,
    headers: {
      Authorization: `Basic ${BASIC_AUTH}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  }).then((response: any) => response.data);
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  return await fetch(NOW_PLAYING_ENDPOINT + "/?additional_types=episode", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
