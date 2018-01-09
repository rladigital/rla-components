import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../icon";

class UserInfoIcon extends Component {
    render() {
        const UserInfoIcon = styled.a`
            cursor: pointer;
            position: relative;
            display: inline-block;
            color: ${props => props.theme.userInfo.icon.color};
            font-size: ${props => props.theme.userInfo.icon.size}em;
            margin-left: ${props => props.theme.userInfo.spacingX}em;
            margin-bottom: ${props => props.theme.userInfo.spacingY}em;
        `;
        const Notification = styled.div`
            border-radius: 14px;
            position: absolute;
            font-weight: bold;
            text-align: center;
            top: ${props => props.theme.userInfo.notification.top}em;
            right: ${props => props.theme.userInfo.notification.right}em;
            min-width: ${props => props.theme.userInfo.notification.minWidth}em;
            font-size: ${props => props.theme.userInfo.notification.size}em;
            color: ${props => props.theme.userInfo.notification.color};
            background: ${props =>
                props.theme.userInfo.notification.backgroundColor};
        `;
        return (
            <UserInfoIcon onClick={() => this.props.onClick()}>
                {this.props.children}
                {this.props.notifications && (
                    <Notification>{this.props.notifications}</Notification>
                )}
            </UserInfoIcon>
        );
    }
}

UserInfoIcon.propTypes = {};

UserInfoIcon.defaultProps = {};

export default UserInfoIcon;
