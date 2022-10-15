import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkImage,
    Img,
    FooterText,
    MobileIcon,
    IconItem,
} from "../Footer/FooterElements";
import Logo from "../../images/logo.png";
import Payment from "../../images/payment.png";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkImage>
                                    <Img src={Logo} />
                                </FooterLinkImage>
                                <FooterText>
                                    QP office, tanjung mas raya blok B1 no.44,
                                    Jagakarsa, Jakarta Selatan 12530
                                </FooterText>
                                <MobileIcon>
                                    <IconItem>
                                        <FaYoutube />
                                    </IconItem>
                                    <IconItem>
                                        <FaTiktok />
                                    </IconItem>
                                    <IconItem>
                                        <FaInstagram />
                                    </IconItem>
                                </MobileIcon>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Seputar KawanBantu
                                </FooterLinkTitle>
                                <FooterLink to="/">Beranda</FooterLink>
                                <FooterLink to="/">Fitur</FooterLink>
                                <FooterLink to="/">Tentang Kami</FooterLink>
                                <FooterLink to="/">Contact Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Kontak Kami</FooterLinkTitle>
                                <FooterLink>+6281387626352</FooterLink>
                                <FooterLink>kawanbantu@gmail.com</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Platform Berdonasi
                                </FooterLinkTitle>
                                <Img src={Payment} />
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
