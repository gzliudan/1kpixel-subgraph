import { BigInt } from '@graphprotocol/graph-ts';
import { ClaimSummary, Summary, Art, Artist, ArtArtist } from '../generated/schema';

const SUMMARY_ID = '1';
const ZERO = BigInt.fromU32(0);
const ONE = BigInt.fromU32(1);

export enum LogType {
    PIXEL_COIN_BANK,
    NFT_BANK,
    LIQUIDITY_COIN_BANK,
    NFT_REWARD,
    NFT_OWNER_REWARD,
}

export function logSourceToString(logType: LogType): string {
    switch (logType) {
        case LogType.PIXEL_COIN_BANK:
            return 'PIXEL_COIN_BANK';

        case LogType.NFT_BANK:
            return 'NFT_BANK';

        case LogType.LIQUIDITY_COIN_BANK:
            return 'LIQUIDITY_COIN_BANK';

        case LogType.NFT_REWARD:
            return 'NFT_REWARD';

        case LogType.NFT_OWNER_REWARD:
            return 'NFT_OWNER_REWARD';

        default:
            throw new Error(`logSourceToString: wrong logType`);
    }
}

export function updateClaimSummary(logType: LogType, amount: BigInt): void {
    let claimSummary = ClaimSummary.load(SUMMARY_ID);

    if (claimSummary == null) {
        claimSummary = new ClaimSummary(SUMMARY_ID);
        claimSummary.sumOfAll = ZERO;
        claimSummary.sumOfPixelCoinBank = ZERO;
        claimSummary.sumOfNftBank = ZERO;
        claimSummary.sumOfLiquidityCoinBank = ZERO;
        claimSummary.sumOfNftReward = ZERO;
        claimSummary.sumOfNftOwnerReward = ZERO;
    }

    claimSummary.sumOfAll = claimSummary.sumOfAll.plus(amount);

    switch (logType) {
        case LogType.PIXEL_COIN_BANK:
            claimSummary.sumOfPixelCoinBank = claimSummary.sumOfPixelCoinBank.plus(amount);
            break;

        case LogType.NFT_BANK:
            claimSummary.sumOfNftBank = claimSummary.sumOfNftBank.plus(amount);
            break;

        case LogType.LIQUIDITY_COIN_BANK:
            claimSummary.sumOfLiquidityCoinBank = claimSummary.sumOfLiquidityCoinBank.plus(amount);
            break;

        case LogType.NFT_REWARD:
            claimSummary.sumOfNftReward = claimSummary.sumOfNftReward.plus(amount);
            break;

        case LogType.NFT_OWNER_REWARD:
            claimSummary.sumOfNftOwnerReward = claimSummary.sumOfNftOwnerReward.plus(amount);
            break;

        default:
            throw new Error(`updateClaimSummary: wrong logType`);
    }

    claimSummary.save();
}

export function updateCountOfArt(): void {
    let summary = Summary.load(SUMMARY_ID);

    if (summary == null) {
        summary = new Summary(SUMMARY_ID);
        summary.countOfArt = 0;
        summary.countOfArtist = 0;
    }

    summary.countOfArt = summary.countOfArt + 1;

    summary.save();
}

export function updateCountOfArtist(): void {
    let summary = Summary.load(SUMMARY_ID);

    if (summary == null) {
        summary = new Summary(SUMMARY_ID);
        summary.countOfArt = 0;
        summary.countOfArtist = 0;
    }

    summary.countOfArtist = summary.countOfArtist + 1;

    summary.save();
}

export function createArt(artId: string): void {
    const art = new Art(artId);
    art.summary = SUMMARY_ID;
    art.save();

    updateCountOfArt();
}

export function createArtist(artistId: string): void {
    let artist = Artist.load(artistId);

    if (artist == null) {
        artist = new Artist(artistId);
        artist.summary = SUMMARY_ID;
        artist.save();

        updateCountOfArtist();
    }
}

export function createArtArtist(artId: string, artistId: string): void {
    const artArtistId = artId + '-' + artistId;
    let artArtist = ArtArtist.load(artArtistId);

    if (artArtist == null) {
        artArtist = new ArtArtist(artArtistId);
        artArtist.art = artId;
        artArtist.artist = artistId;
        artArtist.save();
    }
}
