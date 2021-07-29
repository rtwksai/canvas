// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract MillionEtherPage {
    bytes3[1000][1000] public pixels;

    function colorPixel(uint x, uint y, bytes3 color) public {
        pixels[x][y] = color;
    }    
}