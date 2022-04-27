import { Address } from '@graphprotocol/graph-ts';

import { NewArt, EndArt } from '../generated/CanvasManager/CanvasManager';

import { createArt, createArtist, createArtArtist } from './helpers';

function getAccounts(id: string): string[] {
    if (id == '1') {
        return [
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
            '0xB6B0a631c792f76cfDF6C643FD8496A688EC7508',
            '0xbDf266B991E9c903d59446967Df7f1Dd7f96613A',
            '0x1afEE22E178cc0343D7F5c7C3c8B0bd1C6d65Db7',
            '0x4734548f208381dba3FF54aaFc9f83133777A1d1',
            '0xD5AdB9019Cbe14878844C9b678e83c1B70Ee305C',
            '0x7ac017dfC488B8ee04E6ef53D29b2cBD157220be',
            '0xE1ff93B684adE1FBF68b9aD3792ae0195a381377',
            '0x37631f44BCfe97e5391B2A0e323866970b49e579',
            '0xfd36B127425654F589cfB97C25C9106aec029b31',
            '0xdA4e8499A35f3dA2Fe7F7fafa72fD0d38f98D8EB',
            '0x054AF49b68DE750a03f9b00D6B1394a2150d1aa9',
            '0x40cEcAC0aeBE02eeAA038D59bF32597d758B79C6',
            '0x37b45293Aaf561a2CdF9E260Bf984b643Dd3699A',
            '0x7BDA4ff5F2B5a1C47C3BBA15ABEdf95adF0FcAAC',
            '0x1493c8c1597E46e0baa29bfEe854FD91171994f6',
            '0xfD37f37661243C7C2E0AF5CD7Bfb8425AD179A4E',
            '0xA4815467EAeFfCd71F3208348aE8111ebb178CE0',
            '0xeC3bb9Dc49748A59c43D67733d75DF37569C7E57',
            '0x44693933e59a7b2aa6bE99F048B7863C65fA2f89',
            '0x2f744629da3D2d7c60A8578690Ae964814546239',
            '0xC772B8b8EFf043aAEB9783B184bB49a121fF1f62',
            '0xe6797e1918B3E3708278dBAF9DD6aa73D5cF8a3f',
            '0xC5cDCfafE2441cc88E8bC18a43A16bB7d9b37792',
            '0x80aFA2266d0236305bEddFe730de8E7F0F922b9F',
            '0x44C67222F40203B29C9444eE486849097c18da03',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x0Ca82c887265a45F81ea19Ba0b77479F1E81B919',
            '0x668E6f60C3DA7110Bd596f206175d7E217Ffc6b0',
            '0x14876ceC37d16446B7aE44e8E6E2523Ae6095912',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
        ];
    }

    if (id == '2') {
        return [
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0xbDf266B991E9c903d59446967Df7f1Dd7f96613A',
            '0x1afEE22E178cc0343D7F5c7C3c8B0bd1C6d65Db7',
            '0xfd36B127425654F589cfB97C25C9106aec029b31',
            '0x4734548f208381dba3FF54aaFc9f83133777A1d1',
            '0xAfa8d6FC711a792591A587E1908595747AAd5895',
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
            '0x40cEcAC0aeBE02eeAA038D59bF32597d758B79C6',
            '0xcb0381B8d13fBD845628695880cE67014A8c5A42',
            '0x4b9a51EB90a9e6d85e5e3a8982A55646D5A30867',
            '0xeC3bb9Dc49748A59c43D67733d75DF37569C7E57',
            '0xFF76dF972853A7d3Abd50C0040fC234485683d33',
            '0xC772B8b8EFf043aAEB9783B184bB49a121fF1f62',
            '0x80aFA2266d0236305bEddFe730de8E7F0F922b9F',
            '0x68F0420887421e07ae6c2C665579c4CD5B759C0f',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x9a6cc1cD3BD332097BaaEe142CF4dFD0D6f628bd',
            '0x14876ceC37d16446B7aE44e8E6E2523Ae6095912',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
            '0x44C67222F40203B29C9444eE486849097c18da03',
        ];
    }

    if (id == '3') {
        return [
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x80aFA2266d0236305bEddFe730de8E7F0F922b9F',
            '0x68F0420887421e07ae6c2C665579c4CD5B759C0f',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0x4D456BEe5373144eB794fc38bd59a306B8603565',
            '0x5628F0a0b41C035963b55255490768759F2Bd55F',
            '0xf3301BE3D10f0E3Ea47BB2CAc5a5b84eA283b4B0',
            '0xAade02c18F3543B5642e34fDbE4E419D1A782863',
            '0x34740B05DA17edB3c194425Db3D2C245d858Db74',
            '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe',
            '0xb543CCA20c3d45d9a504353daE24761dc5612189',
            '0x37b45293Aaf561a2CdF9E260Bf984b643Dd3699A',
            '0xbDf266B991E9c903d59446967Df7f1Dd7f96613A',
            '0x4734548f208381dba3FF54aaFc9f83133777A1d1',
        ];
    }

    if (id == '4') {
        return [
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x68F0420887421e07ae6c2C665579c4CD5B759C0f',
            '0x80aFA2266d0236305bEddFe730de8E7F0F922b9F',
            '0x14876ceC37d16446B7aE44e8E6E2523Ae6095912',
            '0x1d66a664f31D0EacB0025Bf094c055Da224Be7bc',
            '0x5628F0a0b41C035963b55255490768759F2Bd55F',
            '0xf1772260cD149A18aD48b8bA2e6711A948aA9C0D',
            '0xf3301BE3D10f0E3Ea47BB2CAc5a5b84eA283b4B0',
            '0x9a6cc1cD3BD332097BaaEe142CF4dFD0D6f628bd',
            '0x44C67222F40203B29C9444eE486849097c18da03',
            '0xdA4e8499A35f3dA2Fe7F7fafa72fD0d38f98D8EB',
            '0x1839760561ab03fDAb9DE12c5C6E936a83E6AD1c',
            '0x34740B05DA17edB3c194425Db3D2C245d858Db74',
            '0x9BCd78AE10965c28ED1d60f1963ad55f245BD353',
            '0x1EE2A58DC2858dfb4971d155DdF23932B8A5f6a2',
            '0xAa38bA57d2DD651adF4c94EC2586Ed457073B0Bc',
            '0x37b45293Aaf561a2CdF9E260Bf984b643Dd3699A',
            '0xe28e353d3d2fcb414524745E3E77E1f28E7176fd',
            '0x1493c8c1597E46e0baa29bfEe854FD91171994f6',
            '0x4D456BEe5373144eB794fc38bd59a306B8603565',
            '0xA8B57421A2b8ADd033d9a2D1beFB5B66FF79Fe05',
            '0x8320B302db6608EaD82e24a7E49668aAA5CFd1Fa',
            '0xD5AdB9019Cbe14878844C9b678e83c1B70Ee305C',
            '0x1afEE22E178cc0343D7F5c7C3c8B0bd1C6d65Db7',
            '0x0571325cD46718cd9445f082332a4Fd9a21B8498',
            '0x011C38446d8C8F951f8353B7942916c1834dD47B',
            '0x503BC33AB8A30F54583e7a41A4D89F766f53381f',
            '0x85E768D99DcA922c5D737F8C2435988c390f2638',
            '0x32Dc4C7eBFA6CBeC506eBe0805734a883C468b17',
            '0x539Ff1689fdDEd7ff9eCfee43F887ac342d3d184',
            '0x054AF49b68DE750a03f9b00D6B1394a2150d1aa9',
            '0x37631f44BCfe97e5391B2A0e323866970b49e579',
            '0xf5dEa402E81deaf7F0De58ebC01a5C742e62ffb5',
            '0x7ac017dfC488B8ee04E6ef53D29b2cBD157220be',
            '0xcaE3ec3E3E631b26B7501F52e214620AE37F206A',
            '0x748EF942e114D32659Ca9E664bfa5a0cED5bEEB9',
            '0x4F7efc18c988179e30ee2D999f9Ad1832A9fa47b',
            '0xbcB11d6eD3a84e09A62A996d47E02cC237D203CF',
            '0xd26E893F3Cc94b900bc1B0c41365F96d90Ac9a1C',
            '0xD23960BD2580FE0b82AD8EeCE18de2526ccC10FE',
            '0x4734548f208381dba3FF54aaFc9f83133777A1d1',
        ];
    }

    if (id == '5') {
        return [
            '0xbDf266B991E9c903d59446967Df7f1Dd7f96613A',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x8320B302db6608EaD82e24a7E49668aAA5CFd1Fa',
            '0xD31188701903387E22c76E4A5ab76A000f7d1fBB',
            '0xf5dEa402E81deaf7F0De58ebC01a5C742e62ffb5',
            '0x503BC33AB8A30F54583e7a41A4D89F766f53381f',
        ];
    }

    if (id == '6') {
        return [
            '0xf3301BE3D10f0E3Ea47BB2CAc5a5b84eA283b4B0',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x503BC33AB8A30F54583e7a41A4D89F766f53381f',
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
            '0x4D456BEe5373144eB794fc38bd59a306B8603565',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
            '0x1839760561ab03fDAb9DE12c5C6E936a83E6AD1c',
            '0x7BDA4ff5F2B5a1C47C3BBA15ABEdf95adF0FcAAC',
            '0x32Dc4C7eBFA6CBeC506eBe0805734a883C468b17',
            '0x85E768D99DcA922c5D737F8C2435988c390f2638',
        ];
    }

    if (id == '7') {
        return [
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
            '0x579985BCFb4eE625C33840c1C59E54D0bE7d74C1',
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
        ];
    }

    if (id == '8') {
        return [
            '0xbDf266B991E9c903d59446967Df7f1Dd7f96613A',
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0xe28e353d3d2fcb414524745E3E77E1f28E7176fd',
            '0xaa6e869426aaC29DdCC4c86486ebf123EfB7adDF',
            '0x539Ff1689fdDEd7ff9eCfee43F887ac342d3d184',
            '0x503BC33AB8A30F54583e7a41A4D89F766f53381f',
        ];
    }

    if (id == '9') {
        return [
            '0xe28e353d3d2fcb414524745E3E77E1f28E7176fd',
            '0x539Ff1689fdDEd7ff9eCfee43F887ac342d3d184',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0xdc158f9344EB5Edb59a158061A114620ae7809BC',
            '0xf3301BE3D10f0E3Ea47BB2CAc5a5b84eA283b4B0',
        ];
    }

    if (id == '10') {
        return [
            '0x80aFA2266d0236305bEddFe730de8E7F0F922b9F',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0xf1772260cD149A18aD48b8bA2e6711A948aA9C0D',
            '0x4734548f208381dba3FF54aaFc9f83133777A1d1',
            '0xe28e353d3d2fcb414524745E3E77E1f28E7176fd',
            '0x539Ff1689fdDEd7ff9eCfee43F887ac342d3d184',
        ];
    }
    if (id == '11') {
        return [
            '0x7F64Ce768E8ee3936Ad052C08De3717211204DfE',
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
            '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06',
            '0xF57620FCf716Ae4AefAAd8866eA162fE3D1205C8',
        ];
    }

    if (id == '12') {
        return [
            '0x3F7900F0fcD421F9Ab3450F27306d909A590614C',
            '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5',
            '0xF57620FCf716Ae4AefAAd8866eA162fE3D1205C8',
            '0xf1772260cD149A18aD48b8bA2e6711A948aA9C0D',
        ];
    }

    if (id == '13') {
        return ['0x3F7900F0fcD421F9Ab3450F27306d909A590614C', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5', '0x539Ff1689fdDEd7ff9eCfee43F887ac342d3d184'];
    }

    if (id == '14') {
        return ['0x3F7900F0fcD421F9Ab3450F27306d909A590614C', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5'];
    }

    if (id == '15') {
        return ['0x3F7900F0fcD421F9Ab3450F27306d909A590614C', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5', '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe'];
    }

    if (id == '16') {
        return ['0x4734548f208381dba3FF54aaFc9f83133777A1d1', '0x3F7900F0fcD421F9Ab3450F27306d909A590614C'];
    }

    if (id == '17') {
        return ['0x7F64Ce768E8ee3936Ad052C08De3717211204DfE', '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5'];
    }

    if (id == '18') {
        return ['0x7F64Ce768E8ee3936Ad052C08De3717211204DfE', '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe'];
    }

    if (id == '19') {
        return ['0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe'];
    }

    if (id == '20') {
        return ['0x821cb211De965673B921F3540FAD7fcCD5fB2AF5', '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe'];
    }

    if (id == '21') {
        return ['0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5', '0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06'];
    }

    if (id == '22') {
        return ['0x7222ADf5511F1Dec4a5064b3beB90Fa8DDb81E06', '0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5'];
    }

    if (id == '23') {
        return ['0x9Ef8AfB02bFc296B3F29F9f317d9c119f5fd3DDe', '0x821cb211De965673B921F3540FAD7fcCD5fB2AF5'];
    }

    return [];
}

// function getAccounts(i: string): string[] {
//     if (i == '1') {
//         return data.a1;
//     }

//     if (i == '2') {
//         return data.a2;
//     }

//     return [];
// }

// event NewArt(address indexed who, uint256 indexed nftId, uint256 startTime, uint256 endTime);
export function handleNewArt(event: NewArt): void {
    const artId = event.params.nftId.toString();

    createArt(artId);
}

// event EndArt(address indexed who, uint256 indexed nftId);
export function handleEndArt(event: EndArt): void {
    const artId = event.params.nftId.toString();
    const accounts = getAccounts(artId);

    for (let i = 0; i < accounts.length; i++) {
        const artistId = Address.fromString(accounts[i]).toHexString();
        createArtist(artistId);
        createArtArtist(artId, artistId);
    }
}
