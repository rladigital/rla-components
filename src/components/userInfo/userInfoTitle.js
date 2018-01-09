import styled from "styled-components";

const UserInfoTitle = styled.p`
    font-weight: bold;
    color: ${props => props.theme.userInfo.title.color};
    font-size: ${props => props.theme.userInfo.title.size}em;
    margin-bottom: ${props => props.theme.userInfo.spacingY}em;
`;

UserInfoTitle.displayName = "UserInfoTitle";

export default UserInfoTitle;
