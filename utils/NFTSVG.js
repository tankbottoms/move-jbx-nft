export default function generateSVG(params) {
  return `
    <svg width="500" height="500" viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${generateSVGDefs(params)}
      ${generateSVGBorderText(
        params.quoteToken,
        params.baseToken,
        params.quoteTokenSymbol,
        params.baseTokenSymbol
      )}
      ${generateSVGCardMantle(
        params.quoteTokenSymbol,
        params.baseTokenSymbol,
        params.feeTier
      )}
      ${generateSVGCurve(
        params.tickLower,
        params.tickUpper,
        params.tickSpacing,
        params.overRange
      )}
      ${generateSVGPositionDataAndLocationCurve(
        params.tokenId.toString(),
        params.tickLower,
        params.tickUpper
      )}
      ${generateSVGRareSparkle(params.isRare)}
    </svg>
  `;
}

function btoa(string) {
  return Buffer.from(string).toString("base64");
}

function generateSVGDefs(params) {
  return `
    <defs>
    <style>@import url('https://gateway.pinata.cloud/ipfs/QmRodGNTG8Jex8nQQwufuNi4Brb4Cqy16YBJ3CKqBYfQKP/DM_Mono.css');</style>
      <filter id="f1">
        <feImage result="p0" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <rect width='290px' height='290px' fill='#${params.color0}'/>
          </svg>
          `
        )}" />
        <feImage result="p1" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x1}' cy='${params.y1}' r='120px' fill='#${params.color1}'/>
          </svg>
          `
        )}" />
        <feImage result="p2" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x2}' cy='${params.y2}' r='120px' fill='#${params.color2}'/>
          </svg>
          `
        )}" />
        <feImage result="p3" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x3}' cy='${params.y3}' r='100px' fill='#${params.color3}'/>
          </svg>
          `
        )}" />
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation="42" />
      </filter> 
      <clipPath id="corners">
        <rect width="290" height="290" rx="42" ry="42" />
      </clipPath>',
      <path id="text-path-a" d="M40 12 H250 A28 28 0 0 1 278 40 V250 A28 28 0 0 1 250 278 H40 A28 28 0 0 1 12 250 V40 A28 28 0 0 1 40 12 z" />
      <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463" />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
      </filter>
      <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset=".9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset="0.9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset="0.7" stop-color="white" stop-opacity="1" />
        <stop offset=".95" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="290px" height="200px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clip-path="url(#corners)">
      <rect fill="${
        params.color0
      }" x="0px" y="0px" width="290px" height="290px" />
      <rect style="filter: url(#f1)" x="0px" y="0px" width="290px" height="290px" />
      <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
      <rect fill="none" x="0px" y="0px" width="290px" height="290px" />
      <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.85" /></g>
      <rect x="0" y="0" width="290" height="290" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)" />
    </g>
  `;
}

function generateSVGBorderText(
  quoteToken,
  baseToken,
  quoteTokenSymbol,
  baseTokenSymbol
) {
  return `
  <text text-rendering="optimizeSpeed">
      <textPath startOffset="-100%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          PandaDAO is a decentralized application that allows users to.
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="0%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          PandaDAO is a decentralized application that allows users to.
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Lorem PandaDAO is a decentralized application that allows users to.
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="-50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Lorem PandaDAO is a decentralized application that allows users to.
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
  </text>
	`;
}

function generateSVGCardMantle(quoteTokenSymbol, baseTokenSymbol, feeTier) {
  // ${quoteTokenSymbol}/${baseTokenSymbol}
  // ${feeTier}
  return `
  <g mask="url(#fade-symbol)">
        <rect fill="none" x="0px" y="0px" width="290px" height="200px"></rect>
        <text y="54px" x="32px" fill="white" font-family="'Pixel', 'Courier New', monospace" font-weight="200"
            font-size="24px">
            ${quoteTokenSymbol}
        </text>
        <text y="74px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="16px">
            ${baseTokenSymbol}
        </text>
    </g>
  <rect x="16" y="16" width="258" height="258" rx="26" ry="26" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)">
  </rect>
  `;
}

