import styled from "styled-components";
import Text from "./../Text/";
import useTheme from "hooks/useTheme";

const MainFooterSection = styled.div`
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    a {
      display: block;
    }
  }
`;

const Footer: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { colors, fonts } = theme;

  return (
    <>
      <MainFooterSection className={`text-center`}>
        <Text
          text={"© 2021 Atlas, All Rights Reserved."}
          color={colors.white}
          size={fonts.fontSize13}
        />
      </MainFooterSection>
    </>
  );
};

export default Footer;
