import { useCallback } from "react";
import styled from "styled-components";

const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #e8bdbc;
  width: 1440px;
  height: 185px;
`;
const Child = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--color-antiquewhite);
  box-sizing: border-box;
  width: 128px;
  height: 24px;
`;
const Write = styled.div`
  position: absolute;
  top: 1px;
  left: 40px;
  letter-spacing: 0.05em;
`;
const Div2 = styled.div`
  position: absolute;
  top: 34px;
  left: 1177px;
  width: 128px;
  height: 24px;
  font-size: var(--buttons-chips-text-size);
  color: var(--color-antiquewhite);
`;
const InstagramIcon = styled.img`
  position: absolute;
  top: 88px;
  left: 1154px;
  width: 36px;
  height: 36px;
  overflow: hidden;
`;
const TwitterIcon = styled.img`
  position: absolute;
  top: 88px;
  left: 1223px;
  width: 36px;
  height: 36px;
  overflow: hidden;
`;
const FacebookIcon = styled.img`
  position: absolute;
  top: 88px;
  left: 1292px;
  width: 36px;
  height: 36px;
  overflow: hidden;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 151px;
  left: 1196px;
  font-weight: 200;
`;
const News = styled.div`
  position: absolute;
  top: 44px;
  left: 371px;
  font-weight: 200;
`;
const AboutUs = styled.div`
  position: absolute;
  top: 69px;
  left: 369px;
  font-weight: 200;
`;
const Blog = styled.div`
  position: absolute;
  top: 94px;
  left: 369px;
  font-weight: 200;
`;
const CakeBox = styled.div`
  position: absolute;
  top: 151px;
  left: 75px;
  font-weight: 200;
`;
const Div = styled.div`
  position: absolute;
  top: 3491px;
  left: 0px;
  width: 1440px;
  height: 185px;
  font-size: var(--text-14-size);
`;
const Div3 = styled.div`
  position: absolute;
  top: 2559px;
  left: 687px;
  width: 1015px;
  height: 519px;
`;
const Div4 = styled.div`
  position: absolute;
  top: 2559px;
  left: -163px;
  width: 1015px;
  height: 519px;
`;
const Icon = styled.img`
  position: absolute;
  top: 1046px;
  left: 265px;
  width: 1015px;
  height: 519px;
  object-fit: cover;
`;
const Image2Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 820px;
  object-fit: cover;
`;
const HomePageChild = styled.div`
  position: absolute;
  top: 1343px;
  left: 139px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--grayscale-dark);
  box-sizing: border-box;
  width: 256px;
  height: 48px;
`;
const HomePageItem = styled.div`
  position: absolute;
  top: 1343px;
  left: 433px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--brand-colours-main);
  box-sizing: border-box;
  width: 256px;
  height: 48px;
`;
const HomePageInner = styled.div`
  position: absolute;
  top: 1343px;
  left: 739px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--brand-colours-main);
  box-sizing: border-box;
  width: 256px;
  height: 48px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 1343px;
  left: 1045px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--brand-colours-main);
  box-sizing: border-box;
  width: 256px;
  height: 48px;
`;
const CroissantIcon = styled.img`
  position: relative;
  width: 49.9px;
  height: 49.9px;
  overflow: hidden;
  flex-shrink: 0;
`;
const CroissantWrapper = styled.div`
  position: absolute;
  top: 906px;
  left: 385px;
  border-radius: 9.36px;
  border: 1.6px solid var(--brand-colours-main);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 18.715595245361328px;
`;
const OurProducts = styled.b`
  position: absolute;
  top: 1202px;
  left: 542px;
  font-size: var(--header-h2-size);
  letter-spacing: 0.1em;
`;
const Cakes = styled.div`
  position: absolute;
  top: 1356px;
  left: 237px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--grayscale-dark);
`;
const CupCakes = styled.div`
  position: absolute;
  top: 1356px;
  left: 509px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--brand-colours-main);
`;
const Cookies = styled.div`
  position: absolute;
  top: 1356px;
  left: 827px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--brand-colours-main);
`;
const Others = styled.div`
  position: absolute;
  top: 1356px;
  left: 1139px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--brand-colours-main);
