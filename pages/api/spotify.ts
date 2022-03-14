import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (response.status !== 200) {
    return res.status(200).json({
      is_playing: false,
    });
  }
  const { is_playing, currently_playing_type, item } = await response.json();

  if (is_playing == false) {
    return res.status(200).json({
      is_playing: false,
    });
  }

  if (currently_playing_type == "episode") {
    return res.send({
      is_playing: true,
      episode: {
        name: item.name,
        show: {
          name: item.show.name,
        },
        image: item.show.images[0].url,
        url: item.uri,
      },
    });
  }

  let artists = item.artists.map((artist: any) => artist.name);

  return res.status(200).json({
    is_playing: true,
    song: {
      name: item.name,
      artist: artists.join(", "),
      album: item.album.name,
      image: item.album.images[0].url,
      url: item.uri,
    },
  });
}
