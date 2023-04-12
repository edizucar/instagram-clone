import NavBar from './components/NavBar'
import ContentArea from './components/ContentArea'
import Identity from './components/Identity.js'
import ThirdParties from './components/ThirdParties.js'

//theme
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import React from "react"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


function App() {

  const [visible,setVisible] = React.useState(true);

  return (
    <div className="app">
      <NavBar />
      <ContentArea />
      <Dialog header="Instagram Data Storage Transparency for Parents" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                This website is a prototype for a visualisation designed to inform parent's about data that Instagram stores about their child. This page shows you a mock up of Instagram with additional features to show you the different ways in which Instagram stores information about your child. These features are coloured in  <strong style={{color:"blueviolet"}}>PURPLE</strong>.
            </p>
            <Button label="Continue" style={{backgroundColor:"blueviolet"}} onClick={() => setVisible(false)}/>
        </Dialog>
    </div>
  );
}

export default App;
