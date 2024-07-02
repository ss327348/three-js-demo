import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Slider,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Card,
} from "@mui/material";
import RotatingBox from "./RotatingBox";
import RotatingTorus from "./RotatingTorus";
import RotatingDodecahedron from "./RotatingDodecahedron";

const ThreeDScene = () => {
  const [boxVisible, setBoxVisible] = useState(true);
  const [torusVisible, setTorusVisible] = useState(true);
  const [dodecahedronVisible, setDodecahedronVisible] = useState(true);
  const [boxSpeed, setBoxSpeed] = useState(0.01);
  const [torusSpeed, setTorusSpeed] = useState(0.01);
  const [dodecahedronSpeed, setDodecahedronSpeed] = useState(0.01);

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
        <Grid item xs={4}>
          <Card sx={{ padding: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setBoxVisible(!boxVisible)}
            >
              Toggle Box
            </Button>
            <Typography variant="body1" gutterBottom>
              Rotation Speed:
            </Typography>
            <Slider
              value={boxSpeed}
              min={0}
              max={0.1}
              step={0.01}
              onChange={(e, value) => setBoxSpeed(value)}
            />
            <TextField
              type="number"
              value={boxSpeed}
              onChange={(e) => setBoxSpeed(Math.max(0, Number(e.target.value)))}
              fullWidth
            />
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setTorusVisible(!torusVisible)}
            >
              Toggle Torus
            </Button>
            <Typography variant="body1" gutterBottom>
              Rotation Speed:
            </Typography>
            <Slider
              value={torusSpeed}
              min={0}
              max={0.1}
              step={0.01}
              onChange={(e, value) => setTorusSpeed(value)}
            />
            <TextField
              type="number"
              value={torusSpeed}
              onChange={(e) =>
                setTorusSpeed(Math.max(0, Number(e.target.value)))
              }
              fullWidth
            />
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setDodecahedronVisible(!dodecahedronVisible)}
            >
              Toggle Dodecahedron
            </Button>
            <Typography variant="body1" gutterBottom>
              Rotation Speed:
            </Typography>
            <Slider
              value={dodecahedronSpeed}
              min={0}
              max={0.1}
              step={0.01}
              onChange={(e, value) => setDodecahedronSpeed(value)}
            />
            <TextField
              type="number"
              value={dodecahedronSpeed}
              onChange={(e) =>
                setDodecahedronSpeed(Math.max(0, Number(e.target.value)))
              }
              fullWidth
            />
          </Card>
        </Grid>
      </Grid>
      <Canvas style={{ height: "60vh", backgroundColor: "#2E3B55" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <OrbitControls /> */}
        <RotatingBox visible={boxVisible} rotationSpeed={boxSpeed} />
        <RotatingTorus visible={torusVisible} rotationSpeed={torusSpeed} />
        <RotatingDodecahedron
          visible={dodecahedronVisible}
          rotationSpeed={dodecahedronSpeed}
        />
      </Canvas>
    </Container>
  );
};

export default ThreeDScene;
