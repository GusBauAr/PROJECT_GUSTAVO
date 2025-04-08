import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material"

const CatImageList: React.FC = () => {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader > </ListSubheader>
          </ImageListItem>

            <ImageListItem>
                <ImageListItemBar/> 
                
            </ImageListItem>
          
        </ImageList>
    );
    
}