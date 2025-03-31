import React from "react";

const NoPage: React.FC = () => {
    return (
      <>
        <div className="nopage">
            <div className="nopage-exist">
                <div className="nopage-text">
                    Page Not Found :(
                </div>
                <div className="nopage-text-secondary">
                    Looks like the page you're looking for doesn't exist. Click <a className="fourofoura" href="/">here</a> to return to the home page.
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default NoPage;