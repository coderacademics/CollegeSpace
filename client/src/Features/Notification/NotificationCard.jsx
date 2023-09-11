import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NotificationCard(props) {
  const unformatted_Date = props.date;
  const text = props.notificationDetails;
  const maxLength = "200";
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = text.slice(0, maxLength);
  const shouldTruncate = text.length > maxLength;
  function getFormattedDate(rawdate) {
    const dateStr = rawdate;
    const date = new Date(dateStr);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const day = date.getDate();
    const suffix = getDaySuffix(day);
    const formattedDateWithSuffix = `${day}${suffix} ${formattedDate}`;
    return formattedDateWithSuffix;
  }
  // Function to get the appropriate suffix for the day
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  return (
    <Card className='notificationCard' sx={{ maxWidth: 345 }} style={{ color: "white", backgroundColor: "#2f3c4e" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontStyle: "bold", fontWeight: "800", textDecoration: "underline" }}>
          {props.notificationName}
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
      <CardActions className='date'>
        <Button size="small" style={{ color: "white" }}>Published on:{getFormattedDate(unformatted_Date)}</Button>
      </CardActions>
    </Card>
  );
}