import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private _HttpClient:HttpClient) { }
  headers:any={
		'X-RapidAPI-Key': '87d7b9aa19msh8191b7140092bddp1579eajsn90ad56d53cbc',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}

   getPopularityGame(): Observable <any> {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`,{headers: this.headers }
  )
    }
    getCategoryGame_1(): Observable <any> {
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing`,{headers: this.headers }
      )
        }
        getCategoryGame_2(): Observable <any> {
          return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports`,{headers: this.headers }
          )
            }
            getCategoryGame_3(): Observable <any> {
              return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=social`,{headers: this.headers }
              )
                }
                getCategoryGame_4(): Observable <any> {
                  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`,{headers: this.headers }
                  )
                    }
                    getCategoryGame_5(): Observable <any> {
                      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world`,{headers: this.headers }
                      )
                        }
                        getCategoryGame_6(): Observable <any> {
                          return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=zombie`,{headers: this.headers }
                          )
                            }
                            getCategoryGame_7(): Observable <any> {
                              return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=fantasy`,{headers: this.headers }
                              )
                                }
                                getCategoryGame_8(): Observable <any> {
                                  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=action-rpg`,{headers: this.headers }
                                  )
                                    }
                                    getCategoryGame_9(): Observable <any> {
                                      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=action`,{headers: this.headers }
                                      )
                                        }
                                        getCategoryGame_10(): Observable <any> {
                                          return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=fight`,{headers: this.headers }
                                          )
                                            }
                                            getCategoryGame_11(): Observable <any> {
                                              return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale`,{headers: this.headers }
                                              )
                                                }
    getPopularityGame_2(): Observable <any> {
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`,{headers: this.headers }
      )
        }
        getPopularityGame_1(): Observable <any> {
          return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date`,{headers: this.headers }
          )
            }
            getPopularityGame_3(): Observable <any> {
              return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`,{headers: this.headers }
              )
                }
                getPopularityGame_4(): Observable <any> {
                  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance`,{headers: this.headers }
                  )
                    }
    getAllgame(): Observable <any> {
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{headers: this.headers }
      )
        }
        getPlatformPc(): Observable <any> {
          return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`,{headers: this.headers }
          )
            }
            getPlatformBr(): Observable <any> {
              return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser`,{headers: this.headers }
              )
                }
                getGameDetails(id:string): Observable <any> {
                  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{headers: this.headers }
                  )
                    }



               // 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452'
        //GET https://www.freetogame.com/api/games?platform=pc
}
