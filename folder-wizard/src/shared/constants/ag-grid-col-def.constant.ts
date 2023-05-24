import { ColDef, ColGroupDef } from "ag-grid-community";
import { CATEGORY, COLUMN_DEFS } from "../enum/col-defs.enum";

export const FOLDER_COL_DEFS: (ColDef | ColGroupDef)[] = [
    {
      headerName: COLUMN_DEFS.FOLDER_NAME,
      headerTooltip: COLUMN_DEFS.FOLDER_NAME,
      field: "folderName",
      tooltipField: "folderName",
      spanHeaderHeight: true,
    },
    {
      headerName: COLUMN_DEFS.LEVEL,
      headerTooltip: COLUMN_DEFS.LEVEL,
      field: "folderLevel",
      tooltipField: "folderLevel",
      spanHeaderHeight: true
    },
    {
      headerName: COLUMN_DEFS.DETAILS,
      children: [
        {
          headerName: COLUMN_DEFS.PARENT,
          //headerTooltip: COLUMN_DEFS.PARENT,
          field: "parent",
          tooltipField: "parent",
        },
        {
          headerName: COLUMN_DEFS.ROOT_Folder,
          //headerTooltip: COLUMN_DEFS.ROOT_Folder,
          field: "rootFolder",
          tooltipField: "rootFolder",
        },
        {
          headerName: COLUMN_DEFS.CATEGROY,
          //headerTooltip: COLUMN_DEFS.CATEGROY,
          field: "category",
          tooltipField: "category",
        },
      ],
    },
    {
      headerName: COLUMN_DEFS.CREATED,
      headerTooltip: COLUMN_DEFS.CREATED,
      field: "created",
      tooltipField: "created",
      spanHeaderHeight: true
    },
  ];

  let rowData = [
    {
      folderName: "kritika",
      folderLevel: "root",
      parent: "-",
      rootFolder: "kritika",
      category: CATEGORY.FOLDER,
      created: "23-04-2023",
    },
  ];
  
export const DEFAULT_COL_DEF: ColDef = {
    editable: false,
    sortable: true,
    width: 180,
  };