`;
const HomePageChild1 = styled.div`
  position: absolute;
  top: 1545px;
  left: 1346px;
  border-radius: var(--br-4xs);
  background: linear-gradient(180deg, #fff 99.99%, #f2bc79);
  box-shadow: 6px 6px 6px rgba(208, 204, 204, 0.7);
  width: 199px;
  height: 192px;
`;
const HomePageChild2 = styled.div`
  position: absolute;
  top: 1545px;
  left: 1055px;
  border-radius: var(--br-4xs);
  background: linear-gradient(180deg, #fff 99.99%, #f2bc79);
  box-shadow: 6px 6px 6px rgba(208, 204, 204, 0.7);
  width: 199px;
  height: 192px;
`;
const HomePageChild3 = styled.div`
  position: absolute;
  top: 1541px;
  left: 764px;
  border-radius: var(--br-4xs);
  background: linear-gradient(180deg, #fff 99.99%, #f2bc79);
  box-shadow: 6px 6px 6px rgba(208, 204, 204, 0.7);
  width: 199px;
  height: 300px;
`;
const HomePageChild4 = styled.div`
  position: absolute;
  top: 1545px;
  left: 484px;
  border-radius: var(--br-4xs);
  background: linear-gradient(180deg, #fff 99.99%, #f2bc79);
  box-shadow: 6px 6px 6px rgba(208, 204, 204, 0.7);
  width: 199px;
  height: 192px;
`;
const HomePageChild5 = styled.div`
  position: absolute;
  top: 1546px;
  left: 191px;
  border-radius: var(--br-4xs);
  background: linear-gradient(180deg, #fff 99.99%, #f2bc79);
  box-shadow: 6px 6px 6px rgba(208, 204, 204, 0.7);
  width: 199px;
  height: 192px;
`;
const HomePageChild6 = styled.div`
  position: absolute;
  top: 1765px;
  left: 784px;
  border-radius: var(--br-8xs);
  background-color: var(--brand-colours-main);
  border: 1px solid var(--brand-colours-main);
  box-sizing: border-box;
  width: 160px;
  height: 30px;
`;
const CupcakeMuffin = styled.div`
  position: absolute;
  top: 1758px;
  left: 216px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 149px;
`;
const BirthdayCake = styled.div`
  position: absolute;
  top: 1758px;
  left: 516px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--brand-colours-main);
  text-align: left;
  display: inline-block;
  width: 135px;
`;
const Cookies1 = styled.div`
  position: absolute;
  top: 1758px;
  left: 1118px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 89px;
`;
const ChocolateCupCake = styled.div`
  position: absolute;
  top: 1758px;
  left: 1356px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 188px;
`;
const Sr = styled.div`
  position: absolute;
  top: 1791px;
  left: 233px;
  letter-spacing: 0.08em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 115px;
`;
const Sr1 = styled.div`
  position: absolute;
  top: 1791px;
  left: 523px;
  letter-spacing: 0.08em;
  color: var(--brand-colours-main);
  text-align: left;
  display: inline-block;
  width: 121px;
`;
const Sr2 = styled.div`
  position: absolute;
  top: 1797px;
  left: 1102px;
  letter-spacing: 0.08em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 105px;
`;
const Sr3 = styled.div`
  position: absolute;
  top: 1797px;
  left: 1389px;
  letter-spacing: 0.08em;
  color: var(--grayscale-medium);
  text-align: left;
  display: inline-block;
  width: 121px;
`;
const AboutUs1 = styled.b`
  position: absolute;
  top: 1898px;
  left: 597px;
  font-size: var(--header-h2-size);
  letter-spacing: 0.1em;
`;
const Image1Icon = styled.img`
  position: absolute;
  top: 2023px;
  left: 38px;
  border-radius: var(--br-8xs);
  width: 716px;
  height: 436px;
  object-fit: cover;
`;
const Icon1 = styled.img`
  position: absolute;
  top: 2671px;
  left: 212px;
  width: 228px;
  height: 37px;
`;
const Icon2 = styled.img`
  position: absolute;
  top: 2671px;
  left: 632px;
  width: 228px;
  height: 37px;
`;
const Icon3 = styled.img`
  position: absolute;
  top: 2671px;
  left: 1063px;
  width: 228px;
  height: 37px;
`;
const VeryTastyCakes = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 345px;
  height: 211.5px;
`;
const Ali = styled.div`
  position: absolute;
  top: 160px;
  left: 190px;
  letter-spacing: 0.1em;
  font-weight: 600;
  display: inline-block;
  width: 130px;
  height: 37px;
`;
const Div5 = styled.div`
  position: absolute;
  top: 2780px;
  left: 154px;
  width: 345px;
  height: 211.5px;
`;
const FastDeliveryAnd = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 371px;
  height: 135.6px;
`;
const Salma = styled.div`
  position: absolute;
  top: 190px;
  left: 242px;
  letter-spacing: 0.1em;
  font-weight: 600;
  display: inline-block;
  width: 84px;
  height: 37px;
`;
const Div6 = styled.div`
  position: absolute;
  top: 2751px;
  left: 560px;
  width: 371px;
  height: 227px;
`;
const Mona = styled.div`
  position: absolute;
  top: 207px;
  left: 236px;
  letter-spacing: 0.1em;
  font-weight: 600;
  display: inline-block;
  width: 116px;
  height: 37px;
`;
const Div7 = styled.div`
  position: absolute;
  top: 2734px;
  left: 991px;
  width: 371px;
  height: 244px;
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-khaki);
  width: 256px;
  height: 48px;
`;
const ExploreNow = styled.div`
  position: absolute;
  top: 12px;
  left: 62px;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Div8 = styled.div`
  position: absolute;
  top: 560px;
  left: 586px;
  width: 256px;
  height: 48px;
  font-size: 20px;
  color: var(--color-white);
`;
const CakesCraftedWith = styled.div`
  position: absolute;
  top: 286px;
  left: 533px;
  font-size: 52px;
  letter-spacing: 0.08em;
  font-weight: 800;
  color: var(--color-white);
  display: inline-block;
  width: 347px;
  text-shadow: 9px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Products = styled.div`
  position: absolute;
  top: 73px;
  left: 719px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--color-white);
  text-align: left;
  cursor: pointer;
`;
const AboutUs3 = styled.p`
  margin: 0;
`;
const AboutUs2 = styled.div`
  position: absolute;
  top: 70px;
  left: 996px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--color-white);
  text-align: left;
`;
const ContactUs = styled.div`
  position: absolute;
  top: 70px;
  left: 1159px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--color-white);
  text-align: left;
