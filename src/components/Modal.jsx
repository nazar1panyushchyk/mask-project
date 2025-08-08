import * as React from "react";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 665,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {

     React.useEffect(() => {
       if (open) {
         document.body.style.overflow = "hidden";
       } else {
         document.body.style.overflow = "";
       }
     }, [open]);

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock
      BackdropProps={{
        sx: {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Box sx={style}>
        <div style={{ marginBottom: "23px" }}>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
            style={{ position: "absolute", top: 15, right: 10 }}
          ></button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.3756090306733!2d22.264307739856825!3d48.607774836936585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47391951bb12c57d%3A0x1ffd1d42d128288f!2sMaskarad%20House!5e0!3m2!1suk!2sua!4v1754513820623!5m2!1suk!2sua"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </MuiModal>
  );
}