function getCurve(tickLower, tickUpper, tickSpacing) {
  const curve1 = "M1 1C41 41 105 105 145 145";
  const curve2 = "M1 1C33 49 97 113 145 145";
  const curve3 = "M1 1C33 57 89 113 145 145";
  const curve4 = "M1 1C25 65 81 121 145 145";
  const curve5 = "M1 1C17 73 73 129 145 145";
  const curve6 = "M1 1C9 81 65 137 145 145";
  const curve7 = "M1 1C1 89 57.5 145 145 145";
  const curve8 = "M1 1C1 97 49 145 145 145";
  const tickRange = (tickUpper - tickLower) / tickSpacing;

  if (tickRange <= 4) {
    return curve1;
  } else if (tickRange <= 8) {
    return curve2;
  } else if (tickRange <= 16) {
    return curve3;
  } else if (tickRange <= 32) {
    return curve4;
  } else if (tickRange <= 64) {
    return curve5;
  } else if (tickRange <= 128) {
    return curve6;
  } else if (tickRange <= 256) {
    return curve7;
  } else {
    return curve8;
  }
}

function generateSVGCurveCircle(overRange) {
  const curvex1 = "73";
  const curvey1 = "190";
  const curvex2 = "217";
  const curvey2 = "334";

  if (overRange == 1 || overRange == -1) {
    return `
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px" 
        r="4px" 
        fill="white" 
      />
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px'" 
        r="24px" 
        fill="none" 
        stroke="white" 
      />`;
  } else {
    return `
      <circle 
        cx="${curvex1}px" 
        cy="${curvey1}px"
        r="4px" 
        fill="white" 
      />
			<circle 
        cx="${curvex2}px"
        cy="${curvey2}px" 
        r="4px" 
        fill="white" 
      />
		`;
  }
}

function generateSVGCurve(tickLower, tickUpper, tickSpacing, overRange) {
  if (overRange === 1) {
    overRange = "#fade-up";
  } else if (overRange === -1) {
    overRange = "#fade-down";
  } else {
    overRange = "#none";
  }
  const curve = getCurve(tickLower, tickUpper, tickSpacing);

  return `
	
	`;

  // <g mask="url('fade')" style="transform:translate(72px,189px)">
  //   <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
  //   <path d="${curve}" stroke="rgba(0,0,0,0.3)" stroke-width="32px" fill="none" stroke-linecap="round" />
  // </g>
  // <g mask="url('fade')" style="transform:translate(72px,189px)">
  //   <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
  //   <path d="${curve}" stroke="rgba(255,255,255,1)" fill="none" stroke-linecap="round" />
  // </g>
  // ${generateSVGCurveCircle(overRange)}
}

function tickToString(tick) {
  let sign = "";

  if (tick < 0) {
    tick = tick * -1;
    sign = "-";
  }
  return `${sign}${tick.toString()}`;
}

function rangeLocation(tickLower, tickUpper) {
  const midPoint = (tickLower + tickUpper) / 2;

  if (midPoint < -100_000) {
    return ["8", "7"];
  } else if (midPoint < -50_000) {
    return ["8", "10.5"];
  } else if (midPoint < -10_000) {
    return ["8", "14.25"];
  } else if (midPoint < -100) {
    return ["10", "18"];
  } else if (midPoint < 0) {
    return ["11", "21"];
  } else if (midPoint < 100) {
    return ["13", "23"];
  } else if (midPoint < 10_000) {
    return ["15", "25"];
  } else if (midPoint < 50_000) {
    return ["18", "26"];
  } else if (midPoint < 100_000) {
    return ["21", "27"];
  } else {
    return ["24", "27"];
  }
}

function s(x) {
  return x.charCodeAt(0);
}

function bytes(string) {
  return string.split("").map(s);
}

