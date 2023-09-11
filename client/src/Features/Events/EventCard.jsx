import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../CSS styling/FeaturesPagesCSS/eventspage.css';
export default function EventCard(props) {
  const maxLength = "200";
  const [expanded, setExpanded] = useState(false);
  const text = props.eventDetails;
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = text.slice(0, maxLength);
  const shouldTruncate = text.length > maxLength;
  return (
    <Card className='eventCard' sx={{ maxWidth: 345 }} style={{ color: "white" ,  backgroundColor: "#2f3c4e"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontStyle: "bold", fontWeight: "800", textDecoration: "underline" }}>
          {props.eventName}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: "1em", color: "white" }}>
          <div>
            {shouldTruncate ? (
              <>
                {expanded ? (
                  <div>{text}
                    <div><button style={{ marginTop: "1em" }} className='btn btn-outline-light' onClick={toggleExpanded}>Show Less</button></div>
                  </div>

                ) : (
                  <div>
                    {truncatedText}...
                    <div style={{ marginTop: "1em" }}><button className='btn btn-outline-light notificationButton_expanding_text' onClick={toggleExpanded}>Show More</button></div>
                  </div>
                )}
              </>
            ) : (
              <div>
                {text}
              </div>
            )}
          </div>
        </Typography>
      </CardContent>
      <CardActions className='websitelink'>
        <Button size="small" style={{ color: 'white' }}>Go to Website</Button>
      </CardActions>
    </Card>
  );
}