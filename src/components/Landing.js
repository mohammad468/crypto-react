import React, { useState, useEffect } from "react";
import { FormControl, Container, Col, Image } from "react-bootstrap";

// *spinner
import Loader from "./Loader";

// *style
import "./Landing.scss";

// *API
import { getCoin } from "../services/api";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <Container fluid className="mt-5 landing-container">
        <Col xxl="6" xl="7" lg="8" md="10" sm="12" xs="12">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={searchHandler}
          />
        </Col>
        <Col className="mt-5" xxl="6" xl="7" lg="8" md="10" sm="12" xs="12">
          {coins.length ? (
            searchCoins.map((coin) => (
              <Col
                key={coin.id}
                className="border-1 border d-flex justify-content-between align-items-center rounded my-3 p-2"
              >
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    className="coin-image mx-2"
                    fluid
                  />
                </Col>
                <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
                  <span className="coin-name mx-2">{coin.name}</span>
                </Col>
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                  <span className="coin-symbol mx-2 text-uppercase">
                    {coin.symbol}
                  </span>
                </Col>
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                  <span className="coin-current-price mx-2">
                    $ {coin.current_price.toLocaleString()}
                  </span>
                </Col>
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                  <span
                    className={
                      coin.price_change_24h > 0
                        ? "coin-price-change-green mx-2"
                        : "coin-price-change-red mx-2"
                    }
                  >
                    {`${coin.price_change_24h.toFixed(2)}`}
                  </span>
                </Col>
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                  <span className="coin-market-cap mx-2">
                    $ {coin.market_cap.toLocaleString()}
                  </span>
                </Col>
              </Col>
            ))
          ) : (
            <Loader />
          )}
        </Col>
      </Container>
    </React.Fragment>
  );
};

export default Landing;

{
  /* <Col
  key={coin.id}
  className="border-1 border d-flex justify-content-around align-items-center rounded my-3 p-1"
>
  <Image src={coin.image} alt={coin.name} className="coin-image mx-2" fluid />
  <span className="coin-name mx-2">{coin.name}</span>
  <span className="coin-symbol mx-2 text-uppercase">{coin.symbol}</span>
</Col>; */
}

// name={coin.name}
//                 image={coin.image}
//                 symbol={coin.symbol}
//                 price={coin.current_price}
//                 marketCap={coin.market_cap}
//                 priceChange={coin.market_cap_change_24h}
