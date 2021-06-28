var mainColor = "#5629b6"
var secondColor = "#f6f6f6"

exports.customTable = function () {
  return {
      overrides: {
        MUIDataTable: {
          paper: {
            position: 'relative',
            width: '100% !important',
            boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
            border: "1px rgba(0,0,0,0.2) solid",
            borderRadius: "5px",
            overflow: "hidden",
            // maxWidth: 'calc(100vw - 340px) !important',
          },
          responsiveScroll: {
            position: 'relative',
            width: '100% !important',
            height: 'calc(100vh - 190px)',
            maxHeight: 'calc(100vh - 190px)'
          }
        },
        MuiToolbar: {
          root: {
            position: 'relative',
          },
          left: {
            flex: "0 0 auto !important"
          },
          actions: {
            flex: "0 0 auto !important"
          }
        },
        MUIDataTableToolbar: {
          root: {
            position: 'relative',
            backgroundColor: '#fff',
          },
          titleText: {
            color: "#555 !important"
          },
          icon: {
            color: "#555 !important"
          },
          iconActive: {
            color: "#555 !important"
          },
          left: {
            flex: "0 0 auto !important"
          },
          actions: {
            flex: "1 0 auto !important"
          }
        },
        MUIDataTableSearch: {
          main: {
            position: 'relative',
            marginTop: "0 !important",
            marginRight: "15px !important",
            width: "100% !important",
            backgroundColor: "mainColor",
            zIndex: "10",
            textAlign: "right",
            display: "block",
          },
          searchIcon: {
            width: "50px !important",
            color: "#555 !important",
            display: "inline-block",
            textAlign: "center",
            verticalAlign: "top",
          },
          searchText: {
            width: "calc(100% - 50px) !important",
            marginTop: "0 !important",
            marginRight: "0",
            color: "#555 !important",
            display: "inline-block",
            verticalAlign: "top",
          },
          clearIcon: {
            width: "50px !important",
            color: "#555 !important",
            display: "inline-block",
            verticalAlign: "top",
          },
        },
        MUIDataTableHead: {
          main: {
            position: 'relative',
            backgroundColor: '#fff',
            color: "#555"
          }
        },
        MUIDataTableHeadRow: {
          root: {
            position: 'relative',
            backgroundColor: '#fff',
          }
        },
        MUIDataTableHeadCell: {
          root: {
            fontSize: "10pt",
            fontWeight: "500",
            color: "#555",
          },
          fixedHeader: {
            position: "relative",
            borderBottom: "1px rgba(0,0,0,0.1) solid",
            backgroundColor: '#fff',
            color: "#555",
            padding: "10px",
            height: "auto"
          },
          toolButton: {
            display: "flex",
            height: "auto",
          },
          data: {
            display: "inline-block",
            verticalAlign: "top",
          },
          sortActive: {
            color: "#555"
          },
          sortAction: {
            color: "#555",
            display: "inline-block",
            verticalAlign: "top",
            MuiButtonBase: {
              color: "#555",
              root: {
                color: "#555",
              }
            }
          }
        },
        MUIDataTableBodyCell: {
          root: {
            position: 'relative',
            fontSize: "11pt",
            padding: "10px"
          }
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: secondColor,
            checkboxRoot: {
              color: "#fff",
            }
          },
          checkboxRoot: {
            color: "#555"
          }
        },
        MuiInput: {
          root: {
            top: "5px",
            color: "#555 !important",
          },
          underline: {
            borderBottom: "1px #fff solid !important",
          }
        },
        MuiSelect: {
          root: {
            top: "0",
            color: "#555 !important",
          },
        }
        // MuiIconButton: {
        //   root: {
        //     color: "#fff !important",
        //   }
        // }
      }
    }
}

exports.customTable2 = function () {
  return {
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: secondColor,
          },
          paper: {
            boxShadow: "0 0 30px 0 rgba(154,161,171,.15)",
            border: "1px rgba(0,0,0,0.1) solid",
            borderRadius: "5px",
            overflow: "hidden",
          },
        },
        MuiToolbar: {
          root: {
            left: {
              flex: "0 0 auto !important"
            },
            actions: {
              flex: "0 0 auto !important"
            }
          }
        },
        MUIDataTableToolbar: {
          root: {
            backgroundColor: secondColor,
          },
          titleText: {
            color: "#555"
          },
          icon: {
            color: "#555"
          },
        },
        MUIDataTableSearch: {
          searchIcon: {
            color: "#555"
          },
          searchText: {
            color: "#555",
          },
          clearIcon: {
            color: "#555"
          },
        },
        MUIDataTableHead: {
          main: {
            backgroundColor: mainColor,
            color: "#555"
          }
        },
        MUIDataTableHeadRow: {
          root: {
            backgroundColor: mainColor,
          }
        },
        MUIDataTableHeadCell: {
          root: {
            fontSize: "10pt",
            fontWeight: "500",
            color: mainColor,
          },
          fixedHeader: {
            position: "relative",
            backgroundColor: secondColor,
            color: "#555",
            padding: "10px",
            height: "auto"
          },
          toolButton: {
            display: "flex",
            height: "auto"
          },
          data: {
            display: "inline-block",
            verticalAlign: "top",
          },
          sortActive: {
            color: "#555"
          },
          sortAction: {
            color: "#555",
            display: "inline-block",
            verticalAlign: "top",
            MuiButtonBase: {
              color: "#555",
              root: {
                color: "#555",
              }
            }
          }
        },
        MUIDataTableBodyCell: {
          root: {
            fontSize: "11pt",
            padding: "10px"
          }
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: secondColor,
            checkboxRoot: {
              color: "#fff",
            }
          },
          checkboxRoot: {
            color: "#555"
          }
        },
      }
    }
}

exports.customOptions = function () {
  return {
    selectableRows: false,
    filterType: 'multiselect',
    responsive: 'scroll',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    print: false,
    download: false,
    elevation: 5,
  }
}

exports.customOptions2 = function () {
  return {
    selectableRows: true,
    filterType: 'dropdown',
    responsive: 'scroll',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    print: false,
    download: false,
    elevation: 5,
  }
}

exports.customOptions3 = function () {
  return {
    selectableRows: true,
    filterType: 'dropdown',
    responsive: 'scroll',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    print: false,
    download: false,
    sort: true,
    elevation: 5,
  }
}