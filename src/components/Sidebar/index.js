import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Beranda
                    </SidebarLink>
                    <SidebarLink to="project" onClick={toggle}>
                        Fitur
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