`;
const Order = styled.div`
  position: absolute;
  top: 73px;
  left: 879px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--color-white);
  text-align: left;
`;
const Home = styled.div`
  position: absolute;
  top: 70px;
  left: 605px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--color-khaki);
  text-align: left;
`;
const ArrowIcon = styled.img`
  position: absolute;
  top: 1629.2px;
  left: 1421.9px;
  width: 12.5px;
  height: 22.1px;
`;
const TheFreshestIngredients = styled.div`
  position: absolute;
  top: 1021px;
  left: 352px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 164px;
  height: 64px;
`;
const FastDelivery = styled.div`
  position: absolute;
  top: 1041px;
  left: 624px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 164px;
  height: 64px;
`;
const HandmadeBakedGoods = styled.div`
  position: absolute;
  top: 1041px;
  left: 970px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 164px;
  height: 64px;
`;
const Icon4 = styled.img`
  position: absolute;
  top: 906px;
  left: 659.7px;
  width: 87.3px;
  height: 87.3px;
`;
const GloveWrapper = styled.div`
  position: absolute;
  top: 906px;
  left: 1007px;
  border-radius: 9.36px;
  border: 1.6px solid #e67240;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 18.715595245361328px;
`;
const M9pzwmxm2rkIcon = styled.img`
  position: absolute;
  top: 3164px;
  left: 66px;
  border-radius: var(--br-9xs);
  width: 294px;
  height: 253px;
  object-fit: cover;
`;
const M9pzwmxm2rkIcon1 = styled.img`
  position: absolute;
  top: 3164px;
  left: 404px;
  border-radius: var(--br-9xs);
  width: 294px;
  height: 253px;
  object-fit: cover;
`;
const M9pzwmxm2rk = styled.div`
  position: absolute;
  top: 3164px;
  left: 404px;
  border-radius: var(--br-9xs);
  background-color: rgba(0, 0, 0, 0.75);
  width: 294px;
  height: 253px;
`;
const M9pzwmxm2rkIcon2 = styled.img`
  position: absolute;
  top: 3164px;
  left: 742px;
  border-radius: var(--br-9xs);
  width: 294px;
  height: 253px;
  object-fit: cover;
