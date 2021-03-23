
class GlobalServices {
    _apiBase = 'http://1300bb93c844.ngrok.io/main'
    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok){
        throw new Error(`Could not fetch ${url}`+
        `,reseived ${res.status}`)
        }
        
        return await res.json()
    }

   async getAllWorks (){
   const res = await this.getResourse(`/get-our-works/`)
   return res.map(this._transformWorks)
    }
   async getWork (id){
        const work = await this.getResourse(`/get-our-works/${id}`)
        return this._transformWorks(work)
        }
       async getAllFacultets (){
            const res = await this.getResourse(`/get-facultets/`)
            return res
             }
             getFacultet (id){
                 return this.getResourse(`/get-facultets/${id}`)
                 }
               async getAllTrainings (){
                    const res = await this.getResourse(`/get-training/`)
                    return res
                     }
                     getTraining (id){
                         return this.getResourse(`/get-training/${id}`)
                         }
                         _transformWorks(work){
                         return{
                            id:work.id,
                            name:work.name,
                            logo:work.logo,
                            link:work.link,
                            description:work.description
                         }
                         }
}
const gotapi = new GlobalServices()
gotapi.getAllWorks().then((body) => {
console.log(body)
})



// ttt


