import { withMods } from '@epam/uui-core';
import { Rating as uuiRating, RatingProps } from '@epam/uui-components';
import * as css from './Rating.scss';
import { ReactComponent as FilledStarIcon } from '../icons/star-filled.svg';
import { ReactComponent as EmptyStarIcon } from '../icons/star-empty.svg';
import { Tooltip } from '../overlays';

export interface RatingMods {
    size?: 18 | 24 | 30;
}

function applyRatingMods(mods: RatingMods & RatingProps) {
    return [
        css.root,
        css['size-' + (mods.size || '18')],
    ];
}

export const Rating = withMods<RatingProps, RatingMods>(uuiRating, applyRatingMods, () => ({ filledStarIcon: FilledStarIcon, emptyStarIcon: EmptyStarIcon, Tooltip }));