`;
const M9pzwmxm2rkIcon3 = styled.img`
  position: absolute;
  top: 3164px;
  left: 1080px;
  border-radius: var(--br-9xs);
  width: 294px;
  height: 253px;
  object-fit: cover;
`;
const OurInstagram = styled.b`
  position: absolute;
  top: 3032px;
  left: 250px;
  font-size: var(--header-h2-size);
  letter-spacing: 0.1em;
`;
const InstagramCaption = styled.div`
  position: absolute;
  top: 3280px;
  left: 467px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--color-white);
  text-align: right;
`;
const Div9 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 105.7px;
  height: 181px;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const Div10 = styled.div`
  position: absolute;
  top: 0px;
  left: -76.3px;
  letter-spacing: 0.08em;
  display: inline-block;
  width: 105.7px;
  height: 181px;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 2886px;
  left: 260px;
  width: 182px;
  height: 181px;
  transform: rotate(180deg);
  transform-origin: 0 0;
  font-size: var(--font-size-269xl);
  color: var(--color-lightgray);
  font-family: var(--font-jacques-francois-shadow);
`;
const Buy = styled.div`
  position: absolute;
  top: 1769px;
  left: 847px;
  font-size: var(--buttons-chips-text-size);
  letter-spacing: 0.05em;
  color: var(--color-white);
`;
const CakeBoxHas = styled.div`
  position: absolute;
  top: 2149px;
  left: 814px;
  letter-spacing: 0.08em;
  text-align: right;
  display: inline-block;
  width: 569px;
  height: 120px;
`;
const Pngwing1Icon = styled.img`
  position: absolute;
  top: 1574px;
  left: 220px;
  width: 141px;
  height: 136px;
  object-fit: cover;
`;
const Pngwing2Icon = styled.img`
  position: absolute;
  top: 1575px;
  left: 484px;
  width: 199px;
  height: 146px;
  object-fit: cover;
`;
const Pngwing3Icon = styled.img`
  position: absolute;
  top: 1577px;
  left: 777px;
  width: 179px;
  height: 123px;
  object-fit: cover;
`;
const Pngwing4Icon = styled.img`
  position: absolute;
  top: 1591px;
  left: 1065px;
  width: 180px;
  height: 98px;
  object-fit: cover;
`;
const Pngwing5Icon = styled.img`
  position: absolute;
  top: 1565px;
  left: 1379px;
  width: 108px;
  height: 156px;
  object-fit: cover;
`;
const CakeBox11 = styled.img`
  position: absolute;
  top: 30px;
  left: 42px;
  width: 232px;
  height: 114px;
  object-fit: cover;
`;
const CakeBox12 = styled.img`
  position: absolute;
  top: 3537px;
  left: 36px;
  width: 126px;
  height: 62px;
  object-fit: cover;
`;
const HomePageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 3676px;
  overflow: hidden;
  text-align: center;
  font-size: var(--text-regular-size);
  color: var(--color-black);
  font-family: var(--text-regular);
`;

