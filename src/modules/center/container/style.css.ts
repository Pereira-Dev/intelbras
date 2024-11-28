import { style } from "@vanilla-extract/css";

export const container = style({
    padding: "32px",
    color: "#FFFFFF",
    minHeight: "100vh",
});

export const actions = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    marginTop: "25px"
});

export const searchInput = style({
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "400px",
});

export const createButton = style({
    backgroundColor: "#007BFF",
    color: "#FFF",
    padding: "12px 20px",
    borderRadius: "6px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    ":hover": {
        backgroundColor: "#0056b3",
    },
});

export const table = style({
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "24px",
    textAlign: "left",
    fontSize: "16px",
    tableLayout: "fixed",
});

export const tableHeader = style({
    backgroundColor: "#2A2A2A",
    color: "#FFF",
    fontWeight: "bold",
    padding: "14px",
    fontSize: "18px",
    cursor: "default",
    textAlign: "left",
    ":last-child": {
        textAlign: "right",
        paddingRight: "16px",
    },
});

export const tableCell = style({
    padding: "16px",
    borderBottom: "1px solid #444",
    color: "#FFF",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    ":last-child": {
        textAlign: "right",
        paddingRight: "16px",
    },
});

export const sortableHeader = style({
    cursor: "pointer",
    ":hover": {
        textDecoration: "underline",
    },
});


export const deleteButton = style({
    backgroundColor: "#FF0000",
    color: "#FFF",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    ":hover": {
        backgroundColor: "#CC0000",
    },
});
