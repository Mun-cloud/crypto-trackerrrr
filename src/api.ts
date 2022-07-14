const BASE_URL = `https://api.coinpaprika.com/v1`;
const NICO_URL = `https://ohlcv-api.nomadcoders.workers.dev?coinId=`

// Coins.js 전체 코인 목록 조회
export const fetchCoins = async () => {
  try {
    return await (await fetch(`${BASE_URL}/coins`)).json();
  } catch (err) {
    console.error(err);
  }
};

// // Coin.js 코인 정보 조회
export const fetchCoinInfo = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

// // Coin.js 코인 시세 정보 조회
export const fetchCoinTickers = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};

// // 코인 가격 변동 조회
export const fetchCoinHistory = async (coinId: string) => {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return await (
    await fetch(
      `${NICO_URL}${coinId}`
    )
  ).json();
};
