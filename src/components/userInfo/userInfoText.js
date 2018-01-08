import styled from "styled-components";

const UserInfoText = styled.p`
    margin-bottom: 0;
    color: ${props => props.theme.userInfo.text.color};
    font-size: ${props => props.theme.userInfo.text.size}em;
`;

UserInfoText.displayName = "UserInfoText";

export default UserInfoText;
