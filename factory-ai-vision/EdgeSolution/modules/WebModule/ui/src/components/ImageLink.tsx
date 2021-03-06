import React, { FC, memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Image } from '@fluentui/react-northstar';

type BgImgStyle = {
  backgroundSize?: '60%';
  backgroundPosition?: 'center';
  backgroundRepeat?: 'no-repeat';
};
interface ImageLinkProps {
  to?: string;
  imgSrc?: string;
  defaultSrc?: string;
  bgImgSrc?: string;
  label?: string;
  imgPadding?: string;
  width: string;
  height?: string;
  bgImgStyle?: BgImgStyle;
  pointerCursor?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
const ImageLink: FC<ImageLinkProps> = ({
  to = '',
  imgSrc,
  defaultSrc,
  bgImgSrc,
  label = '',
  imgPadding = '0.625em',
  width = '6.25em',
  height = '6.25em',
  bgImgStyle,
  pointerCursor = false,
  onClick,
}) => {
  return (
    <Flex column styles={{ width }}>
      {to === '' ? (
        <div style={{ height }} onClick={onClick}>
          <Image
            src={imgSrc ?? defaultSrc}
            styles={{
              padding: imgPadding,
              height: '100%',
              objectFit: 'contain',
              backgroundImage: `url(${bgImgSrc})`,
              cursor: pointerCursor ? 'pointer' : 'default',
              ...bgImgStyle,
            }}
          />
        </div>
      ) : (
        <Link to={to}>
          <div style={{ height }} onClick={onClick}>
            <Image
              src={imgSrc ?? defaultSrc}
              styles={{
                padding: imgPadding,
                height: '100%',
                objectFit: 'contain',
                backgroundImage: `url(${bgImgSrc})`,
                ...bgImgStyle,
              }}
            />
          </div>
        </Link>
      )}
      <Text styles={{ overflowWrap: 'break-word' }} align="center">
        {label}
      </Text>
    </Flex>
  );
};

export default memo(ImageLink);
