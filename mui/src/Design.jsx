import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionDemo() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "center" }}>
            This is some normal text.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            style={{ display: "flex", justifyContent: "center" }}
            control={
              <Switch
                checked={switchOn}
                onChange={() => setSwitchOn((prev) => !prev)}
              />
            }
          />
        </AccordionDetails>
      </Accordion>

      <Box
        sx={{
          mt: 2,
          height: switchOn ? 200 : 80,
          transition: "height 0.4s ease",
          backgroundColor: "primary.main",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          Hello World :)
        </Typography>
      </Box>
    </Container>
  );
}
