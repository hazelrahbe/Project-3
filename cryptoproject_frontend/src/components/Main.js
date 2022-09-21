import Carousel from 'react-bootstrap/Carousel';

  function Main() {
    return (
      <div className='carousel'>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src="https://i.imgur.com/6PCuCpJ.png" height="500" margin="auto" alt="First slide" class="first"/>
          <Carousel.Caption>
            <h3>Crypto Wallet</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/JhYd0WJ.jpeg" margin="auto" alt="Second slide"/>
          <Carousel.Caption>
            <h3>Latest Market</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/ONDJKHh.jpeg" height="500" width="1250" alt="Third slide" class="third"/>
          <Carousel.Caption>
            <h3>Popular CryptoCoins</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default Main;