import styled from "styled-components";

export const CardContainer = styled.div`
    height: 130vh;
    width: 100%;
    position: relative;
    margin-top: -50px;

    @media screen and (max-width: 768px) {
        height: 460vh;
    }

    @media screen and (max-width: 420px) {
        height: 400vh;
    }
`;

export const CardBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #faeeff, #c5f1e7);
`;

export const CardContent = styled.div`
    display: block;
`;

export const TextWrapper1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const Heading = styled.h1`
    font-size: 48px;
    color: #07335e;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

export const CardRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 150px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardCol = styled.div`
    cursor: pointer;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Img = styled.img`
    max-width: 250px;
    height: 250px;
    border-radius: 8px;
`;

export const CardTitle = styled.h2`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 28px;
    color: #fff;
    text-align: center;
    margin-top: 175px;
`;

export const TextWrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 30px;
    width: 250px;
    height: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const CardSubTitle = styled.p`
    font-size: 16px;
    text-align: center;
    align-self: baseline;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
