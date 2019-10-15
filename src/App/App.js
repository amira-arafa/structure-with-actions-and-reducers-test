import React from "react";
import Routing from "./Routing";
import "./App.scss";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_ar from "react-intl/locale-data/ar";
import messages_en from "../Translations/en.json";
import messages_ar from "../Translations/ar.json";
addLocaleData([...locale_en, ...locale_ar]);

let defaultLang;
/* Define your default translations */
let i18nConfig = {
  locale: "en",
  messages: messages_en
};
// locale: this.defaultLang === "ar" ? "ar" : "en",
//   messages: this.defaultLang === "ar" ? messages_ar : messages_en

export class App extends React.Component {
  componentDidUpdate() {
    console.log("mero");
    this.defaultLang = localStorage.getItem("lang");
    console.log(this.defaultLang, this.defaultLang === "ar");
    console.log("object", this.i18nConfig);
  }
  setLanguage = lang => {
    console.log(lang);
    localStorage.setItem("lang", lang);
    this.onChangeLanguage(lang);
  };
  onChangeLanguage(lang) {
    switch (lang) {
      case "ar":
        i18nConfig.messages = messages_ar;
        break;
      case "en":
        i18nConfig.messages = messages_en;
        break;
      default:
        i18nConfig.messages = messages_en;
        break;
    }
    this.setState({ locale: lang });
    i18nConfig.locale = lang;
  }
  render() {
    return (
      <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
        <div
          className={i18nConfig.locale === "ar" ? "rtl" : "ltr"}
          dir={i18nConfig.locale === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <button onClick={() => this.setLanguage("en")}>English</button>
            <button onClick={() => this.setLanguage("ar")}>Arabic</button>
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
      </IntlProvider>
    );
  }
}

export default App;
