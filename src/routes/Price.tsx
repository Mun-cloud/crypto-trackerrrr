import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;

  span {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const PercentNumber = styled.span<{ textColor?: string }>`
  color: ${(props) => props.textColor};
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: Quotes;
}

interface Quotes {
  USD: Usd;
}

interface Usd {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: Date;
  percent_from_price_ath: number;
}

interface PriceProps {
  coinId: string;
}

const Price = ({ coinId }: PriceProps) => {
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  if (tickersLoading || tickersData === undefined) return null;
  return (
    <ul>
      <Card>
        <span>1시간</span>
        <PercentNumber
          textColor={
            tickersData?.quotes.USD.percent_change_1h > 0 ? "green" : "red"
          }
        >
          {tickersData?.quotes.USD.percent_change_1h}%
        </PercentNumber>
      </Card>
      <Card>
        <span>24시간</span>
        <PercentNumber
          textColor={
            tickersData?.quotes.USD.percent_change_24h > 0 ? "green" : "red"
          }
        >
          {tickersData?.quotes.USD.percent_change_24h}%
        </PercentNumber>
      </Card>
      <Card>
        <span>주간</span>
        <PercentNumber
          textColor={
            tickersData?.quotes.USD.percent_change_7d > 0 ? "green" : "red"
          }
        >
          {tickersData?.quotes.USD.percent_change_7d}%
        </PercentNumber>
      </Card>
      <Card>
        <span>월간</span>
        <PercentNumber
          textColor={
            tickersData?.quotes.USD.percent_change_30d > 0 ? "green" : "red"
          }
        >
          {tickersData?.quotes.USD.percent_change_30d}%
        </PercentNumber>
      </Card>
      <Card>
        <span>연간</span>
        <PercentNumber
          textColor={
            tickersData?.quotes.USD.percent_change_1y > 0 ? "green" : "red"
          }
        >
          {tickersData?.quotes.USD.percent_change_1y}%
        </PercentNumber>
      </Card>
    </ul>
  );
};

export default Price;
