import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import Logo from "../assets/Svgs/star_white_48dp.svg";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";
    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;
const FooterComponent = styled(motion.footer)`
  width: 80vw;
  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;
const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Ueiif Ali" />
        <h3 data-scroll data-scroll-speed="-1">
          Uceiif Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About</li>
          <li onClick={() => handleScroll("#shop")}>Shop</li>
          <li onClick={() => handleScroll("#new-arrival")}>New Arrival</li>
          <li>
            <a
              href="https://my-portfolio-uceiifali.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Look Book
            </a>
          </li>
          <li>
            <a
              href="https://my-portfolio-uceiifali.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Reveiws
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Right Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <a
              href="https://my-portfolio-uceiifali.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Uceiif Ali
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
