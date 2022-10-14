import React from "react";
import Image2 from "../../images/image2.png";
import {
    InfoContainer,
    InfoBg,
    InfoContent,
    TextWrapper1,
    Heading,
    SubHeading,
    SubHeadingNum,
    TextWrapper2,
    ImageWrapper,
    Img,
    SubImage,
    TextSource,
} from "../InfoSection/InfoElements";

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoBg>
                    <InfoContent>
                        <TextWrapper1>
                            <Heading>Tahukah Kamu?</Heading>
                            <SubHeading>
                                Donasi di Indonesia meningkat 31% dari 2018
                                sampai 2020
                            </SubHeading>
                            <SubHeadingNum>70% - 400%</SubHeadingNum>
                        </TextWrapper1>
                        <ImageWrapper>
                            <Img src={Image2} />
                            <SubImage>
                                Donasi di Indonesia meningkat 31% dari 2018
                                sampai 2020. Tetapi media digital hanya
                                digunakan oleh 3.84% campaigners
                            </SubImage>
                        </ImageWrapper>
                        <TextWrapper2>
                            <TextSource>
                                Source: Outlook Filantropi Indonesia 2022,
                                Baznas, Donorbox
                            </TextSource>
                        </TextWrapper2>
                    </InfoContent>
                </InfoBg>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
