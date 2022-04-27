import { NewArt, DrawPixel } from '../generated/CanvasManagerV2/CanvasManagerV2';

import { createArt, createArtist, createArtArtist } from './helpers';

// event NewArt(address indexed caller, uint256 indexed artId, uint256 startTime, uint256 endTime);
export function handleNewArt(event: NewArt): void {
    const artId = event.params.artId.toString();

    createArt(artId);
}

// event DrawPixel(address indexed caller, uint256 indexed artId, uint256 momentId, uint256 index, uint24 color);
export function handleDrawPixel(event: DrawPixel): void {
    const artId = event.params.artId.toString();
    const artistId = event.params.caller.toHexString();

    createArtist(artistId);
    createArtArtist(artId, artistId);
}
