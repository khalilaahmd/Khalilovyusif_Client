import React from "react";
import CookieConsent from "react-cookie-consent";

function Cookies() {
    return (
      <CookieConsent

      style={{
        background: "#916d10",
        textAlign: "center",
        height: "80px",
      }}

      location="bottom"
      expires={1}
      cookieName="CookieConsent"
      
      buttonText="Accept"
      buttonClasses="cookies-btn" 
      buttonId="accept-btn"
      buttonStyle={{
                   background: "goldenrod",
                   color: "White", 
                   fontWeight: "bold",
                   margin: "10px",
                   padding: "10px 20px",
                   border: "none",
                   cursor: "pointer",
                   borderRadius: "10px"
                   }}

      enableDeclineButton
      declineButtonText="Decline"
      declineButtonStyle={{
                   background: "olivedrab", 
                   color: "White", 
                   fontWeight: "bold",
                   margin: "10px",
                   padding: "10px 20px",
                   border: "none",
                   cursor: "pointer",
                   borderRadius: "10px"
                   }}
                   >  

      <p style={{ color: "white",
                  fontSize: "20px"}}>
      We use cookies on this site to enhance your user experience. By clicking the Accept button, you agree to us doing so.
      </p>
      
      </CookieConsent>
    );
  }
  
  export default Cookies;