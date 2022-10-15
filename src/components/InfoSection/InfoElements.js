import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120vh;
    position: relative;
`;

export const InfoBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
`;

export const InfoContent = styled.div`
    margin-top: 70px;
`;

export const TextWrapper1 = styled.div`
    text-align: center;
    margin-left: 60px;
    margin-right: 60px;
`;

export const Heading = styled.h1`
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

export const SubHeading = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #181d29;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        text-align: left;
    }
`;

export const SubHeadingNum = styled.h2`
    font-weight: 900;
    font-size: 40px;
    color: #9b4aba;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const Img = styled.img`
    max-width: 350px;
    height: 255px;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 100%;
        margin-left: 50px;
    }
`;

export const SubImage = styled.p`
    max-width: 350px;
    margin-left: 60px;
    margin-right: 60px;
    font-size: 20px;
    line-height: 30px;
    color: #6d7d8b;
    text-align: justify;
`;

export const TextWrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const TextSource = styled.p`
    font-weight: 700;
    font-size: 16px;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-left: 60px;
        margin-right: 60px;
    }
`;
