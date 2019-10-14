import React from "react";
import Routing from "./Routing";
import "./App.scss";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
export class App extends React.Component {
  setLanguage = lang => {
    // this.props.parentCallback(lang);

    console.log("btata");
    console.log(lang);
  };
  render() {
    return (
      <div className="container">
        <div>
          apppppppppppppppppppppppppppppppppp
          <button onClick={() => this.setLanguage("en")}>English</button>
          <button onClick={() => this.setLanguage("de")}>German</button>
          <p>
            <FormattedHTMLMessage
              id="app.text"
              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
              description="Welcome header on app main page"
              values={{ what: "react-intl" }}
            />
          </p>
          <p
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="app.learn-react-link"
              defaultMessage="Learn React"
              description="Link on react page"
            />
          </p>
        </div>
        <Routing />
      </div>
    );
  }
}

export default App;
