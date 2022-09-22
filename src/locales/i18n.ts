import i18n, {Resource} from "i18next";
import {initReactI18next} from "react-i18next";
import * as en from "./en";
import * as ko from "./ko";

const resources: Resource = {
    "en-US": {
        ...en
    },
    "ko-KR": {
        ...ko
    }
} as const;

i18n.use(initReactI18next).init({
    resources,
    lng: "ko-KR",
    fallbackLng: {
        "en-US": ["en-US"],
        default: ["ko-KR"]
    },
    debug: true,
    keySeparator: false,
    interpolation: {escapeValue: false},
    react: {useSuspense: false}
});

export default i18n;