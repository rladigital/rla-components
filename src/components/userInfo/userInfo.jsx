import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class UserInfo extends Component {
    render() {
        const UserInfoContainer = styled.div`
            width: 100%;
            position: relative;
            height: ${props => props.theme.userInfo.height}em;
            background: ${props => props.theme.userInfo.backgroundColor};
            background: linear-gradient(
                to bottom,
                ${props => props.theme.userInfo.backgroundColorTwo},
                ${props => props.theme.userInfo.backgroundColor} 20%,
                ${props => props.theme.userInfo.backgroundColor} 80%,
                ${props => props.theme.userInfo.backgroundColorTwo}
            );
        `;
        const UserInfo = styled.div`
            top: 50%;
            text-align: right;
            position: absolute;
            transform: translateY(-50%);
            right: ${props => props.theme.userInfo.padding}em;
            text-transform: ${props => props.textTransform};
        `;
        return (
            <UserInfoContainer>
                <UserInfo textTransform={this.props.textTransform}>
                    {this.props.children}
                </UserInfo>
            </UserInfoContainer>
        );
    }
}

UserInfo.propTypes = {
    /** Text Tranform - A valid css text-transform value */
    textTransform: PropTypes.string
};

UserInfo.defaultProps = {
    textTransform: "none"
};

export default UserInfo;
