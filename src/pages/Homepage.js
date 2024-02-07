import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RttRoundedIcon from '@mui/icons-material/RttRounded';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FilterCenterFocusRoundedIcon from '@mui/icons-material/FilterCenterFocusRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", pl:5}}>

{/* // Box 1 For TEXT Generation */}
        <Box p={2}>
          <Typography fontSize={25} color={'dodgerblue'} fontWeight={"bold"} pl={2}>
            Tex Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 5,
              borderRadius: 5,
              height: 210,
              width: 210,
              pl:2,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "pink",
                cursor: "pointer",
              },
              
            }}
          >
            <RttRoundedIcon
              sx={{ fontSize: 80, color: "darkRed", mt: 2, ml: '25%' }}
            />
            <Stack p={3} pt={1}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMMARY
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Summarize Long Text into Short Sentence.
              </Typography>
            </Stack>
          </Card>
        </Box>


{/* // Box 2 For Paragraph Generation */}

        <Box p={2} pl={6}>
          <Typography fontSize={25} color={'dodgerblue'} fontWeight={"bold"} pl={0}>
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 5,
              borderRadius: 5,
              height: 210,
              width: 210,
              pl:2,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "pink",
                cursor: "pointer",
              },
            }}
          >
            <FormatColorTextIcon
              sx={{ fontSize: 80, color: "darkRed", mt: 2, ml: '25%' }}
            />
            <Stack p={3} pt={1}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Generate Paragraph.
              </Typography>
            </Stack>
          </Card>
        </Box>



{/* // Box 3 For Chat Bot */}

        <Box p={2} pl={6}>
          <Typography fontSize={25} color={'dodgerblue'} fontWeight={"bold"} pl={7}>
            Chat Bot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 5,
              borderRadius: 5,
              height: 210,
              width: 210,
              pl:2,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "pink",
                cursor: "pointer",
              },
            }}
          >
            <LiveHelpIcon
              sx={{ fontSize: 80, color: "darkRed", mt: 2, ml: '25%' }}
            />
            <Stack p={3} pt={1}>
              <Typography fontWeight="bold" variant="h5">
              AI ChatBot
              </Typography>
              <Typography fontWeight="bold" variant="h6">
              Ask Question!!
              </Typography>
            </Stack>
          </Card>
        </Box>




{/* // Box 4 For JS converter */}

        <Box p={2} pl={6}>
          <Typography fontSize={25} color={'dodgerblue'} fontWeight={"bold"} pl={0}>
            Java Script Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 5,
              borderRadius: 5,
              height: 210,
              width: 210,
              pl:2,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "pink",
                cursor: "pointer",
              },
            }}
          >
            <JavascriptRoundedIcon
              sx={{ fontSize: 80, color: "darkRed", mt: 2, ml: '25%' }}
            />
            <Stack p={3} pt={1}>
              <Typography fontWeight="bold" variant="h5">
              JS CONVERTOR
              </Typography>
              <Typography fontWeight="bold" variant="h6">
              Create javascript Code
              </Typography>
            </Stack>
          </Card>
        </Box>


{/* // Box 5 For image generator */}

        <Box p={2} pl={6}>
          <Typography fontSize={25} color={'dodgerblue'} fontWeight={"bold"} pl={0}>
          SciFi Image Generator
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 5,
              borderRadius: 5,
              height: 210,
              width: 210,
              pl:2,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "pink",
                cursor: "pointer",
              },
            }}
          >
            <FilterCenterFocusRoundedIcon
              sx={{ fontSize: 80, color: "darkRed", mt: 2, ml: '25%' }}
            />
            <Stack p={3} pt={1}>
              <Typography fontWeight="bold" variant="h5">
             SciFi Image
              </Typography>
              <Typography fontWeight="bold" variant="h6">
            Generate SciFi Image
              </Typography>
            </Stack>
          </Card>
        </Box>

        
      </Box>
    </>
  );
};

export default Homepage;
