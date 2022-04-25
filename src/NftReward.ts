import { ClaimRecord } from '../generated/schema';
import { Claim } from '../generated/NftReward/NftReward';
import { LogType, logSourceToString, updateClaimSummary } from './helpers';

// event Claim(uint256 indexed nftId, address indexed contributor, uint256 amount);
export function handleNftRewardClaim(event: Claim): void {
    const id = event.transaction.hash.toHexString();
    const amount = event.params.amount;

    const claimRecord = new ClaimRecord(id);
    claimRecord.timestamp = event.block.timestamp;
    claimRecord.to = event.params.contributor.toHexString();
    claimRecord.amount = amount;
    claimRecord.type = logSourceToString(LogType.NFT_REWARD);
    claimRecord.tokenId = event.params.nftId;
    claimRecord.save();

    updateClaimSummary(LogType.NFT_REWARD, amount);
}
