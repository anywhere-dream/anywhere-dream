import { ChainIds, createGetBrowserLink } from '@ant-design/web3-common';
import { ArbitrumCircleColorful, AvalancheCircleColorful, BSCCircleColorful, EthereumCircleColorful, EthereumFilled, EtherscanCircleColorful, OptimismCircleColorful, PolygonCircleColorful } from '@ant-design/web3-icons';
import { jsx as _jsx } from "react/jsx-runtime";
export var Mainnet = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  icon: /*#__PURE__*/_jsx(EthereumCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(EtherscanCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://etherscan.io')
  },
  nativeCurrency: {
    icon: /*#__PURE__*/_jsx(EthereumFilled, {}),
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
};
export var Goerli = {
  id: ChainIds.Goerli,
  name: 'Goerli',
  icon: /*#__PURE__*/_jsx(EthereumCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(EthereumCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://goerli.etherscan.io')
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
};
export var Polygon = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  icon: /*#__PURE__*/_jsx(PolygonCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(PolygonCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://polygonscan.com')
  },
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  }
};
export var BSC = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  icon: /*#__PURE__*/_jsx(BSCCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(BSCCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://bscscan.com')
  },
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB'
  }
};
export var Arbitrum = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  icon: /*#__PURE__*/_jsx(ArbitrumCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(ArbitrumCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://arbiscan.io')
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
};
export var Optimism = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  icon: /*#__PURE__*/_jsx(OptimismCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(OptimismCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://optimistic.etherscan.io')
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
};
export var Avalanche = {
  id: ChainIds.Avalanche,
  name: 'Avalanche',
  icon: /*#__PURE__*/_jsx(AvalancheCircleColorful, {}),
  browser: {
    icon: /*#__PURE__*/_jsx(AvalancheCircleColorful, {}),
    getBrowserLink: createGetBrowserLink('https://snowtrace.io')
  },
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  }
};