import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Grid, styled} from '@mui/material';
import {API_URL} from '../../constats.ts';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  author: string;
  message: string;
  image: string | null;
}

const MessageCard: React.FC<Props> = ({author, message, image}) => {
  const cardImage = image ? `${API_URL}/${image}` : null;

  return (
    <Grid item sx={{width: '280px'}}>
      <Card sx={{height: '100%', boxShadow: '10'}}>
        <CardHeader title={author} sx={{borderBottom: '1px solid', textAlign: 'center'}}/>
        {cardImage && (
          <ImageCardMedia image={cardImage}/>
        )}
        <CardContent>
          <strong>Message: </strong>
          {message}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MessageCard;
