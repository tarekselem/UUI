import React from 'react';
import * as css from './DataTableRow.scss';
import { DataTableRow as uuiDataTableRow } from '@epam/uui-components';
import { withMods, DataTableCellProps, DndActorRenderParams, DataTableRowProps } from '@epam/uui-core';
import { DataTableCell } from './DataTableCell';
import { DataTableRowMods } from './types';
import { DropMarker } from '../dnd';

// Here we define a single instance of the renderCell function to make DataTableRow#shouldComponentUpdate work.
// As we need our mods to style the cell properly, we extract them from DataTableCellProps.rowProps, which is a hack, but it's reliable enough.
export const renderCell = (props: DataTableCellProps) => {
    const mods = props.rowProps as DataTableRowMods & DataTableRowProps;
    return <DataTableCell
        size={ mods.size }
        padding={ mods.padding }
        { ...props }
    />;
};

export const renderDropMarkers = (props: DndActorRenderParams) => <DropMarker { ...props } enableBlocker={ true } />;

export const propsMods = { renderCell, renderDropMarkers };

export const DataTableRow = withMods<DataTableRowProps, DataTableRowMods>(
    uuiDataTableRow,
    mods => [
        css.root,
        css['background-' + (mods.background || 'white')],
        css['border-' + (mods.borderBottom || 'night300')],
        css['size-' + (mods.size || '30')],
    ],
    mods => propsMods,
);
