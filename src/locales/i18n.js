import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "services": "Services",
      "client_cases": "Client cases",
      "contact": "Contact",
      "book_a_call": "Book a call today",
      "learn_more": "Learn more",
      "lastest_deals_from_our_clients": "Latest deals from our clients",
      "read_more": "Read more",
      "reviews": "Reviews",
      "free_consultation": "Free Consultation",
      "name": "Name",
      "enquiry": "Enquiry",
      "send": "Send",
      "feel_free": "Feel free to contact us at",
      "or_via": "Or via these social media accounts"
    }
  },
  cn: {
    translation: {
      "services": "服務",
      "client_cases": "客戶案例",
      "contact": "聯繫我們",
      "book_a_call": "預約免費咨詢",
      "learn_more": "了解詳情",
      "lastest_deals_from_our_clients": "客戶真實投資案例",
      "read_more": "查看更多投資案例",
      "reviews": "客戶反饋",
      "free_consultation": "預約您的免費咨詢",
      "name": "名字:",
      "enquiry": "請簡述一下您的問題，我們團隊會盡快聯繫您:",
      "send": "發送",
      "feel_free": "您可以發送Email聯繫我們",
      "or_via": "或者通過以下社交媒體"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;