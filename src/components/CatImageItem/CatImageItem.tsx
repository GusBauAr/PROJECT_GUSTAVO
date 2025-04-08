// src/components/CatImageItem.tsx
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

interface CatImageItemProps {
  id: string;
  url: string;
}

const CatImageItem: React.FC<CatImageItemProps> = ({ id, url }) => {
  return (
    <ImageListItem
      key={id}
      sx={{
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <img
        src={`${url}?w=248&fit=crop&auto=format`}
        srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="gatitosssss"
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <ImageListItemBar
        title="gatitos bonitos"
        subtitle="from TheCatAPI"
        actionIcon={
          <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label="info">
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default CatImageItem;