const HomePage = () => {
  const onProductsTextClick = useCallback(() => {
    // Please sync "products" to the project
  }, []);

  return (
    <HomePageRoot>
      <Div>
        <Div1 />
        <Div2>
          <Child />
          <Write>Write</Write>
        </Div2>
        <InstagramIcon alt="" src="/instagram.svg" />
        <TwitterIcon alt="" src="/twitter.svg" />
        <FacebookIcon alt="" src="/facebook.svg" />
        <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        <News>News</News>
        <AboutUs>About Us</AboutUs>
        <Blog>Blog</Blog>
        <CakeBox>© 2023Cake Box</CakeBox>
      </Div>
      <Div3 />
      <Div4 />
      <Icon alt="" src="/@2x.png" />
      <Image2Icon alt="" src="/image-2@2x.png" />
      <HomePageChild />
      <HomePageItem />
      <HomePageInner />
      <RectangleDiv />
      <CroissantWrapper>
        <CroissantIcon alt="" src="/croissant.svg" />
      </CroissantWrapper>
      <OurProducts>Our Products</OurProducts>
      <Cakes>Cakes</Cakes>
      <CupCakes>Cup Cakes</CupCakes>
      <Cookies>Cookies</Cookies>
      <Others>Others</Others>
      <HomePageChild1 />
      <HomePageChild2 />
      <HomePageChild3 />
      <HomePageChild4 />
      <HomePageChild5 />
      <HomePageChild6 />
      <CupcakeMuffin>Cupcake Muffin</CupcakeMuffin>
      <BirthdayCake>Birthday cake</BirthdayCake>
      <Cookies1>Cookies</Cookies1>
      <ChocolateCupCake>Chocolate Cup cake</ChocolateCupCake>
      <Sr>12.50 SR</Sr>
      <Sr1>60.00 SR</Sr1>
      <Sr2>8.00 SR</Sr2>
      <Sr3>14.00 SR</Sr3>
      <AboutUs1>About Us</AboutUs1>
      <Image1Icon alt="" src="/image-1@2x.png" />
      <Icon1 alt="" src="/1.svg" />
      <Icon2 alt="" src="/1.svg" />
      <Icon3 alt="" src="/1.svg" />
      <Div5>
        <VeryTastyCakes>
          Very tasty cakes and prices are pleasant to the eye.
        </VeryTastyCakes>
        <Ali>Ali</Ali>
      </Div5>
      <Div6>
        <FastDeliveryAnd>
          Fast delivery and friendly staff. All liked it. We'll come again.
        </FastDeliveryAnd>
        <Salma>Salma</Salma>
      </Div6>
      <Div7>
        <FastDeliveryAnd>
          Fresh and delicious pastries. They bake in front of you. I will
          definitely come back here to try the whole range.
        </FastDeliveryAnd>
        <Mona>Mona</Mona>
      </Div7>
      <Image2Icon alt="" src="../images/HomePage.png" />
      <Div8>
        <Item />
        <ExploreNow>Explore Now</ExploreNow>
      </Div8>
      <CakesCraftedWith>Cakes Crafted with Love</CakesCraftedWith>
      <Products onClick={onProductsTextClick}>Products</Products>
      <AboutUs2>
        <AboutUs3>About Us</AboutUs3>
      </AboutUs2>
      <ContactUs>Contact Us</ContactUs>
      <Order>{`Order `}</Order>
      <Home>Home</Home>
      <ArrowIcon alt="" src="/arrow-3.svg" />
      <TheFreshestIngredients>The freshest ingredients</TheFreshestIngredients>
      <FastDelivery>Fast delivery</FastDelivery>
      <HandmadeBakedGoods>Handmade baked goods</HandmadeBakedGoods>
      <Icon4 alt="" src="/2.svg" />
      <GloveWrapper>
        <CroissantIcon alt="" src="/glove.svg" />
      </GloveWrapper>
      <M9pzwmxm2rkIcon alt="" src="/m9pzwmxm2rk@2x.png" />
      <M9pzwmxm2rkIcon1 alt="" src="/m9pzwmxm2rk1@2x.png" />
      <M9pzwmxm2rk />
      <M9pzwmxm2rkIcon2 alt="" src="/m9pzwmxm2rk2@2x.png" />
      <M9pzwmxm2rkIcon3 alt="" src="/m9pzwmxm2rk3@2x.png" />
      <OurInstagram>Our Instagram - let's be friends!</OurInstagram>
      <InstagramCaption>Instagram caption</InstagramCaption>
      <Parent1>
        <Div9>,</Div9>
        <Div10>,</Div10>
      </Parent1>
      <Buy>Buy</Buy>
      <CakeBoxHas>
        Cake Box has been a beloved fixture in our city for over a decade,
        making it an integral part of our community's culinary landscape. Our
        journey has been one filled with passion and dedication, as we've
        lovingly prepared your favorite pastries while continually surprising
        you with exciting new creations.
      </CakeBoxHas>
      <Pngwing1Icon alt="" src="/pngwing-1@2x.png" />
      <Pngwing2Icon alt="" src="/pngwing-2@2x.png" />
      <Pngwing3Icon alt="" src="/pngwing-3@2x.png" />
      <Pngwing4Icon alt="" src="/pngwing-4@2x.png" />
      <Pngwing5Icon alt="" src="/pngwing-5@2x.png" />
      <CakeBox11 alt="" src="/cake-box-1-1@2x.png" />
      <CakeBox12 alt="" src="/cake-box-1-2@2x.png" />
    </HomePageRoot>
  );
};

export default HomePage;
