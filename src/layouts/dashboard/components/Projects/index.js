
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";


// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);


  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
   <h1>hello</h1>
        </MDBox>
    
      
   
     
    </Card>
  );
}

export default Projects;
