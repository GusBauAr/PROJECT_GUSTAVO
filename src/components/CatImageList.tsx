import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton} from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { CatImage } from "../types/Cat";



const CatImageList: React.FC = () => {
    

    
    return (
        <ImageList sx={{ width: 500, height: 600 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">GALERIA</ListSubheader>
          </ImageListItem>
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