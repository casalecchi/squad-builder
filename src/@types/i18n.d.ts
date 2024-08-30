import 'i18next'
import en from '../lang/en.json'
import pt from '../lang/pt.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'en'
        resources: {
            en: typeof en
            pt: typeof pt
        }
    }
}
