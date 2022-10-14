import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #faeeff, #c5f1e7);
`;

export const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 540px;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Img = styled.img`
    width: 540px;
    height: 608px;
    left: 96px;
    top: 166px;

    @media screen and (max-width: 768px) {
        width: 340px;
        height: 100%;
    }
`;

export const TextWrapper = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    max-width: 450px;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 24px;
    color: #6d7d8b;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const HeroBtn = styled.div`
    float: left;
`;
