import React from "react";
import { Card, CardContent, Typography, Avatar, IconButton } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const Article = () => {
  return (
    <Card style={{ maxWidth: 800, margin: "auto", padding: "20px", borderRadius: "16px", boxShadow: "0px 8px 16px rgba(0,0,0,0.1)" }}>
      {/* Image Section */}
      <img
        src="path/to/your/eduma-image.png" // Replace with actual image path
        alt="Eduma"
        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
      />

      {/* Title Section */}
      <CardContent>
        <Typography variant="h5" component="h2" style={{ fontWeight: "bold" }}>
          Best LearnPress WordPress Theme Collection For 2023
        </Typography>

        {/* Author and Date Section */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px", color: "#777" }}>
          <PersonIcon style={{ marginRight: "5px" }} />
          <Typography variant="body2" component="p">
            Determined-poitras
          </Typography>
          <CalendarTodayIcon style={{ margin: "0 5px" }} />
          <Typography variant="body2" component="p">
            Jan 24, 2023
          </Typography>
        </div>

        {/* Placeholder Text */}
        <Typography variant="body1" color="textSecondary" component="p" style={{ marginTop: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu, duis dui,
          adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" style={{ marginTop: "10px" }}>
          Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultricies mi ut eleifend luctus ut.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;
