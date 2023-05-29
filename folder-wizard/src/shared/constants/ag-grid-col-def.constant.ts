import { ColDef, ColGroupDef } from "ag-grid-community";
import { CATEGORY, COLUMN_DEFS } from "../enum/col-defs.enum";

export const FOLDER_COL_DEFS: (ColDef | ColGroupDef)[] = [
    {
      headerName: COLUMN_DEFS.FOLDER_NAME,
      headerTooltip: COLUMN_DEFS.FOLDER_NAME,
      field: "folderName",
      tooltipField: "folderName",
      spanHeaderHeight: true,
      maxWidth: 150,
    },
    {
      headerName: COLUMN_DEFS.LEVEL,
      headerTooltip: COLUMN_DEFS.LEVEL,
      field: "folderLevel",
      tooltipField: "folderLevel",
      spanHeaderHeight: true,
      maxWidth: 70
    },
    {
      headerName: COLUMN_DEFS.DETAILS,
      children: [
        {
          headerName: COLUMN_DEFS.PARENT,
          //headerTooltip: COLUMN_DEFS.PARENT,
          field: "parent",
          tooltipField: "parent",
          maxWidth: 150
        },
        {
          headerName: COLUMN_DEFS.ROOT_Folder,
          //headerTooltip: COLUMN_DEFS.ROOT_Folder,
          field: "rootFolder",
          tooltipField: "rootFolder",
          maxWidth: 150,
        },
        {
          headerName: COLUMN_DEFS.CATEGROY,
          //headerTooltip: COLUMN_DEFS.CATEGROY,
          field: "category",
          tooltipField: "category",
          maxWidth: 90
        },
      ],
    },
    {
      headerName: COLUMN_DEFS.CREATED,
      headerTooltip: COLUMN_DEFS.CREATED,
      field: "created",
      tooltipField: "created",
      spanHeaderHeight: true,
      maxWidth: 110
    },
  ];

export const DEFAULT_COL_DEF: ColDef = {
    editable: false,
    sortable: true,    
  };