import { css } from '@linaria/core'

export const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #2042e3;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  height: 45px;
  transition: 0.5s;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #333;
  }
`
