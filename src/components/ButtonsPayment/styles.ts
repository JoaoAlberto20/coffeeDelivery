import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-light']};
      border-color: ${theme['base-purple']};
      &:hover {
        background: ${theme['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base-button']};
  transition: 0.4s;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['base-purple']};
  }
  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
  user-select: none;
`