function generateSVGPositionDataAndLocationCurve(
  tokenId,
  tickLower,
  tickUpper
) {
  const tickLowerStr = tickToString(tickLower);
  const tickUpperStr = tickToString(tickUpper);
  const str1length = bytes(tokenId).length + 4;
  const str2length = bytes(tickLowerStr).length + 10;
  const str3length = bytes(tickUpperStr).length + 10;
  const [xCoord, yCoord] = rangeLocation(tickLower, tickUpper);

  return `

  <g style="transform:translate(29px, 204px)">
        <rect width="60.6666px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">ID: </tspan>
            ${tokenId}
        </text>
    </g>
    <g style="transform:translate(29px, 224px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Reserved: </tspan>
            50%
        </text>
    </g>
    <g style="transform:translate(29px, 244px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Minting: </tspan>
            disabled
        </text>
    </g>
    <g style="transform-origin: 75px 75px;transform: rotateZ(0deg); animation: spin 10s linear infinite;">
        <image width="150" height="150"
            href="data:image/png;base64,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" />
        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
            repeatCount="indefinite" />
    </g>
    <g style="transform-origin: 75px 75px;transform: rotateZ(0deg); animation: spin-rev 10s linear infinite;">
        <image width="150" height="150"
            href="data:image/png;base64,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" />
        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
            repeatCount="indefinite" />
    </g>
    <g transform="translate(75, 75)">
        <image transform="translate(0.917134, 0.917134) rotate(0.000000) scale(0.995414, 0.995414)" width="140"
            height="140"
            xlink:href="data:image/png;base64,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" />

    </g>
    <g transform="translate(75, 75)">
        <image transform="translate(-1.172834, -0.488029) rotate(0.000000) scale(1.005864, 1.005864)" width="140"
            height="140"
            xlink:href="data:image/png;base64,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" />

    </g>
    <style>
        @keyframes spin {
            from {
                transform: translate(70px, 70px) rotateZ(0deg);
            }

            to {
                transform: translate(70px, 70px) rotateZ(360deg);
            }
        }
        @keyframes spin-rev {
            to {
                transform: translate(70px, 70px) rotateZ(0deg);
            }

            from {
                transform: translate(70px, 70px) rotateZ(360deg);
            }
        }
    </style>

  <path style="transform:translate(226px, 226px) scale(0.1)" id="Selection" fill="white"
        d="M 146.00,64.00 C 153.56,65.52 160.73,67.80 168.00,70.34 171.38,71.53 176.09,73.24 178.26,76.21 180.53,79.32 180.99,89.94 181.00,94.00 181.00,94.00 181.00,162.00 181.00,162.00 181.00,162.00 180.00,177.00 180.00,177.00 180.00,177.00 180.00,206.00 180.00,206.00 180.00,206.00 178.96,223.00 178.96,223.00 178.96,223.00 178.96,239.00 178.96,239.00 178.96,239.00 178.00,249.00 178.00,249.00 177.95,253.95 177.94,265.83 175.83,270.00 172.97,275.62 162.77,281.04 157.00,283.40 138.16,291.09 122.85,291.23 103.00,291.00 86.28,290.80 51.09,282.65 34.00,278.37 28.20,276.92 11.05,272.45 7.31,268.61 4.73,265.96 4.48,261.52 4.00,258.00 4.00,258.00 1.58,236.00 1.58,236.00 1.58,236.00 0.91,224.00 0.91,224.00 0.91,224.00 0.00,212.00 0.00,212.00 0.00,212.00 0.00,147.00 0.00,147.00 0.00,147.00 1.00,132.00 1.00,132.00 1.00,132.00 3.91,88.00 3.91,88.00 4.19,84.21 4.47,73.25 6.74,70.63 9.03,67.98 22.09,62.96 26.00,61.40 34.98,57.81 60.95,50.19 70.00,50.18 70.00,50.18 88.00,52.59 88.00,52.59 88.00,52.59 115.00,57.20 115.00,57.20 117.47,57.67 123.43,59.14 125.57,57.89 128.38,56.25 130.28,45.40 131.13,42.00 131.13,42.00 136.58,20.00 136.58,20.00 138.28,12.35 139.13,5.41 147.00,1.45 150.40,-0.25 154.30,-0.04 158.00,0.00 165.96,0.11 172.77,4.01 180.00,6.99 180.00,6.99 216.00,22.22 216.00,22.22 223.21,25.40 233.61,27.26 228.91,38.00 224.21,48.76 216.65,43.52 209.00,40.14 209.00,40.14 174.00,24.70 174.00,24.70 171.62,23.62 162.67,19.02 160.59,19.58 156.57,20.66 155.23,27.54 154.37,31.00 154.37,31.00 146.00,64.00 146.00,64.00 Z M 124.00,69.00 C 124.00,69.00 72.00,60.32 72.00,60.32 67.35,59.97 54.19,62.85 50.00,65.00 50.00,65.00 112.00,79.87 112.00,79.87 117.41,81.23 133.47,85.93 138.00,85.45 142.55,84.96 157.13,80.37 161.00,78.00 161.00,78.00 146.14,74.61 146.14,74.61 142.67,75.03 143.18,78.25 138.94,80.55 134.35,83.03 125.51,81.82 123.46,76.56 122.80,74.88 123.73,70.92 124.00,69.00 Z M 124.00,88.00 C 124.00,88.00 59.00,72.35 59.00,72.35 45.30,69.20 36.90,64.66 24.00,74.00 24.00,74.00 95.00,88.58 95.00,88.58 104.21,90.24 115.96,94.45 124.00,88.00 Z M 109.00,102.00 C 109.00,102.00 44.00,88.58 44.00,88.58 44.00,88.58 14.00,82.00 14.00,82.00 14.00,82.00 11.00,130.00 11.00,130.00 11.00,130.00 10.00,147.00 10.00,147.00 10.00,147.00 10.00,213.00 10.00,213.00 10.00,213.00 10.91,223.00 10.91,223.00 10.91,223.00 12.72,247.00 12.72,247.00 13.11,250.03 13.71,258.36 15.17,260.61 17.65,264.42 34.07,268.10 39.00,269.37 39.00,269.37 62.00,274.65 62.00,274.65 65.99,275.55 73.09,277.25 77.00,276.66 86.29,275.25 93.68,266.96 97.73,259.00 105.49,243.74 109.97,213.23 110.00,196.00 110.00,196.00 110.00,136.00 110.00,136.00 110.00,136.00 109.00,121.00 109.00,121.00 109.00,121.00 109.00,102.00 109.00,102.00 Z M 165.00,88.00 C 165.00,88.00 151.00,93.00 151.00,93.00 156.84,99.26 153.13,108.76 156.00,116.00 156.00,116.00 165.00,88.00 165.00,88.00 Z M 150.00,93.00 C 144.50,95.21 145.98,99.76 146.00,105.00 146.00,105.00 147.00,126.00 147.00,126.00 152.14,125.14 152.71,123.91 154.00,119.00 152.15,118.54 151.21,118.63 150.02,116.77 148.78,114.83 149.03,111.26 149.00,109.00 148.89,101.12 146.78,100.63 150.00,93.00 Z M 138.00,97.00 C 138.00,97.00 125.00,100.00 125.00,100.00 127.71,105.74 132.89,110.34 138.00,114.00 138.00,114.00 138.00,97.00 138.00,97.00 Z M 170.00,101.00 C 167.61,104.89 163.46,117.04 161.69,122.00 160.68,124.85 159.42,129.42 157.35,131.57 154.35,134.70 144.63,134.97 141.31,132.26 138.72,130.15 139.57,127.81 136.69,124.00 133.67,120.01 121.17,107.98 117.00,105.00 117.00,105.00 117.00,147.00 117.00,147.00 117.00,147.00 118.00,164.00 118.00,164.00 118.00,164.00 118.00,240.00 118.00,240.00 118.00,240.00 119.00,255.00 119.00,255.00 119.00,255.00 119.00,281.00 119.00,281.00 130.12,280.97 143.79,277.97 154.00,273.57 157.41,272.10 163.91,268.87 165.83,265.68 167.04,263.66 167.98,249.10 168.04,246.00 168.04,246.00 168.04,234.00 168.04,234.00 168.04,234.00 169.00,222.00 169.00,222.00 169.00,222.00 169.00,203.00 169.00,203.00 169.00,203.00 170.00,187.00 170.00,187.00 170.00,187.00 170.00,138.00 170.00,138.00 170.00,138.00 170.96,124.00 170.96,124.00 170.96,124.00 170.96,110.00 170.96,110.00 170.96,110.00 170.00,101.00 170.00,101.00 Z M 61.00,170.00 C 61.00,170.00 26.00,166.83 26.00,166.83 23.09,166.54 14.42,166.63 16.17,161.94 17.15,159.32 26.51,149.59 28.91,147.00 28.91,147.00 57.72,115.00 57.72,115.00 62.04,110.08 67.30,102.14 74.00,101.00 74.00,101.00 67.30,119.00 67.30,119.00 67.30,119.00 57.00,142.00 57.00,142.00 57.00,142.00 87.00,142.00 87.00,142.00 87.00,142.00 105.00,143.00 105.00,143.00 103.03,149.25 89.97,169.20 85.68,176.00 85.68,176.00 52.95,229.00 52.95,229.00 52.95,229.00 41.20,248.00 41.20,248.00 38.68,252.12 38.18,254.67 33.00,254.00 33.00,254.00 46.33,213.00 46.33,213.00 46.33,213.00 61.00,170.00 61.00,170.00 Z"
        width="200" height="200" />
	`;
}

function generateSVGRareSparkle(isRare) {
  if (isRare) {
    return `
    <g style="transform: scale(0.5) translate(450px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#ffffaa" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
    <g style="transform: scale(0.5) translate(468px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#ffffff" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
    <g style="transform: scale(0.5) translate(486px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#77ffff" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
  `;
  } else {
    return "";
  }
}
