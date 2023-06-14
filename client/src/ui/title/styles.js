import styled, { css } from 'styled-components';

const headingStyles = {
  h1: css`
    font-size: 32px;
  `,
  h2: css`
    font-size: 24px;
  `,
  h3: css`
    font-size: 18px;
  `,
  h4: css`
    font-size: 16px;
  `,
};

export const TitleWrapper = styled.span`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;

  ${({ variant = 'h1' }) => headingStyles[variant]}
`;
