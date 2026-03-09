import type { Locale } from './locales'
import en from './dictionaries/en'
import fr from './dictionaries/fr'

export async function getDictionary(locale: Locale){
  return locale === 'fr' ? fr : en
}
