// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TreeNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor(address initialOwner) ERC721("TreeNFT", "TREE") Ownable(initialOwner) {}

    function mintNFT(address recipient, string memory metadataURI) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, metadataURI);
        _tokenIdCounter++;
    }
}
