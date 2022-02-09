import styled from "styled-components";

import {
  Footer as ASCFooter,
  FooterTop,
  Link,
  Row,
  Column,
  FooterSection,
  FooterBottom,
  themeSpacing,
} from "@amsterdam/asc-ui";

const StyledRow = styled(Row)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledFooter = styled(ASCFooter)`
  margin-top: ${themeSpacing(18)};
`;

const Footer = () => {
  return (
    <StyledRow data-testid="footer">
      <Column span={12}>
        <StyledFooter>
          <FooterTop>
            <Row>
              <Column span={6}>
                <FooterSection title="Contact">
                  <p>Hebt u een vraag en kunt u het antwoord niet vinden op onze website?</p>
                  <ul>
                    <li>Bel dan het gemeentelijk informatienummer 14 020, op werkdagen van 08.00 tot 18.00 uur.</li>
                  </ul>
                </FooterSection>
              </Column>
              <Column span={6}>
                <FooterSection title="Amsterdam.nl">
                  <p>
                    Amsterdam.nl is de plek online waar u alle nieuws en publieksinformatie van de gemeente en
                    stadsdelen vindt.
                  </p>

                  <Link darkBackground href="https://www.amsterdam.nl/" variant="inline" inList>
                    Naar Amsterdam.nl
                  </Link>
                </FooterSection>
              </Column>
            </Row>
          </FooterTop>
          <FooterBottom>
            <Link href="/" inList>
              Privacy and cookies
            </Link>
            <Link href="/" inList>
              About this site
            </Link>
          </FooterBottom>
        </StyledFooter>
      </Column>
    </StyledRow>
  );
};

export default Footer;
