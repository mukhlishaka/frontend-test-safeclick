import React from "react";
import Pendidikan from "../../images/pendidikan.png";
import Nonprofit from "../../images/nonprofit.png";
import Ibadah from "../../images/tempat-ibadah.png";
import Lembaga from "../../images/lembaga-amal.png";
import Organisasi from "../../images/organisasi.png";
import Komunitas from "../../images/komunitas.png";
import Sosial from "../../images/aksi-sosial.png";
import Perusahaan from "../../images/perusahaan.png";

import {
    CardContainer,
    CardBg,
    CardContent,
    CardRow,
    CardCol,
    Img,
    CardTitle,
    CardSubTitle,
    TextWrapper1,
    TextWrapper2,
    Heading,
    ImageWrapper,
} from "../CardSection/CardElements";

const CardSection = () => {
    return (
        <>
            <CardContainer>
                <CardBg>
                    <CardContent>
                        <TextWrapper1>
                            <Heading>Ayo Kawan, Bantu Mereka!</Heading>
                        </TextWrapper1>
                        <CardRow>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Pendidikan} />
                                    <CardTitle>Pendidikan </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Bantuan untuk sekolah, kuliah, dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Nonprofit} />
                                    <CardTitle>Non-Profit </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Organisasi nirlaba, yayasan dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Ibadah} />
                                    <CardTitle>Tempat Ibadah </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Donasi untuk keberlangsungan politik,
                                        dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Lembaga} />
                                    <CardTitle>Lembaga Amal </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Zakat, wakaf, infaq, dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                        </CardRow>
                        <CardRow>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Organisasi} />
                                    <CardTitle>Organisasi</CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Program sosial, bantuan sosial, dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Komunitas} />
                                    <CardTitle>Komunitas</CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Komunitas, lembaga masyarakat, dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Sosial} />
                                    <CardTitle>Kampanye aksi sosial </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Donasi untuk keberlangsungan politik,
                                        dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Perusahaan} />
                                    <CardTitle>Perusahaan </CardTitle>
                                </ImageWrapper>
                                <TextWrapper2>
                                    <CardSubTitle>
                                        Program sosial perusahaan, CSR, dll.
                                    </CardSubTitle>
                                </TextWrapper2>
                            </CardCol>
                        </CardRow>
                    </CardContent>
                </CardBg>
            </CardContainer>
        </>
    );
};

export default CardSection;
