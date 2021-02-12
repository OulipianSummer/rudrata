import React from 'react';

/*

MIT License

Copyright (c) 2016 Judd Niemann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Attribution:
// SVG data for pieces adapted from here: https://commons.wikimedia.org/wiki/File:Chess_Pieces_Sprite.svg
//
// Modifications by J.Niemann:
// 1. converted into react component format
// 2. Styles separated into Stylesheet
// 3. Changed white lines (curves) on Black Queen
// 4. Made Black Knight's mouth open a little wider
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * ================================================================================================
 Modified by Andrew Benbow in 2020 for use in the Rudrata web app
 1. Removed all piece definitions other than the white knight and the muted square
 2. Modified existing piece definitions to utilize the Font Awesome chessKnight svg path
 3. Modified blanked square color
 * ================================================================================================
 */




const pieceDefs = {
	'N': (transformString) => {
		return (
			 <svg>
				{/* white knight */}
				<g className="g_4" transform={transformString}>

      <path transform='scale(.08), translate(90, 20)' fill="white" d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>

				</g>
			</svg>
		);
	},
	'-': (transformString) => {
		return (
      <svg>
        {/* blanked square */}
        <g transform={transformString}>
          <rect x="0" y="0" width={45} height={45} fill="#2c3e50" fillOpacity="0.8" />
        </g>
      </svg>
		);
	}
};

export default pieceDefs;
