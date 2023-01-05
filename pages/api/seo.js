import {getFromCacheOrApi} from 'Base'

export default function handler(req, res) {
    
    const  seo = getFromCacheOrApi("seo")

    res.status(200).json(seo)
  }
  