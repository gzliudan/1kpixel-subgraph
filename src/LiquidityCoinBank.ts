import { ClaimRecord } from '../generated/schema';
import { Claim } from '../generated/LiquidityCoinBank/LiquidityCoinBank';
import { LogType, logSourceToString, updateClaimSummary } from './helpers';

// event Claim(address indexed caller, address indexed to, uint256 claimAmount);
export function handleLiquidityCoinBankClaim(event: Claim): void {
    const id = event.transaction.hash.toHexString();
    const amount = event.params.claimAmount;

    const claimRecord = new ClaimRecord(id);
    claimRecord.timestamp = event.block.timestamp;
    claimRecord.to = event.params.to.toHexString();
    claimRecord.amount = amount;
    claimRecord.type = logSourceToString(LogType.LIQUIDITY_COIN_BANK);
    claimRecord.save();

    updateClaimSummary(LogType.LIQUIDITY_COIN_BANK, amount);
}
