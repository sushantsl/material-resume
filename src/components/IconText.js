import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const IconText = ({ icon, text, textColor }) => {
    const Icon = icon;
    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Icon style={{
                color: "#0E76A8",
                margin: "5px"
            }} />
            {textColor ? <Typography color={textColor} display="block">{text}</Typography>
                : <Typography display="block">{text}</Typography>}
        </Box>
    );
}

export default IconText;