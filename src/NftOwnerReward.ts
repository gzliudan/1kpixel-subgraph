import { ClaimRecord } from '../generated/schema';
import { NftOwnerClaim } from '../generated/NftOwnerReward/NftOwnerReward';
import { LogType, logSourceToString, updateClaimSummary } from './helpers';

// event NftOwnerClaim(uint256 indexed nftId, address indexed contributor, uint256 amount);
export function handleNftOwnerRewardClaim(event: NftOwnerClaim): void {
    const id = event.transaction.hash.toHexString();
    const amount = event.params.amount;

    const claimRecord = new ClaimRecord(id);
    claimRecord.timestamp = event.block.timestamp;
    claimRecord.to = event.params.contributor.toHexString();
    claimRecord.amount = amount;
    claimRecord.type = logSourceToString(LogType.NFT_OWNER_REWARD);
    claimRecord.tokenId = event.params.nftId;
    claimRecord.save();

    updateClaimSummary(LogType.NFT_OWNER_REWARD, amount);
}
