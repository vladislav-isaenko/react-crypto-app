import { Typography, Flex, } from 'antd';

export function CoinInfo({ coin, withSymbol }) {
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: '10px' }} />
      <Typography.Title level={2} style={{ margin: 0 }}>
        {withSymbol && <span>({coin.symbol})</span>} {coin.name}
      </Typography.Title>
    </Flex>
  )
}
