import * as React from 'react';
import cx from 'classnames';
import { IHasCX, IHasRawProps } from '@epam/uui-core';
import { Avatar } from './Avatar';
import { FlexRow } from '../';
import * as css from './AvatarStack.scss';

export interface AvatarStackProps extends IHasCX, IHasRawProps<React.HTMLAttributes<HTMLDivElement>> {
    avatarSize: '24' | '36' | '48' | '144';
    urlArray: string[];
    direction: 'right' | 'left';
    avatarsCount?: number;
    renderItem?: (url: string) => React.ReactElement;
}

export const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps>((props, ref) => {
    const { avatarSize, urlArray, direction, avatarsCount, renderItem } = props;

    const firstElements = avatarsCount && (urlArray.length > avatarsCount) ? urlArray.slice(0, avatarsCount) : urlArray;

    return (
        <FlexRow cx={ props.cx } ref={ ref } rawProps={ props.rawProps }>
            <FlexRow
                rawProps={ { role:'group', style: { ['--overlap']: `-${ +avatarSize / 4 }px` } } }
                cx={ cx('avatars', css.container, css['avatar-' + direction]) }
            >
                { firstElements.map((avatar, index) => {
                    return renderItem ?
                        <React.Fragment key={ index }>{ renderItem(avatar) }</React.Fragment> :
                        <Avatar key={ index } size={ avatarSize } img={ avatar } alt='avatar' />;
                }) }
            </FlexRow>
            <div className='avatarsCount'>{ avatarsCount && urlArray.length > avatarsCount ? '+' + (urlArray.length - avatarsCount) : null }</div>
        </FlexRow>
    );
});
