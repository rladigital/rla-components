import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class UserInfo extends Component {
    render() {
        const UserInfoContainer = styled.div`
            width: 100%;
            height: 100px;
            position: relative;
            background: ${props => props.theme.userInfo.backgroundColor};
        `;
        const UserInfo = styled.div`
            top: 50%;
            text-align: right;
            position: absolute;
            transform: translateY(-50%);
            right: ${props => props.theme.userInfo.padding}em;
        `;
        return (
            <UserInfoContainer>
                <UserInfo>{this.props.children}</UserInfo>
            </UserInfoContainer>
        );
    }
}

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

export default UserInfo;
