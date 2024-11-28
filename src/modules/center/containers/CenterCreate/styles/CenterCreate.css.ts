import { style } from "@vanilla-extract/css";

export const container = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212", // Fundo escuro para contraste
});

export const form = style({
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: "100%",
    maxWidth: "500px",
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: "#1f1f1f",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
    color: "#FFFFFF",
});

export const label = style({
    marginBottom: "10px", 
    fontWeight: "bold",
    fontSize: "18px",
    color: "#E0E0E0",
});

export const input = style({
    padding: "12px",
    fontSize: "18px",
    border: "1px solid #ccc",
    marginLeft: "26px",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#2A2A2A", 
    color: "#FFF",
    ":focus": {
        borderColor: "#007BFF",
    },
});

export const select = style({
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    marginLeft: "12px",
    
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#2A2A2A",
    color: "#FFF",
    ":focus": {
        borderColor: "#007BFF",
    },
});

export const error = style({
    color: "#FF4D4D",
    fontSize: "14px",
    marginTop: "4px",
});

export const submitButton = style({
    backgroundColor: "#28A745",
    color: "#FFF",
    padding: "16px 20px", 
    border: "none",
    borderRadius: "8px",
    fontSize: "18px", 
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    ":hover": {
        backgroundColor: "#218838",
    },
});

export const title = style({
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
    color: "#FFF",
});
