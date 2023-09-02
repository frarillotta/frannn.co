
import NextImage from 'next/image'
import styled from 'styled-components'

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;
