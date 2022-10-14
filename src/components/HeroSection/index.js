import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    ImageWrapper,
    Img,
    TextWrapper,
    Heading,
    Subtitle,
    HeroBtn,
} from "../HeroSection/HeroElements";
import Image1 from "../../images/image1.png";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <HeroContent>
                        <ImageWrapper>
                            <Img src={Image1} />
                        </ImageWrapper>
                        <TextWrapper>
                            <Heading>Solusi #DonasiTanpaWorry</Heading>
                            <Subtitle>
                                Platform donasi pertama yang berfokus pada
                                bantuan rutin dari laman kamu dan cara kamu
                                sendiri atau keberlanjutan bantuan
                            </Subtitle>
                            <HeroBtn>
                                <Button
                                    to="contact"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    primary="true"
                                >
                                    Contact Us
                                </Button>
                            </HeroBtn>
                        </TextWrapper>
                    </HeroContent>
                </HeroBg>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
