import { ImageList, ImageListItem, ImageListItemBar, IconButton} from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { Key, useEffect, useState } from "react";
import { fetchCatImages } from '../services/catApi';
import { CatImage } from "../types/Cat";



const CatImageList: React.FC = () => {
    const [cats,setCats] = useState <CatImage[]>([]);
    useEffect(() => {
        fetchCatImages().then(setCats);
      }, []);
    


    return (
        <ImageList sx={{ width: 1365, height: 550 }} cols={6} rowHeight={300}>
          
          {cats.map((cat: { id: Key | null | undefined; url: any; }) => (
            <ImageListItem key={cat.id}>
              <img
                src={`${cat.url}?w=248&fit=crop&auto=format`}
                srcSet={`${cat.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="gatitosssss"
                loading="lazy"
              />
              <ImageListItemBar
                title="gatitos bonitos"
                subtitle="from TheCatAPI"
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
    );
    
};
export default CatImageList;