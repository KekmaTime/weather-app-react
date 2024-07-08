import React from "react";
import { Button, Dialog, DialogContent, TextField, Paper, InputAdornment, IconButton, Typography, Box, Divider } from "@mui/material";
import { searchIcon } from "../../utils/Icons";
import CloseIcon from '@mui/icons-material/Close';

function SearchDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="search-btn">
      <Paper elevation={3} sx={{ padding: '2px', borderRadius: '8px', backgroundColor: 'rgb(var(--button-text-color))' }}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className="source-code flex items-center gap-2"
          sx={{ 
            fontSize: '0.675rem', 
            color: 'rgb(var(--button-bg-color))',
            backgroundColor: 'rgb(var(--button-text-color))',
            '&:hover': {
              backgroundColor: 'rgb(var(--button-text-color))',
            },
            boxShadow: 'none',
            justifyContent: 'flex-start',
            width: '400px'
          }}>
          Search Here...
        </Button>
      </Paper>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ display: 'flex', alignItems: 'center', padding: '4px 16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
              {searchIcon}
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              placeholder="Type a command or search..."
              type="text"
              fullWidth
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '1.2rem' }
              }}
              InputLabelProps={{ style: { fontSize: '1.2rem' } }}
            />
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogContent>
        <Divider sx={{ width: '90%', margin: 'auto' }} />
        <DialogContent>
          <Typography variant="body2" sx={{ fontSize: '1.2rem', color: 'textSecondary' }}>
            Suggestions
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchDialog;